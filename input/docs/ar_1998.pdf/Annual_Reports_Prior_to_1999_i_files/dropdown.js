function dropdown(dropdownId, hoverClass, mouseOffDelay) {
	if(dropdown = document.getElementById(dropdownId)) {
		var listItems = dropdown.getElementsByTagName('li');
		for(var i = 0; i < listItems.length; i++) {
			listItems[i].onmouseover = function() { this.className = addClass(this); }
			listItems[i].onmouseout = function() {
				var that = this;
				setTimeout(function() { that.className = removeClass(that); }, mouseOffDelay);
				this.className = that.className;
			}
			
			var anchor = listItems[i].getElementsByTagName('a');
			anchor = anchor[0];
			anchor.onfocus = function() { tabOn(this.parentNode); }
			anchor.onblur = function() { tabOff(this.parentNode); }
		}
	}
	function tabOn(li) {
		if(li.nodeName == 'LI') {
			li.className = addClass(li);
			tabOn(li.parentNode.parentNode);
		}
	}
	function tabOff(li) {
		if(li.nodeName == 'LI') {
			li.className = removeClass(li);
			tabOff(li.parentNode.parentNode);
		}
	}
	function addClass(li) { return li.className + ' ' + hoverClass; }
	function removeClass(li) { return li.className.replace(hoverClass, ""); 
	}
}

function buildmenu(){
	//var smoothmenu=ddsmoothmenu;
	var $mainmenu=$('#smoothmenu1 ul') && $('#nav li'); //reference main menu UL
	var $headers=$mainmenu.find('ul').parent();
	$($headers).hover(
		function(e){
			$(this).children('a:eq(0)').addClass('selected')
		},
		function(e){
			$(this).children('a:eq(0)').removeClass('selected')
		}
	)};
rightarrow='<img src="'+ "../images/right-arrow2.gif" + '" alt="' + "Sub Links" + '" class="' + "rightArrowImg" + '" style="border:0;" />';
//var smoothmenu=ddsmoothmenu;
jQuery(document).ready( function($) {
    $('#nav ul li').has('ul').addClass('addArrow');
	$('#nav ul li').has('ul').append(rightarrow);
	$('#nav > li, #nav > li > li').hover( function () {$(this).addClass('hover');},
  	function () {$(this).removeClass('hover');});
	buildmenu();
	var BodyW = $('body').innerWidth();
	var BodyW3 = BodyW / 4;
	$('.TopStrip').width(BodyW3);
	$(window).resize(function() {
	var BodyW = $('body').innerWidth();
	var BodyW3 = BodyW / 3.5;
	$('.TopStrip').width(BodyW3);
	});


	
});
