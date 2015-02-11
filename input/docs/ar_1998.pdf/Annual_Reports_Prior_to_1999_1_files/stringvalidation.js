document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (/*e.keyCode === 67 || 
             e.keyCode === 86 || */
             e.keyCode === 85 || 
             e.keyCode === 117) ||
			 e.keyCode === 116) {
            return false;
        } else {
            return true;
        }
};

//****************** Date Validate ****************
/*function getDateFormat(){
    date_default_timezone_set('Europe/Rome');
    return date('Y-m-d H:i:s');
}
$options= array("options"=>array("regexp"=>"/^\d{4}-\d{2}-\d{2} [01][0-9]|2[0-3]:[0-5][0-9]:[0-5][0-9]$/"));
$dateTime = filter_var(getDateFormat(), FILTER_VALIDATE_REGEXP, $options);
var_dump($dateTime);  */


function next_page(pgno){ //********** OnClick Submit Form *****************************************//
	if(pgno<=9) var pgno='0'+pgno;
		var act=document.section.action;
		document.section.action=act+pgno;
		document.forms["section"].submit();
	return false;
}

//***************** OutSide Link alert function **************************//

function outside_link(UrL)
{
	/*alert('External website that opens in a new window');
	newwindow=window.open(UrL,'New','');
	if (window.focus) {newwindow.focus();}
    return false;*/

	var confirmation=confirm('External website that opens in a new window');
	if(confirmation == true)
		{		
		newwindow=window.open(UrL,'New','');
		if (window.focus) {newwindow.focus();}
		}
	else return false;

}

function validString() {

   var valid = /^[a-zA-Z0-9-,&_.?\/\\ ]{3,150}$/;    
   if (document.getElementById('q').value == "") {
	   alert(" - Null string.");   
	   return false;
   } else if(!valid.test(document.getElementById('q').value)){ 
	   alert("Not a valid String");
	   return false;
         
   }
   return true;
}

function validadvsearch() {

   var valid = /^[a-zA-Z0-9-,&_.?\/\\ ]{3,150}$/;    
   if (document.getElementById('q').value == "") {
	   alert(" - Null string.");   
	   return false;
   } else if(!valid.test(document.getElementById('q').value)){ 
	   alert("Not a valid String");
	   return false;
         
   }
   else{
   var nfn=document.getElementById('fname').action+'&q='+document.getElementById('q').value+'&st=y';
   window.open(nfn,'','width=880,height=900,scrollbars=yes,toolbar=no,status=no');
   return false;
   }
}

function srchstr() {

   var valid = /^[a-zA-Z0-9 ]{0,150}$/;    
   if(!valid.test(document.getElementById('s').value)){ 
	   alert("Not a valid String");
	   return false; }
   return true;
}

/********** Login Form of FSI Validation *************/
function login_vldt() {

	if(document.submit.unm.value==""){
	alert("Must fill the UserName Field");
	document.submit.unm.focus();
	return false;}

	if(document.submit.rndmtext.value==""){
	alert("Must fill the Image Text Field");
	document.submit.rndmtext.focus();
	return false;}
	
 var iChars = "!`~@#$%^*()+=-_[]\\\',/{}|\":;<>?1234567890";
  for (var i = 0; i < document.submit.unm.value.length; i++) {
  	if (iChars.indexOf(document.submit.unm.value.charAt(i)) != -1) {
  	alert ("Special Characters not\n allowed in username");
	document.submit.unm.value="";
	document.submit.unm.focus();
  	return false;
	}
  }
	if(document.submit.pwd.value==""){
	alert("Must fill the Password Field");
	document.submit.pwd.focus();
	return false;}
}


//****************************** Date Validation Functions End / Form Validation Start for HCI Portmoresby ************
function ismaxlength(obj){
var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
if (obj.getAttribute && obj.value.length>mlength)
obj.value=obj.value.substring(0,mlength)
}

var dtCh= "/";
var d = new Date();
var cday = d.getDate();
var cmonth = d.getMonth() + 1;
var maxYear = d.getFullYear();
var minYear=maxYear - 100;
var chk = location.host;
var chQ = location.href;
var rstr = random_string(8);

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

var sc1= chk.search('129');
var sc2= chk.search('248');
var lst4=chk.slice(-4);
function isDate(dtStr,cnt){
    if(cnt==2) { var dobck=document.pio.dob.value; var dd=dobck.substr(0,2); var mm=dobck.substr(3,2); var yyyy=dobck.substr(6); }
    if(cnt==3) { var dobck=document.pio.dateofissue.value; var pdd=dobck.substr(0,2); var pmm=dobck.substr(3,2); var pyyyy=dobck.substr(6); 
	}
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
		if(dtStr=="") return true;
	if (pos1==-1 || pos2==-1){
		alert("Date format must be : dd/mm/yyyy")
		return false
	}
		
	//if((cnt==2 && cnt!=3) && ((day<=dd && month<=mm && year<=yyyy) || (month<mm && year<yyyy)) || year<yyyy || (day<dd && month<=mm && year<=yyyy) || (day>=dd && month<mm && year<yyyy)) { alert("Enter a valid passport issue date"); 
	//	return false;
	//}
	//if((cnt==3) && ((day<=pdd && month<=pmm && year<=pyyyy) || (month<pmm && year<pyyyy)) || year<pyyyy || (day<pdd && month<=pmm && year<=yyyy) || (day>=pdd && month<pmm && year>=yyyy)) { alert("Enter a valid Date of arrival in PNG");
	//	return false;
	//}
             		
	if (strDay.length<1 || day<1 || day>31 || (day>cday && month>=cmonth && year>=maxYear) || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Enter a valid day")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12 || (month>cmonth && year>=maxYear)){
		alert("Enter a valid month")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Enter a valid date")
		return false
	}
return true
}

var sc3= chk.search('in');
var ch=  chQ.indexOf('/?');

function formValidator(){
	// Make quick references to our fields
	var firstname = document.pio.fname;
	var midname = document.pio.mname;
	var lastname = document.pio.lname;
	var placebirth = document.pio.placebirth;
	var profession = document.pio.profession;
	var qualification = document.pio.qualification;
	var permaddress = document.pio.permaddress;	
	var passnumber = document.pio.passnumber;
	var placeofissue = document.pio.placeofissue;
	var telephone = document.pio.telephone;
	var mobileno = document.pio.mobileno;
	var email = document.pio.email;
	var universityname = document.pio.universityname;
	var universityaddress = document.pio.universityaddress;
	var periodofstay = document.pio.periodofstay;
    var ffirstname = document.pio.ffname;
    var fmidname = document.pio.fmname;
    var flastname = document.pio.flname;
	var faddress = document.pio.faddress;	
	var sfirstname = document.pio.sfname;
    var smidname = document.pio.smname;
    var slastname = document.pio.slname;
	var saddress = document.pio.saddress;
	var sprofession = document.pio.sprofession;
	var nationality = document.pio.nationality;
	var spassnumber = document.pio.spassnumber;
	var splaceofissue = document.pio.splaceofissue;	
	var depends = document.pio.depends;
	var kinname1 = document.pio.kinname1;
	var kinaddress1 = document.pio.kinaddress1;
	var kinname2 = document.pio.kinname2;
	var kinaddress2 = document.pio.kinaddress2;
	
	// Check each input in the order that it appears in the form!
	if(isAlphabet_mandatory(firstname, "Enter only letters for your First name")){
	if(isAlphabet(midname, "Enter only letters for your Middile name")){
	if(isAlphabet(lastname, "Enter only letters for your Last name")){
	if(isAlphabet(placebirth, "Enter only letters for your Place of birth")){
	if(isAlphabet(profession, "Enter only letters for your Profession")){
	if(isAlphabet(qualification, "Enter only letters for your Qualification")){
	if(isAlphanumeric_address(permaddress, "Numbers and Letters Only for Address")){
	if(isAlphanumeric_pass(passnumber, "Enter a valid Passport Number\n Must starts with an alphabet followed by numerals")){
	if(isAlphabet(placeofissue, "Enter only letters for your Passport place of issue")){
	if(isNumeric(telephone, "Enter a valid Telephone Number")){
	if(isNumeric(mobileno, "Enter a valid Mobile Number")){
	if(emailValidator(email, "Enter a valid email address")){
	if(isAlphabet(universityname, "Enter only letters for your University Name")){
	if(isAlphanumeric_address(universityaddress, "Numbers and Letters Only for University address")){
	if(isAlphanumeric(periodofstay, "Numbers and Letters Only for Probable period of stay")){
    if(isAlphabet(ffirstname, "Enter only letters for your Father First name")){
	if(isAlphabet(fmidname, "Enter only letters for Father Mid name")){
	if(isAlphabet(flastname, "Enter only letters for Father Last name")){
	if(isAlphanumeric_address(faddress, "Numbers and Letters Only for Father Address")){
    if(isAlphabet(sfirstname, "Enter only letters for your Spouse First name")){
	if(isAlphabet(smidname, "Enter only letters for Spouse Mid name")){
	if(isAlphabet(slastname, "Enter only letters for Spouse Last name")){
	if(isAlphanumeric_address(saddress, "Numbers and Letters Only for Spouse Address")){
	if(isAlphabet(sprofession, "Enter only letters for your Spouse Profession")){
	if(isAlphabet(nationality, "Enter only letters for your Nationality")){
	if(isAlphanumeric_pass(spassnumber, "Enter a valid Spouse Passport Number\n Must starts with an alphabet followed by numerals")){
	if(isAlphabet(splaceofissue, "Enter only letters for your spouse Passport place of issue")){
	if(isAlphanumeric_address(depends, "Enter only letters for your dependents one Name")){
	if(isAlphabet(kinname1, "Enter only letters for your Relative one Name")){
	if(isAlphanumeric_address(kinaddress1, "Numbers and Letters Only for Relative one address")){
	if(isAlphabet(kinname2, "Enter only letters for your Relative two Name")){
	if(isAlphanumeric_address(kinaddress2, "Numbers and Letters Only for Relative two address")){
		
for(var i=1; i<5; i++){
if(i==1) var dt=document.pio.dob;
if(i==2) var dt=document.pio.dateofissue;
if(i==3) var dt=document.pio.pngdate;
if(i==4) var dt=document.pio.sdateofissue;
//alert(i+dt);
     if (isDate(dt.value,i)==false){
		dt.focus()
		return false
	}
}
							return true;
						}
					}
				}
			}
		}
	}
	} } }
	} } }
	} } }
	} }
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	
	return false;
	
}
if(navigator.onLine && (sc1!=-1 || sc2!=-1 || sc3!=-1 || lst4!='7.64') && ch!=-1)
	//window.location='/'+rstr;

function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9 ]+$/;
	if(elem.value.match(numericExpression) || elem.value==''){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isAlphabet_mandatory(elem, helperMsg){
	var alphaExp = /^[a-zA-Z ]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}
function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z ]+$/;
	if(elem.value.match(alphaExp) || elem.value==''){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


function isAlphanumeric(elem, helperMsg){
	var alphaExp = /^[0-9a-zA-Z ]+$/;
	if(elem.value.match(alphaExp) || elem.value==''){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


function isAlphanumeric_pass(elem, helperMsg){
	var alphaExp = /^[0-9a-zA-Z ]+$/;
	var alpha = /^[a-zA-Z]+$/;
	var numeric = /^[0-9]+$/;
	if(elem.value.match(alphaExp) || elem.value==''){
		if((elem.value.substr(0,1).match(alpha)) && (elem.value.substr(1).match(numeric)) || elem.value=='')return true;
		else{
		alert(helperMsg);
		elem.focus();
		return false;
	}return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


function isAlphanumeric_address(elem, helperMsg){/*Address Field All Validation*/

 var iChars = "(\")./\!`~@#$%^*+=_[]'{}|;<>?";
  for (var i = 0; i < elem.value.length; i++) {
  	if (iChars.indexOf(elem.value.charAt(i)) != -1) {
	alert(helperMsg);
	elem.value="";
	elem.focus();
  	return false;
	}
  }return true;
}


function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp) || elem.value==''){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}
//****************************** Date Validation Functions End / Form Validation End for HCI Portmoresby ************


/*************** Right Click Disabled ************************/

var message="Sorry, right-click has been disabled"; 
function clickIE() {if (document.all) {alert(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {alert(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false") 

function random_string(size){
    var str = "";
    for (var i = 0; i < size; i++){
        str += random_character();
    }
    return str;
}
function random_character() {
    var chars = "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    return chars.substr( Math.floor(Math.random() * 62), 1);
}