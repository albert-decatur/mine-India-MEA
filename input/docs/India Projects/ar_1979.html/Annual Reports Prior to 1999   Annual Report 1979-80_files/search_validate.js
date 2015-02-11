function CheckString()
	{
		var Key = document.getElementById("q");
		if(Key.value.length < 4)
		{
			Key.value = "Minimum 4 character required";
			return false;
			
		}
		if(Key.value == Key.defaultValue )
		{
			Key.value = "Enter valid search text";
			return false;			
		}
		if(Key.value == "Minimum 4 character required" ||  Key.value == "Enter valid search text" )
		{
			return false;			
		}
		return true;
	}

var delayb4scroll=2000; //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
var marqueespeed=1; //Specify marquee scroll speed (larger is faster 1-10)
var pauseit=1; //Pause marquee onMousever (0=no. 1=yes)?

////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=marqueespeed;
var pausespeed=(pauseit==0)? copyspeed: 0;
var actualheight='';

function scrollmarquee(){
if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+20))
cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px";
else
cross_marquee.style.top=parseInt(marqueeheight)+20+"px";
}

function initializemarquee(){
cross_marquee=document.getElementById("vmarquee")
cross_marquee.style.top=0;
marqueeheight=document.getElementById("marqueecontainer").offsetHeight
actualheight=cross_marquee.offsetHeight;
if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
cross_marquee.style.height=marqueeheight+"px";
cross_marquee.style.overflow="scroll";
return
}
setTimeout('lefttime=setInterval("scrollmarquee()",60)', delayb4scroll);
}

if (window.addEventListener)
window.addEventListener("load", initializemarquee, false);
else if (window.attachEvent)
window.attachEvent("onload", initializemarquee);
else if (document.getElementById)
window.onload=initializemarquee;