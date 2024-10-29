export default function html([first,...strings],...values) {
    // console.log([first,...strings]); 
    // console.log(first);
    // console.log(strings);
    // console.log(values);
    return values.reduce(
        (acc,cur) => acc.concat(cur,strings.shift()),
        [first]
    )
    .filter(x => x && x!==true || x===0)
    .join('');

}

export function createStore(reducer){

    //first get init 
    let state = reducer();
    const roots = new Map(); 
    console.log(state)

    function render(){
        for(const [root,component] of roots){
            const output = component()
            root.innerHTML = output;
        }
    }

    return {
        attach(component,root){
            roots.set(root,component)
            render();
        },
        connect(selector = state => state){
            console.log(state);
            return component => (props, ...args) =>
                    component(Object.assign({},props,selector(state), ...args))

        }, 
        dispatch(action,...args){

            state = reducer(state,action,args);
            
            render();
        }

    }
}