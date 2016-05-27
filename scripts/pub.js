//передбачити випадок внесення змін на сайт
//JavaScript: document.body.appendChild(document.createElement('script'));document.body.lastChild.src='http://ulrda.kr-admin.gov.ua/scripts/pub.js';void 0;
//ver=0.2.4
/*
changelog
0.2.5(27.05.2016)
	Workground for Cannot save bug (server side)
	Must be tested.
0.2.4(16.02.2016)
	Prevent sync with initially non-empty cards.
	Implemented & re multiindex
	Number in cookie changes onsubmit
	Settings is set only at first time
	Implemented settings
	set focus on number_doc on second launch
	Date to cookie is set from calendar, dates is setting to equal values
	Min syncing on number_doc & doc_name change
	Todo:tracking to localstorage
	Issues: Guaratied syncing only works with current index (not full implementation of multiindex)

0.2.3(15.02.2016)
	Prevent sync with filled-in cards.
	Temporary fillness() have to be <=7 to accept changes (todo: Fillness have to be calculated once at start)
	todo: Prevent number changing on page autoupdate
0.2.2
	Was add fillness function
	Added dateunzero function
	plus1d reimplemented as plusd with optional arg days
	Implemented func synccookie
	Date syncs on focusout from date_kancelar & date_create to cookie & between them
0.2.1 
	tabindex begins from doc_name
	fix for browsers, who puts text cursot at beginning of the field
*/

//"data=07-09-2015"
var i,dtype_;
if(typeof settings == 'undefined') var settings={
	date:"",
	number:[],
	dateremind:false,
	reinited:false,
	wasempty:true,
	currentindex:"01-20"
};
var now=new Date();
now.setDate(now.getDay()==1?now.getDate()-3:now.getDate()-1);

if (settings.date == ''){
	
	
	//now.getDate()+'-'+now.getMonth()+'-'+now.getFullYear()
	//треба поставити довгий експрай і видаляти при виході пхпсессід
	//typeof data
	synccookie(false);
	if(typeof document.forms['form_kartka'] == "object")
		if(fillness()>0) settings.wasempty=false;
}else settings.reinited=true;




if(typeof document.forms['form_kartka'] == "object"){
	if(settings.wasempty){//only cards initially was empty

		object_direction_select.style.left='200px';
		object_direction_select.style.position='fixed';
		object_direction_select.getElementsByTagName('table')[0].style.background='#F0F8FF';
		document.forms[0].elements['doc_name'].tabIndex=1;
		document.forms[0].elements['number_doc'].tabIndex=2;
		document.forms[0].elements['keywords'].tabIndex=3;
		document.forms[0].elements['object_direction'].tabIndex=4;
		document.forms[0].elements['date_kancelar'].value=settings.date;
		document.forms[0].elements['date_create'].value=settings.date;
		document.forms[0].elements['saver_type'].value=saver_type_array[0];
		document.forms[0].elements['media_type'].value=media_type_array[0];
		document.forms[0].elements['saver'].value=saver_array[5];
		document.forms[0].elements['source'].value=source_select_array[5];
		document.forms[0].elements['secure_sens'].value='-';
		document.forms[0].elements['date_secure'].value='0';
		
		
		document.getElementsByName('object_direction')[0].onkeypress=function(va){
			var key=getChar(va);
			for(i=0;i<object_direction_array.length;i++)if (key==object_direction_array[i].charAt(0)) {
				object_direction_select.style.display='';
				object_direction_select.getElementsByTagName('td')[i].style.backgroundColor='black';
				object_direction_select.getElementsByTagName('td')[i].style.color='#cccccc';
			};
		};
		document.getElementsByName('object_direction')[0].nextSibling.onkeypress=document.getElementsByName('object_direction')[0].onkeypress;

		//if no cursor at last
		ctrl=document.forms['form_kartka'].elements['number_doc'];
		if(settings.reinited) ctrl.focus();
		else document.forms['form_kartka'].elements['doc_name'].focus();
		//ctrl.setSelectionRange(ctrl.value.length,ctrl.value.length);
		//document.getElementsByName('number_doc')[0].focus();
		//fix for browsers, who puts text cursot at beginning of field
		ctrl.onfocus=function(){
			that=this;
			setTimeout(function(){that.setSelectionRange(that.value.length,that.value.length);},10);
		};
		mininit();

		document.forms['form_kartka'].elements['keywords'].onfocus=function(){
			that=this;
			setTimeout(function(){that.setSelectionRange(that.value.length,that.value.length);},10);
		};
		document.forms['form_kartka'].elements['date_kancelar'].addEventListener('focusout',
			function(){
				settings.date=this.value;
				document.forms['form_kartka'].elements['date_create'].value=settings.date;
				synccookie(true);
		});
		document.forms['form_kartka'].elements['date_create'].addEventListener('focusout',
			function(){
				settings.date=this.value;
				document.forms['form_kartka'].elements['date_kancelar'].value=settings.date;
				synccookie(true);
		});
		document.forms['form_kartka'].getElementsByTagName('center')[1].firstChild.onclick=function(){
				settings.number[settings.currentindex]++;
				console.log(settings.number[settings.currentindex]);
				synccookie(true);
				document.forms['form_kartka'].submit();
		};
		document.forms['form_kartka'].elements['doc_name'].onchange=mininit;
		document.forms['form_kartka'].elements['number_doc'].onchange=mininit;
	};

	if(!settings.wasempty) //Workground for Cannot save bug (server side)
		document.forms['form_kartka'].getElementsByTagName('center')[1].firstChild.onclick=function(){

			function walk(elem) {
				var aa=elem.firstChild;
				while( aa != null ){
					if(aa != null) {
						if(typeof aa.name != 'undefined')
							if(aa.name !=''){fd.append(aa.name,aa.value);}
						if(aa.hasChildNodes()) walk(aa);
						aa=aa.nextSibling;
					}		
				}
			}
			fd=new FormData;
			walk(document.forms['form_kartka']);
			xhr=new XMLHttpRequest;
			xhr.open('POST',form_kartka.action,false);
			xhr.setRequestHeader('Content-Type', 'text/html;charset=utf-8');
			xhr.send(fd);
			form_kartka.action="?q=save.php&act=add&max_row=28994&number_kartka=28994";
			//wait for xhr.send
			//setTimeout(,1500)
			document.forms['form_kartka'].submit();
		}

}

function mininit(){
	dtype_=document.forms['form_kartka'].elements['doc_name'].value.split(' ')[0];
	var ctrl=document.forms['form_kartka'].elements['doc_type'];
	for(i=0;i<doc_type_array.length;i++)
		if(dtype_ ==doc_type_array[i]) ctrl.value=doc_type_array[i];
	synccookie(false);
	numberprocess();
	addnumkeyw();
	console.log('mininit being executed')
}


//Patch for calendar
function cs_click(e) {
	updobj.value=calvalarr[evtTgt(EvtObj(e)).id.substring(1,evtTgt(EvtObj(e)).id.length)];
	getObj('fc').style.display='none';
	document.forms['form_kartka'].elements['date_create'].value=updobj.value;
	document.forms['form_kartka'].elements['date_kancelar'].value=updobj.value;
	settings.date=updobj.value;
	synccookie(true);
}

function synccookie(tocoockie){
	if(tocoockie){
		if(typeof settings !='undefined')
			document.cookie='data='+settings.date+';Max-Age=40000000';
			document.cookie='currentindex='+settings.currentindex+';Max-Age=40000000';
			//document.cookie='num-'+settings.currentindex+'='+settings.number[settings.currentindex]+';Max-Age=40000000';
			for (var ao in settings.number) document.cookie='num-'+ao+'='+settings.number[ao]+';Max-Age=40000000';
			//console.log(ao+'(put)='+settings.number[ao]);

	}
	else{
		settings.date=getCookie('data');
		document.cookie='data='+settings.date+';Max-Age=40000000';
		settings.currentindex=getCookie('currentindex');
		settings.number[settings.currentindex]=getCookie('num-'+settings.currentindex);
		for (var ao in settings.number) settings.number[ao]=getCookie('num-'+ao);
		//console.log(ao+'='+settings.number[ao]);
	}
	//syncing only numbers,that exist in settings and current
	//action if no number in cookie
	//refractor data etc
}

function fillness(type__){
	console.log(this);
	var j=0;
	for (i=0;i <  document.forms['form_kartka'].elements.length;i++){
		var el=document.forms['form_kartka'].elements[i];
		if(el.type == 'textarea')
			if(el.value!='') j++;
	};
	if(arguments.length == 0)return j;
	else 
		if(type__=='num') return j;
	//if(type__=='empty')
	//if(type__=='full')
	//if(type__=='notfull')


};

function datezero(inp){

	var tmp=(String(inp.getDate()).length==1)?'0'+String(inp.getDate()):String(inp.getDate());
	tmp+='-'+((String(inp.getMonth()+1).length==1)?'0'+String(inp.getMonth()+1):String(inp.getMonth()+1));
	tmp+='-'+inp.getFullYear();
	return tmp;
}

function dateunzero(data){
	var date__=new Date();
	var ardata=data.split('-');
	
	date__.setUTCMonth(ardata[1]-1);
	date__.setUTCFullYear(ardata[2]);
	date__.setDate(ardata[0]);
	return date__;
}

function plusd(){
	var dat=dateunzero(settings.date);
	if(arguments.length == 0)
		dat.setDate(dat.getDate()+1);
	else
		dat.setDate(dat.getDate()+arguments[0]);
	settings.date=datezero(dat);
	console.log(settings.date);
	document.cookie='data='+settings.date+';Max-Age=40000000';

}


	
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function numberprocess(){
	var num;
	if(typeof getCookie != 'undefined' && document.getElementsByName('number_doc').length){
		if(document.forms['form_kartka'].elements['number_doc'].value==''){
			document.forms['form_kartka'].elements['number_doc'].value=settings.currentindex+'/'+settings.number[settings.currentindex]+'/';
			}
		else {
			num=document.forms['form_kartka'].elements['number_doc'].value.split('/');
			//document.cookie='num='+num[0]+'/'+num[1];
			settings.number[settings.currentindex]=num[1];
			synccookie(true);
		}
		
	} else num='no "number_doc" or getCookie()';
	return num;
}



function addnumkeyw(){//((\d|[-/])+\.*(\d|[-/])+\-р)|(\d|[-/])+\.*(\d|[-/])
	var ma=document.forms['form_kartka'].elements["doc_name"].value.match(/№\s*(\d|[-\/.р])+/g);
	var la='';
	if(ma!=null){
		//for(i=0;i<ma.length;i++) if(ma[i].length>5)la+=((la.length==0)?'':' ')+ma[i];
		for(i=0;i<ma.length;i++) la+=((la.length==0)?'':' ')+ma[i].match(/(\d|[-\/.р])+/g);
		document.forms['form_kartka'].elements['keywords'].value=la;
	}
}

function getChar(event) {
  if (event.which == null) {  // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode) 
  } 
 
  if (event.which!=0 && event.charCode!=0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  } 
 
  return null; // спец. символ
}

