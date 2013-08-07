(function($) {
	// @author Zandy
	// jquery-growl -- like growl(http://www.growl.info/).
	function debug(obj) {
		if (window.console && window.console.log)
			window.console.log(obj);
	};
	var growlDivCss = {
		position: 'fixed',
		top: '12px',
		right: '12px',
		'z-index': 99999,
		display: 'block'
	};
	var growlBoxCss = {
		color: '#fff',
		'background-color': '#333',
		'border': '1px solid #333',
		'font-size': '12px',
		'line-height': '1.8',
		'-moz-border-radius': '6px',
		'border-radius': '6px',
		'-moz-opacity': '0.8',
		opacity: '0.8',
		padding: '3px 6px',
		'margin-bottom': '6px',
		display: 'block',
		width: '150px'
	};
	var growlBoxErrorCss = {
		color: 'red',
		'background-color': '#ffe57e', //ffffc2
		'-moz-box-shadow': '0 5px 90px #888',
		'box-shadow': '0 5px 90px #888',
		'border': '1px solid #e2b709'
	};
	var defaults = {
		life: 5000,
		type: 'ok'
	};
	$.extend({
		getGrowlDiv: function() {
			if ($('#div_msg').size() == 0) {
				var growlDiv = $('<div id="div_msg"></div>')
				growlDiv.css(growlDivCss);
				growlDiv.appendTo($('body'));
			}
			return $('#div_msg');
		},
		growl: function(msg, opts) {
			opts = opts || {};
			var growlDiv = $.getGrowlDiv();
			var box = $('<div></div>');
			var css = {};
			var type = opts.type || defaults.type;
			if (type == 'error') {
				css = growlBoxErrorCss;
			}
			var _css = $.extend({}, growlBoxCss, css);
			box.css(_css);
			box.appendTo(growlDiv);
			box.html(msg).slideDown('fast', function(){
				var life = opts.life || defaults.life;
				setTimeout(function(){
					box.animate({height: '0px', "margin-bottom": "0px", 'opacity' : 0}, "falst", function(){
						box.remove();
					});
				}, life);
			});
		}
	});
})(jQuery);