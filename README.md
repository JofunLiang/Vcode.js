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

# MIT License
### Copyright (c) 2018 jofunLiang
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
