function Validator(options ){
    
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;

            };
            element = element.parentElement;

        }
    }


    var selectorRules ={};
function validate(inputElement,rule){

    // var errorElement = getParent(inputElement,'.form-group');
    var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
    //var errorMessage = rule.test(inputElement.value);
    var errorMessage;
    
    //get rules of selector 
    var rules = selectorRules[rule.selector];

    //lop through each rules and check 
    for(var i = 0 ;i<rules.length;i++){
        switch(inputElement.type){
            case 'radio':
            case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
            default:
                errorMessage = rules[i](inputElement.value);

        }
       
        if(errorMessage) break;
    }
    
    if(errorMessage){
        errorElement.innerText = errorMessage;
        getParent(inputElement,options.formGroupSelector).classList.add('invalid');
    }else{
        errorElement.innerText = '';
        getParent(inputElement,options.formGroupSelector).classList.remove('invalid');

    }

    return !errorMessage;
   } 
   //get Elements of form need to validate
   var formElement = document.querySelector(options.form);
   

    if(formElement){
        formElement.onsubmit = function(e){
            e.preventDefault();
            
            var isFormValid = true;

            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                console.log(isValid);
                if(!isValid){
                    isFormValid = false;
                }
            });
            // console.log(isFormValid);
            // if(isFormValid){
            //     console.log('khong co loi');

            // }else{
            //     console.log(' co loi');

            // }
        

            if(isFormValid){
                // case submit with Javasciprt 
                if(typeof options.onSubmit === 'function'){
                
                    var enableInputs = formElement.querySelectorAll('[name]'); 
                    
                    var formValues = Array.from(enableInputs).reduce(function(values,input){
                            // console.log(values);
                            // // console.log(values[input.name] = input.value);
                            // values[input.name] = input.value
                            // console.log(values[input.name]);
                            switch(input.type){
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                    break;

                                case 'checkbox':
                                    if(!input.matches(':checked'))return values;
                                    if(!Array.isArray(values[input.name])) {
                                        values[input.name] = [];

                                    }
                                    values[input.name].push(input.value);
                                    break;

                                   
                                default:
                                    values[input.name] = input.value;
                            }
                            return  values ; 
        
        
                    },{});

                    
                    
                    options.onSubmit(formValues);
 
                }
                // case submit with default behabior 
                else{
                    formElement.onsubmit();

                }
            }


            
        }

      
    
        options.rules.forEach(function(rule){

            //save rules of each input
            //  = rule.test;
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElements = formElement.querySelectorAll(rule.selector);
          


            //console.log(rule.selector);
        
          // console.log(inputElement);
          Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
            //    console.log(inputElement);
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                } 
            });

        });
       

    }
}

//Definition of the rules
//Rules
// When has a error => return a error message 
// When valid => do not return (undefined)
Validator.isRequired = function(selector,message){

    return {
        selector :selector,
        test :function(value){
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }

}
Validator.isEmail= function(selector,message){
    return {
        selector :selector,
        test :function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: message || 'Vui lòng nhâp email theo đúng cú pháp'
        }
    }


}

Validator.minLength = function (selector,min,message){
    return {
        selector:selector,
        test: function(value){

            return value.length >= min ? undefined : message || `Bạn Phải Nhập Ít Nhất ${min} Kí Tự`;
        }

    }
}


Validator.isConfirmed = function (selector, getConfirmValue,message ){

    
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
    
    
    
    
}