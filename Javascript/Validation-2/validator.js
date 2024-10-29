function Validator(formSelector){

    var _this = this;
    // // Assign default value to parameter
    // if(!options){
    //     options = {};
    // }
    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element.parentElement;
        }

    }

    var formRules = {};
    var validatorRules = {
        required: function (value){
                return value ? undefined : 'please enter this field'

        },

        email: function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'This field has to email';

        },
        min: function(min){
            return function(value){
                return value.length >=min ? undefined :`Please, Enter at least ${min} characters`;
            }
        },
        max: function(max){
            return function(value){
            
                return value.length <= max ? undefined :`Please, Enter at least ${max} characters`;
            }
        }
    }


    var formElement = document.querySelector(formSelector);

    if(formElement){

        var inputs = formElement.querySelectorAll('[name][rules]');
        for(var input of inputs ){

            var rules = input.getAttribute('rules').split('|');
            // for(var rule of rules){
            //     
            // }
            for(var rule of rules){
                var ruleInfo
                var isRuleHasValue = rule.includes(':');
                console.log(rule);
                if(isRuleHasValue){
                    ruleInfo = rule.split(':')
                    
                    // console.log(ruleInfo);
                    rule = ruleInfo[0];
                    // console.log(validatorRules[rule](ruleInfo[1]))
                }


                var ruleFunc = validatorRules[rule];
                
                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1])
                }
                console.log(ruleFunc);
                
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);   
                }else{
                    // console.log(validatorRules[rule]);
                    formRules[input.name] = [ruleFunc];
                    
                }

            }
            // formRules[input.name] = input.getAttribute('rules');
            //Listening events to validate(onblur, onchange)            
        
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        
        }
        function handleValidate(event){
            var rules = formRules[event.target.name];
            var errorMessage;

            rules.find(function (rule){
               errorMessage = rule(event.target.value);
               return errorMessage

           });
           if(errorMessage){
               var formGroup = getParent(event.target, '.form-group'); 
            
               if(!formGroup) return;
               if(formGroup){
                formGroup.classList.add('invalid');

                var formMessage = formGroup.querySelector('.form-message');

                if(formMessage){
                    formMessage.innerText = errorMessage;

                    }
                }
           }
           return !errorMessage;

        }    

        // Function Clear Message Error 
        function handleClearError(event){
            var formGroup = getParent(event.target, '.form-group'); 
            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message'); 
                
                
                if(formMessage){
                    formMessage.innerText = ''
                }
            }

        }
        
    }

    // Handle behavior when submit form 
    formElement.onsubmit = function (event){
        event.preventDefault();

        
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for(var input of inputs ){
            
            
            if(!handleValidate({target: input})){
                isValid = false;
            }

        }
        console.log(isValid);
        //When has no error submit form 
        if(isValid){
            
           
            if (typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce(function (values, input) {
                    
                    switch(input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            }
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                    }

                    return values;
                }, {});
                return _this.onSubmit(formValues);
            }
            // Trường hợp submit với hành vi mặc định
            else {
                formElement.submit();
            }
           
        }


    }
}