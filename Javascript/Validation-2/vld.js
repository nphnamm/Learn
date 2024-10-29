

Settings

Hi! Here some our recommendations to get the best out of BLACKBOX:

Be as clear as possible

End the question in what language you want the answer to be, e.g: ‘connect to mongodb in python
or you can just
Watch tutorial video
Here are some suggestion (choose one):
Write a function that reads data from a json file
How to delete docs from mongodb in phyton
Connect to mongodb in nodejs
Ask any coding question
send
refresh
Blackbox AI Chat is in beta and Blackbox is not liable for the content generated. By using Blackbox, you acknowledge that you agree to agree to Blackbox's Terms and Privacy Policy
CodePen Home
[Vanilla JS] Validator
Son Dang
Follow
Love
Settings




User Menu
HTML
HTML Options
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
CSS
CSS Options
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
JS
0 unsaved changes 
JS Options
            if (element.parentElement.matches(selector)) {

1
// Đối tượng `Validator`
2
function Validator(options) {
3
    function getParent(element, selector) {
4
        while (element.parentElement) {
5
            if (element.parentElement.matches(selector)) {
6
                return element.parentElement;
7
            }
8
            element = element.parentElement;
9
        }
10
    }
11
​
12
    var selectorRules = {};
13
​
14
    // Hàm thực hiện validate
15
    function validate(inputElement, rule) {
16
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
17
        var errorMessage;
18
​
19
        // Lấy ra các rules của selector
20
        var rules = selectorRules[rule.selector];
21
        
22
        // Lặp qua từng rule & kiểm tra
23
        // Nếu có lỗi thì dừng việc kiểm
24
        for (var i = 0; i < rules.length; ++i) {
25
            switch (inputElement.type) {
26
                case 'radio':
27
                case 'checkbox':
28
                    errorMessage = rules[i](
29
                        formElement.querySelector(rule.selector + ':checked')
30
                    );
31
                    break;
32
                default:
33
                    errorMessage = rules[i](inputElement.value);
34
            }
35
            if (errorMessage) break;
36
        }
37
        
38
        if (errorMessage) {
39
            errorElement.innerText = errorMessage;
40
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
41
        } else {
42
            errorElement.innerText = '';
43
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
44
        }
45
​
46
        return !errorMessage;
47
    }
48
​
49
    // Lấy element của form cần validate
50
    var formElement = document.querySelector(options.form);
51
    if (formElement) {
52
        // Khi submit form
53
        formElement.onsubmit = function (e) {
54
            e.preventDefault();
55
​
56
            var isFormValid = true;
57
​
58
            // Lặp qua từng rules và validate
59
            options.rules.forEach(function (rule) {
60
                var inputElement = formElement.querySelector(rule.selector);
61
                var isValid = validate(inputElement, rule);
62
                if (!isValid) {
63
                    isFormValid = false;
64
                }
65
            });
66
​
67
            if (isFormValid) {
68
                // Trường hợp submit với javascript
69
                if (typeof options.onSubmit === 'function') {
70
                    var enableInputs = formElement.querySelectorAll('[name]');
71
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
72
                        
73
                        switch(input.type) {
74
                            case 'radio':
75
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
76
                                break;
77
                            case 'checkbox':
78
                                if (!input.matches(':checked')) {
79
                                    values[input.name] = '';
80
                                    return values;
81
                                }
82
                                if (!Array.isArray(values[input.name])) {
83
                                    values[input.name] = [];
84
                                }
85
                                values[input.name].push(input.value);
86
                                break;
87
                            case 'file':
88
                                values[input.name] = input.files;
89
                                break;
90
                            default:
91
                                values[input.name] = input.value;
92
                        }
93
​
94
                        return values;
95
                    }, {});
96
                    options.onSubmit(formValues);
97
                }
98
                // Trường hợp submit với hành vi mặc định
99
                else {
100
                    formElement.submit();
101
                }
102
            }
103
        }
104
​
105
        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
106
        options.rules.forEach(function (rule) {
107
​
108
            // Lưu lại các rules cho mỗi input
109
            if (Array.isArray(selectorRules[rule.selector])) {
110
                selectorRules[rule.selector].push(rule.test);
111
            } else {
112
                selectorRules[rule.selector] = [rule.test];
113
            }
114
​
115
            var inputElements = formElement.querySelectorAll(rule.selector);
116
​
117
            Array.from(inputElements).forEach(function (inputElement) {
118
               // Xử lý trường hợp blur khỏi input
119
                inputElement.onblur = function () {
120
                    validate(inputElement, rule);
121
                }
122
​
123
                // Xử lý mỗi khi người dùng nhập vào input
124
                inputElement.oninput = function () {
125
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
126
                    errorElement.innerText = '';
127
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
128
                } 
129
            });
130
        });
131
    }
132
​
133
}
134
​
135
​
136
​
137
// Định nghĩa rules
138
// Nguyên tắc của các rules:
139
// 1. Khi có lỗi => Trả ra message lỗi
140
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
141
Validator.isRequired = function (selector, message) {
142
    return {
143
        selector: selector,
144
        test: function (value) {
145
            return value ? undefined :  message || 'Vui lòng nhập trường này'
146
        }
147
    };
148
}
149
​
150
Validator.isEmail = function (selector, message) {
151
    return {
152
        selector: selector,
153
        test: function (value) {
154
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
155
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
156
        }
157
    };
158
}
159
​
160
Validator.minLength = function (selector, min, message) {
161
    return {
162
        selector: selector,
163
        test: function (value) {
164
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
165
        }
166
    };
167
}
168
​
169
Validator.isConfirmed = function (selector, getConfirmValue, message) {
170
    return {
171
        selector: selector,
172
        test: function (value) {
173
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
174
        }
175
    }
176
}
177
​

Console
Assets
Comments

Add to Collection
Fork
Embed
Export
Share
1