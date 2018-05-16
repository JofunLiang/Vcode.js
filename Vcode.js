/**
 * version:1.0.0
 * https://github.com/JofunLiang/Vcode.js
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

;(function(v, p) {
	
	"function" === typeof define?
	define([], p) : "object" === typeof module && module.exports?
	module.exports = p() : v.Vcode = p();
	
})(this, function(){
	
	//- 生成两个数间的随机数 -------------------------------------------------------------------------------
	function rand(min, max){
		return Math.random()*(max - min) + min;
	};
	
	//- 生成验证码函数 --------------------------------------------------------------------------------------
	//- @length：验证码长度 -----------------------------------------------------------------
	//- @data：验证码数据源 -----------------------------------------------------------------
	function createCode(length, data){
		var code = "";
		
		for(var i = 0; i < length; i++){
			code += data.charAt(Math.random()*data.length);
		}
		return code;
	};
	
	//- 生成随机颜色函数 ------------------------------------------------------------------------------------
	//- @max：色值（0-255） ------------------------------------------------------------------
	//- 函数返回值为字符串的rgb颜色 --------------------------------------------------------------
	function randColor(max){
		var color = [];
		for(var i = 0; i < 3; i++){
			color[i] = Math.floor(Math.random()*max);
		}
		color = color.join(",");
		return "rgb(" + color + ")";
	};
	
	//- 字体旋转角度函数 ------------------------------------------------------------------------------------
	function transform(){
		var transform = "transform: rotate(" + rand(-45, 45) + "deg);";
		return transform + "-ms-" + transform;	
	};
	
	//- 元素设置css样式 --------------------------------------------------------------------------------------
	function setCss(el, cssObj){
		var cssText = "";

		for(var k in cssObj){
			cssText += k + ":" + cssObj[k] + ";"
		}
		el.style.cssText = cssText;
	};
	
	//- 创建星点干扰层 ---------------------------------------------------------------------------------------
	//- @width：干扰层元素 的宽度 ------------------------------------------------------------------------
	//- @height：干扰层元素 的高度 ------------------------------------------------------------------------
	function createInterference(width, height){
		var 
		shadow = "",
		density = width * height/36;
		
		for(var i = 0, l = Math.floor(density); i < l; i++){
			shadow += Math.floor(rand(-1, width)) 
				   + "px "
				   +  Math.floor(rand(-1, height)) 
				   + "px 0 "
				   +  randColor(256) 
				   + ",";
		}
		shadow = shadow.substring(0, shadow.length-1);
		return ("<div style='" + 
				"width:2px;" +
				"height:2px;" +
				"opacity:0.9;" +
				"position:absolute;" +
				"top:0;" +
				"left:0;" +
				"box-shadow:" +
				shadow +
				"'" +
				"</div>");
	};
	
	//- 渲染验证码函数 --------------------------------------------------------------------------------------
	function renderCodeHtml(code){
		var  html = "";
		for(var i = 0, l = code.length; i < l; i++){
			html += "<span style='" 
			     +  transform() 
			     +  "display:inline-block;"
			     +  "color:" + randColor(160) + ";"
			     +  "'>"
				 +  code.charAt(i)
			     +  "</span>";
		}
		return html;
	};
	
	//- 初始化函数 -----------------------------------------------------------------------------------------
	function init(o){
		var 
		el = this.el,
		spacing = o.spacing || "normal",
		fontSize = o.fontSize || "inherit",
		data = {
			"number": "0123456789",
			"letter": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
			"mix": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
		};
		
		setCss(el, {
			"position": 'relative',
			"overflow": 'hidden',
          	"font-family": "arial,sans-serif",
          	"text-align": "center",
			"-ms-user-select": "none",
			"user-select": "none",
			"text-shadow": "0 2px 3px #333",
          	"font-size": fontSize,
          	"line-height": el.offsetHeight + "px",
          	"letter-spacing": spacing, 	
		});
		this.data = o.data || data[o.type || "mix"];
		this.onReset();
	};
	
	//- 构造函数 ----------------------------------------------------------------------------------------
	var Me = function(o){
		this.code = null;
		this.data = null;
		this.count = o.count || 4;
		this.el = document.querySelector(o.el);
		
		//- 执行初始化 -----------------------------------
		init.apply(this, arguments);
	};
	
	//- 重置函数 -------------------------------------------------------------------------------------------
	Me.prototype.onReset = function(){
		var 
		code,
		width, 
		height;
		
		code = createCode(this.count, this.data);
		width = this.el.offsetWidth;
		height = this.el.offsetHeight;
		this.el.innerHTML = renderCodeHtml(code) 
			+ createInterference(width, height);
		this.code = code;
	};

	return Me;
	
});