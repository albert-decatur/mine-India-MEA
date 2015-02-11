/*--------------------------------  Common Functions -------------------------------*/
function setVisibility(id, visibility, status) {if (status == "over") { document.getElementById(id).style.display = visibility;} else { document.getElementById(id).style.display = visibility; }}

;(function($){
/*---------------------------------------------------------------------*/
$(document).ready( function(){
/*---------------------------------------------------------------------*/	
	   $('body').removeClass("noJS").addClass('has_js has_tabjs');
	   dropdown('nav', 'hover', 1);
		/*if (location.href.indexOf("advanced-search.htm") > 0) {
		   //$('.calender').datepick();
	   };*/
		   if($(".calender").length){
		//$(".calender").datepicker();
		$('.calender').datepick();
	};
 		$(".tab_content").hide(); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content
	
	   if( $(".tabNav").length > 0){	
		$(".tabContent").hide();
			$(".tabContent:first").show(); 
			$(".tabNav li a:first").addClass("active");
			$(".tabNav li a").click(function() {
				$(".tabNav li a").removeClass("active");
				$(this).addClass("active");
				$(".tabContent").hide();
				var selected_tab = $(this).attr("href");
				$(selected_tab).fadeIn();
				return false;
			});
		};
		
		if( $("#js_slider").length > 0 ||  $("#mobile").length > 0){
			$('.anythingControls').show();
			$('.arrow').show();		
			$('#js_slider').anythingSlider({autoPlay : true,autoPlayLocked : true,pauseOnHover:true,playRtl:false,animationTime:750, resumeDelay:7000, delay:6000,hashTags:false});
			$('#mobile').anythingSlider({expand : true,	autoPlay : true, buildStartStop : false,animationTime:750, resumeDelay:7000, delay:6000,hashTags:false});	
		};
		

if( $("#scroller-body").length > 0){	
		$("#scroller-body .displayPanel").hide();
			$("#scroller-body .displayPanel:nth-child(2)").show(); 
			$(".tabNavTop li:nth-child(2) a").addClass("selected");
			$(".tabNavTop li a").click(function() {
				$(".tabNavTop li a").removeClass("selected");
				$(this).addClass("selected");
				$("#scroller-body .displayPanel").hide();
				var selected_tab = $(this).attr("href");
				$(selected_tab).fadeIn();
				return false;
			});
		};


















































		
		if( $(".missionTabNav").length > 0){	
		$(".tab_container .tab_content").hide();
			$(".tab_container .tab_content:first").show(); 
			$(".missionTabNav li:first").addClass("active");
			$(".missionTabNav li a").click(function() {
				$(".missionTabNav li").removeClass("active");
				$(this).parent().addClass("active");
				$(".tab_container .tab_content").hide();
				var selected_tab = $(this).attr("href");
				$(selected_tab).fadeIn();
				return false;
			});
		};
		
		if( $("#ContentPlaceHolder1_KeywordSearch1_pnlKeywordSrch").length > 0){
			/* Highlighting */
				$.fn.highlight = function (pat) {
					function innerHighlight(node, pat) {
						var skip = 0;
						if (node.nodeType == 3) {
							var pos = node.data.toUpperCase().indexOf(pat);
							if (pos >= 0) {
								var spannode = document.createElement('span');
								spannode.className = 'highlight';
								var middlebit = node.splitText(pos);
								var endbit = middlebit.splitText(pat.length);
								var middleclone = middlebit.cloneNode(true);
								spannode.appendChild(middleclone);
								middlebit.parentNode.replaceChild(spannode, middlebit);
								skip = 1;
							}
						}
						else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
							for (var i = 0; i < node.childNodes.length; ++i) {
								i += innerHighlight(node.childNodes[i], pat);
							}
						}
						return skip;
					}
					return this.each(function () {
						innerHighlight(this, pat.toUpperCase());
					});
				};
				
		 $(searchTextB).autocomplete({
            source: function (request, response) {
                var pID;
                var hdnSiteID = hdnStID;
                //var hdnLanguageID = hdnLangID;
				$('.ui-corner-all').addClass('zindexUp');
                if (hdnSiteID.value == '') pID = 1;
                else pID = hdnSiteID.value;
                $.ajax({
                    url: "AutoCompleteService.asmx/AutoSugessionSiteSearch",
                    data: "{ 'SearchText': '" + escape(request.term) + "' , 'SiteId':'" + pID + "', 'LanguageId':'" + hdnLangID.value + "', 'TopRecords':'" + 'top 5' + "' }",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataFilter: function (data) { return data; },
                    success: function (data) {
                        response($.map(data.d, function (item) {
                            var label1 = item.split("::");
							
                            return {
                                value: label1[1] + "::" + label1[2],
                                label: label1[0]
                            }
                        })
					);
		   $('.ui-autocomplete').highlight($(searchTextB).val());
                    var p = $(".ui-autocomplete");var position = p.position();
					var positionFinL = position.left - 170;
					var positionFinT = position.top + 5;
					$(".ui-autocomplete").css('left',positionFinL);
					$(".ui-autocomplete").css('top',positionFinT);
					},
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        //alert(textStatus);
						return
                    }
                });
            },
            select: function (event, ui) {
                $(event.target).val(ui.item.label);                
                var target = ui.item.value.split("::")
		//  var target = ui.item.llink;
                if (target[1] == "_blank") {
                    window.open(target[0], '_blank');
                }
                else {
                    //window.location = ui.item.value;
                    window.location = target[0];
                }

                return false;
            },
            minLength: 4
        });
		
				
		};
	 
	if($('#divexpand').length == 1){
    	$('#divexpand').hide();$('.seemoreBtn').click(function(){$(this).siblings('#divexpand').toggle('fast'); return false;});
	};
	
	$("#backToTop").hide();
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {$('#backToTop').fadeIn('fast');} else {$('#backToTop').hide();}
	});
	$('#backToTop a').click(function (){$('html, body').animate({scrollTop:0}, '200');return false;});

	if($('.tableData').length > 0){
		$(".tableData tr:even").addClass("evenRow");
	};
	
	if($('.panel').length > 0){
		//$("#panel-1 a").last().focus(function(){$("#panel-2 a, #panel-3 a").attr('tabindex','-1');});
		$("li.panel a").attr('tabindex','-1');
		$("#s_0 a").removeAttr('tabindex');
	};
	
	/* for mobile go to top link */
      switch_top=function(e){var link=$(e.target);var href=link.attr("href");if(href.search("a")!=-1)href=href.replace("a","b");else href=href.replace("b","a");link.attr("href",href)};var counter=0;$('a[href="#up"]').each(function(index,value){link=$(value);link.attr("href","#up"+counter++ +"a").click(switch_top)});


	var windowWidth = $(window).width();
	if (windowWidth < 480){$('.mobcontainer').find('.imgBdr').each(function(){$('.imgBdr').wrap("<span class='imageOut' />");});};
	$('.goBackM').click(function(){window.history.back(); return false;});

	var BodyW = $('body').innerWidth();
	var BodyW3 = BodyW / 4;
	$('.TopStrip').width(BodyW3);
	$(window).resize(function() {
		var BodyW = $('body').innerWidth();
		var BodyW3 = BodyW / 3.5;
		$('.TopStrip').width(BodyW3);
	});
	
	if($('#innerContent .inFocusLatestCnt').length > 0){
		var max = -1;
		$("#innerContent .inFocusLatestCnt").each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		$("#innerContent .inFocusLatestCnt").height(max);
	};
	
	if( $(".customSelect").length > 0){
		$(".customSelect").customSelect();
	}; 
	if( $(".siteLanguage").length > 0){
		$(".siteLanguage").customSelect();
	}; 
	
	if($(".indiaMapImg").length > 0){
		$(".indiaMapImg area").tooltip({track: true, hide:false, show:false });
		$("img[usemap]").maphilight();
	}
	
	//if($(".tableData").length > 0){$('.tableData').stacktable({myClass:'stacktable small-only'});}
	
	
/*---------------------------------------------------------------------*/
});
})(jQuery);

function validate() {return false;};
if($('#ContentPlaceHolder1_KeywordSearch1_txtKeyword').length){
	if (hdnLangID.value == '2') {
		google.load("elements", "1", { packages: "transliteration" });
		function onLoad() {
			var options = { sourceLanguage: 'en', destinationLanguage: ['hi'], shortcutKey: 'ctrl+g', transliterationEnabled: true };
			var control = new google.elements.transliteration.TransliterationControl(options);
			control.makeTransliteratable(['ContentPlaceHolder1_KeywordSearch1_txtKeyword']);
		}
		google.setOnLoadCallback(onLoad);
	}
	function CheckString()
				{ 
					var Key = searchTextB;
					if(Key.value.length < 3){
						Key.value = "Minimum 3 character required";
						return false;					
					}
					if(Key.value == Key.defaultValue ){
						Key.value = "Enter valid search text";
						return false;		
					}
					if(Key.value == "Minimum 3 character required" || Key.value == "Enter valid search text" ){
						return false;			
					}
					return true;
				}
}
if($(".addthis_button_more").length){
addthis.layers({'theme' : 'transparent', 'share' : { 'position' : 'left', 'numPreferredServices' : 0  } });
};