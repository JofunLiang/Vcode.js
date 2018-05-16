# Vcode.js
A lightweight verification code generation plug-in based on native JavaScript development.

一个基于原生JavaScript开发的、轻量的验证码生成插件

V: 1.0.0

DEMO:[https://jofunliang.github.io/Vcode.js/example.html](https://jofunliang.github.io/Vcode.js/example.html)


# Usege
```
<script src="Vcode.min.js"></script>
```
OR

```
// ES6 Modules or TypeScript
import vcode from 'Vcode'

// CommonJS
const vcode = require('Vcode')
```
Support AMD/CMD/ES6 module standard.


# Examples
```
var vcode1 = new Vcode({
  el:"#demo1 .code",
  count:4,	
  fontSize:"60px",
  type:"number",
  spacing:0
});

```

### Arguments Object

| attribute   | typeof      |  description  |
| :--------   | :-----      | :---- |
| el          | string      | required, Accepts a string containing a CSS selector which is then used to match a element.     |
| data        | string      | selectable, You can customize the source of the verification code.     |
| count       | number      | selectable, The length of the verification code, The default is 4  |
| type        | string      | selectable, The type of the verification code, There are three types of the number/letter/mix. The default is mix  |
| fontSize    | string      | selectable, The font-size of the verification code.   |
| spacing     | string      | selectable, The letter-spacing of the verification code. The default is zero  |


### Properties of the new object

| property    | typeof      | description  |
| :--------   | :-----      | :----        |
| el          | object      | The mounted element.   |
| code        | string      | The verification code.     |
| data        | string      | the source of the verification code.     |
| count       | number      | The length of the verification code.     |
| onReset     | function    | You can use this method to regenerate a new verification code.     |


# MIT License
### Copyright (c) 2018 jofunLiang
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
