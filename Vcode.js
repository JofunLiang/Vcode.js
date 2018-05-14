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
	//- @type：验证码类型 -------------------------------------------------------------------
	//- @length：验证码长度 -----------------------------------------------------------------
	//- @data：验证码数据源 -----------------------------------------------------------------
	function createCode(type, length, data){
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
	//- @width：干扰层的宽度 ------------------------------------------------------------------------
	//- @height：干扰层的高度 -----------------------------------------------------------------------
	//- 返回值为 HTML DOM 元素对象 -------------------------------------------------------------------
	function createInterference(width, height){
		var 
		shadow = "0 0 0 " + randColor(256) + ",",
		num = (width * height)/36,
		div = document.createElement("div");
		
		for(var i = 0, l = Math.floor(num); i < l; i++){
			shadow += Math.floor(rand(-1, width)) + "px " 
					   +  Math.floor(rand(-1, height)) + "px 0 " 
					   +  randColor(256) + ",";
		}
		shadow = shadow.substring(0, shadow.length-1);
		setCss(div, {
			"width": "2px",
			"height": "2px",
			"opacity": 0.9,
			"position": "absolute",
			"top":0,
			"left":0,
			"z-index":3,
			"box-shadow": shadow
		});
		return div;
	}
	
	//- 渲染函数 ------------------------------------------------------------------------------------------
	function render(el, code, spacing, size){
		var 
		html = "",
		rects = el.getBoundingClientRect(),
		width = rects.width || (rects.right - rects.left),
		height = rects.height || (rects.bottom-rects.top);
		
		for(var i = 0, l = code.length; i < l; i++){
			html += "<span style='" 
			     +  transform() 
			     +  "display:inline-block;"
			     +  "color:" + randColor(160) + ";"
			     +  "'>"
				 +  code.charAt(i)
			     +  "</span>";
		}
		el.innerHTML = html;
		el.appendChild(createInterference(width, height));
		setCss(el, {
			"position": 'relative',
			"overflow": 'hidden',
          	"font-family": "arial,sans-serif",
          	"text-align": "center",
			"-ms-user-select": "none",
			"user-select": "none",
			"text-shadow": "0 2px 3px #333",
          	"font-size": size,
          	"line-height": height + "px",
          	"letter-spacing": spacing, 	
		});
	};
	
	//- 构造函数 ----------------------------------------------------------------------------------------
	var Me = function(o){
		this.code = null;
		this.el = document.querySelector(o.el);
		this.count = o.count || 6;
		this.type = o.type || "mix";
		this.spacing = o.spacing || "normal";
		this.fontSize = o.fontSize || "inherit";
		this.data = null;
		this.init(o.data);
	};
	
	//- 重置函数 -------------------------------------------------------------------------------------------
	Me.prototype.onReset = function(){
		this.code = createCode(this.type, this.count, this.data);
		render(this.el, this.code, this.spacing, this.fontSize);
	};
	
	//- 初始化函数 -----------------------------------------------------------------------------------------
	Me.prototype.init = function(data){
		var o = {
			"number": "0123456789",
			"letter": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
			"mix": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
		};
		
		this.data = data || o[this.type];
		this.onReset();
	};

	return Me;
	
});