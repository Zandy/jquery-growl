(function($) {
	// @author Zandy
	// growl 插件 -- 类似 growl @see http://www.growl.info/
	$.extend({
		getGrowlDivCss: function () {
			return {
				position: 'fixed',
				top: '12px',
				right: '12px',
				'z-index': 99999,
				display: 'block'
			};
		},
		getGrowlBoxCss: function () {
			return {
				color: '#fff',
				'background-color': '#333',
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
		},
		getGrowlDiv: function() {
			if ($('#div_msg').size() == 0) {
				var growlDiv = $('<div id="div_msg"></div>')
				growlDiv.css($.getGrowlDivCss());
				growlDiv.appendTo($('body'));
			}
			return $('#div_msg');
		},
		growl: function(msg, css) {
			var growlDiv = $.getGrowlDiv();
			var box = $('<div></div>');
			box.css($.getGrowlBoxCss());
			box.css(css);
			box.appendTo(growlDiv);
			box.html(msg).slideDown('fast', function(){
				setTimeout(function(){
					box.animate({height: '0px', "margin-bottom": "0px", 'opacity' : 0}, "falst", function(){
						box.remove();
					});
				}, 5000);
			});
		}
	});
})(jQuery);