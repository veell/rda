// JavaScript Document

document.onkeyup=function(){
   if(event.ctrlKey&&event.altKey&&getChar(event)=='E') document.location.href='editor.php?.'+document.location.pathname;
}

document.addEventListener( "DOMContentLoaded", function(){
 if(document.body.onload==null)  menus();
 //document.body.onload=null
}, false );

function menus()
{
//  if((typeof leftside)=='undefined') alert('tr');
createmenu(17);
    document.getElementById('noj').style.visibility='hidden';
  
  var w=typeof leftside=='undefined' ? '140':leftside.width;
  //flashbanner('ab3',"http://www.clocklink.com/clocks/0001-blue.swf?TimeZone=GMT0200",'',w,w);
  banners(18); 
  flashbanner('leftb',"http://img.gismeteo.ru/flash/120x80s.swf?city=88394&skin=celsius",'city="88394&skin=celsius"&lang="ru"','120','80');
  var next=document.getElementById('ab3');
  var textlink=document.createElement('a');
  textlink.href='/lustration.html';
  textlink.appendChild(document.createTextNode('����������� �������� ������'));
  next.parentNode.insertBefore(textlink,next);
}
  var URL="http://img.gismeteo.ru/flash/120x80s.swf?city=88394&skin=celsius";



var size_zero=17;

var size=size_zero;

function set_size(command)
{
if (command=='up') {size=size+2;}
if (command=='down') {size=size-2;}
if (command=='reset') {size=13;}
if (command=='zero') {size=size_zero;}
document.cookie = "fsize="+size+";";
var elm=document.getElementsByTagName('div');
for (i=0; i<elm.length; i++) elm[i].style.fontSize=size;
var elm=document.getElementsByTagName('p');
for (i=0; i<elm.length; i++) elm[i].style.fontSize=size;
var elm=document.getElementsByTagName('td');
for (i=0; i<elm.length; i++) elm[i].style.fontSize=size-1;
var elm=document.getElementsByTagName('a');
for (i=0; i<elm.length; i++) elm[i].style.fontSize=size-2;
}

var visioprobl='<center>\n\
<b>���� �������� ����?<br>������ ������� ����� ������:<br><br>\n\
<a href="#" onclick="set_size(\'down\')" style="font-size: 15px;">A-</a>&nbsp;&nbsp;\n\
<a href="#" onclick="set_size(\'reset\')" style="font-size: 15px;">A</a>&nbsp;&nbsp;\n\
<a href="#" onclick="set_size(\'up\')" style="font-size: 15px;">A+</a>\n\
</b>\n\
<br>\n\
<hr width="80%">\n\
<br>\n\
</center>';


var banner='\
/koord.html,             /img/koord.jpg,�������������� ����� ������� �������� ��������� ��� ,\
/cndu.html,             /img/cnduATO.png,����� ������� �������� ��������� ��� ,\
/pru.html, /img/pro_build.jpg, ������ ������� ,\
http://www.kr-admin.gov.ua/start.php?q=tel.php,http://www.kr-admin.gov.ua/baners/tel.gif,��������� �������� - ������ ���,\
http://www.kr-admin.gov.ua,             /img/oda.gif, ʳ������������ ������������������,\
vlasy_dim.html,/img/vlasny_dim.png,�������� ������� ��,\
/Ekonom/BOOKLET.pdf,/img/kazn_viysk.png, ���������� �����\'������ "�������",\
http://www.kmu.gov.ua/control/uk/publish/article?art_id=244209261,/img/uhl.png,,\
/actia_vidpovidal.html, /img/actsia_vidpovid.jpg,,\
/extrem.html, /img/extremal.jpg,,\
http://www.president.gov.ua/ ,          /img/president.gif,��������� ������,\
http://www.rada.gov.ua/,              /img/vr.gif,,\
http://www.kmu.gov.ua ,                 /img/kmu.gif, ������ ̳����� ������,\
http://ukraine-nato.mfa.gov.ua/ua,    /img/nato.gif,������-����,\
Ddpi.html, 								/img/ddpi.gif,������ �� ������� ����������,\
http://www.president.gov.ua/documents/14656.html,img/president_kadr_rezerv.gif,,\
https://drive.google.com/folderview?id=0Bwx0DxUqa7aMQ3VaeUZ5NUxQNUE&usp=sharing,/img/zemdil.jpg,���������� ���������� ��� ���� ������� ������ �� ������ ���� ������� � �������� ��� ������� �������� ����������� ������������ �� ������� ������������� ������,\
https://www.youtube.com/watch?v=SVXExMprAgQ&index=2&list=PLoTL0j-5YwmLDVF9ma78hQipBtbym8w13,/img/krym_ukr.gif,���� - �� ������,\
/admPosl.html,/img/cnap.jpg,����� ������� �������������� ������,\
/kirovograd75/rzd.pdf,/img/rzd.jpg                    ,,\
/vyzv.html,/img/70.jpg                                ,,\
best_ds.html, /img/4.bmp, ������ ��������� ����������,\
/konk11.html,    /img/pa.gif,,\
http://kr-admin.gov.ua/start.php?q=Kir/main.html, img/kir.gif,,\
http://www.sts.gov.ua/,              /img/112233.gif    ,,\
http://www.legalaid.gov.ua/ua/holovna/berezen-2015/oholoshuietsia-vidkrytyi-konkurs-pretendentiv-na-posady-dyrektoriv-mistsevykh-tsentriv-z-nadannia-bezoplatnoi-vtorynnoi-pravovoi-dopomohy,/img/Comp_219x82.gif,,\
/article/gkh.html,          /img/gkh.jpg                ,����������� �� ������ �������-����������� ������,\
http://ukc.gov.ua/,/img/sale_people.jpg,������� ������,\
http://www.la-strada.org.ua/,/img/la_strada-160.jpg,,\
/kir75/001.html   ,/express_img/ODA/080114pr3.jpg,ʳ����������� 75,\
/shevchenko200.html, /img/logo_200.jpg,';


var left='index.html,�������,\
/ulian.html,����������� ������� �������� �����������,\
http://ulrayrada.com.ua/,����������� ������� ����,\
/ZvernGrom11.html,��������� ��������,\
/VP1.html,�������� �������,\
/Ekonom1.html,��������,\
/Ekonom/zakupiv.pdf,������� �������,\
/Nauka1.html,�������� ����� � �����,\
/Vidom1.html,�������� �� ������� ���. �����     ,\
/architecture.html,�����������,\
/zkg.html,���,\
/kart.html,������� ����� (��������� ���������� ������),\
/viysko.html,³�������- �����\'������,\
/NormPravAkt1.html,����������-������ ����,\
/pens1.html,������������� ����������� �������,\
/Perelik1.html,������ ����������� ���������,\
/article/proj_KU_dc.doc,������ ��� �� ����������� ������ ���� �������������� �����,\
/IstorGeogrDov1.html,��������-����������� ������,\
/sz.html,���������� ������,\
/kazn1.html,�������� ������������ ������,\
/geo.html,��������������,\
https://drive.google.com/file/d/0Bwx0DxUqa7aMNTJGeUVzMmhFeXM/view?usp=sharing,����������� �������,\
/Proregion.html,��� �����                           ,\
/Finansu.html,Գ�����,\
/novyny1.html,������,\
/sua1.html,������� ��������� �����,\
/Stat1.html,���������-��������� ��������� ʳ������������ ������ (������� �������� ����������),\
/kultura_turizm.html,�������� � ������,\
/shevchenko200.html,�������� 200 ����,\
/kir75/ulmain.html,ʳ����������� 75,\
/admPosl.html,����� ������� �������������� ������,\
/zapobig_corupt.html,���������� ������� ��������,\
/golod1.html,��������� 1932-1933 ���� � ������������� �����,\
/Ekonom/rp.htm, ����������� �������,\
new_constit.html,���� ����������� (������ ��� �� ��������� ������������),\
/memor.html,���� �� ��������, \
/regis.html,������ � ������ �������� ���������,\
http://dsns.in.ua,����� �������� ������ �� ������';


var menu=left.split(',');

function createmenu(gr)
{
newelem=document.createElement('ul');
newelem.className="avmenu";
newelem.name='leftm';
newelem.appendChild(inner=document.createElement('li'));
inner.appendChild(document.createElement('a'));
inner.lastChild.href= menu[0];
inner.lastChild.appendChild(document.createTextNode(menu[1]));

var z=document.getElementById('leftside');

z.insertBefore(newelem,z.firstChild);
for(i=2;i<menu.length;i+=2)
  {
  inner=inner.cloneNode(true);
  inner.lastChild.href= menu[i];
  newelem.appendChild(inner);
  inner.lastChild.lastChild.data=menu[i+1];
  }
newelem.childNodes[2].lastChild.target='_blank';
//.target='_blank'; 
var z=document.getElementById('extras');
z.insertBefore(inner=document.createElement('ul'),z.firstChild);
inner.className='avmenu';
inner.name='rightm';
l=newelem.childNodes.length;
for(i=l;i>gr;i--)inner.insertBefore(newelem.lastChild,inner.firstChild);
//alert(l/2);
z.insertAdjacentHTML('afterBegin',visioprobl);
}

function banners(half)
{

var splitted=banner.split(',');
var cent=document.createElement('center');
  cent.id='leftb';
var i;
for(i=0;i<splitted.length;i+=3)
  {
	cent.appendChild(document.createElement('a'));
	cent.lastChild.appendChild(document.createElement('img'));
	cent.lastChild.href=splitted[i];
    cent.lastChild.target='_blank';
    cent.lastChild.title=splitted[i+2];
	cent.lastChild.lastChild.src=splitted[i+1];
	cent.lastChild.lastChild.alt=splitted[i+2];
	cent.lastChild.lastChild.width=120;
    cent.lastChild.lastChild.style.margin='2px'
  }
	leftside.appendChild(cent);

var next =document.getElementById('ab3');
extras.insertBefore(right=cent.cloneNode(false),next);

while(cent.childNodes[half]) right.appendChild(cent.childNodes[half]);

}


function clock_0()
{

 var emb0=document.createElement('embed'); 
  emb0.src="http://www.clocklink.com/clocks/0001-blue.swf?TimeZone=GMT0200";
  
  emb0.width=140;
  emb0.height=140;
  emb0.id="clockk";
  emb0.setAttribute("wmode","transparent");
  emb0.align='center';
  extras.insertBefore(emb0,ab3.previousSibling);//
  
}

function flashbanner(where,URL,flashv,w,h){
  var cent=document.createElement('center');
  var we=document.getElementById(where);
  we.parentNode.insertBefore(cent,we);
  //leftside.appendChild(cent);
  if (typeof document.body.insertAdjacentHTML != 'undefined')
    cent.insertAdjacentHTML('beforeEnd',"<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0 WIDTH="+w+" HEIGHT="+h+" >\
  <PARAM NAME=movie VALUE=\'"+URL+"'>\
  <PARAM NAME=menu VALUE=false><param name=FlashVars value='"+flashv+"'>\
  <PARAM NAME=quality VALUE=high><param name=wmode value=transparent>\
  <PARAM NAME=menu VALUE=false>\
  <PARAM NAME=bgcolor VALUE=#FFFFFF>\
  <PARAM NAME=wmode VALUE='transparent'>\
  <EMBED src='"+URL+"' menu=false quality=high wmode=transparent bgcolor=#FFFFFF  WIDTH="+w+" HEIGHT="+h+" TYPE=application/x-shockwave-flash PLUGINSPAGE=\'http://www.macromedia.com/go/getflashplayer\'>\
  </EMBED>\
  </OBJECT>");
  
  if(false) {
    var emb0=document.createElement('embed');
    //emb0.appendChild(par=document.createElement('param'));
    emb0.src=URL;
    emb0.wmode='transparent';
    emb0.bgcolor='#FFFFFF';
    emb0.width=w;
    emb0.height=h;
    emb0.type='application/x-shockwave-flash';
    emb0.PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer';
    cent.appendChild(emb0);
    }
  
  }


function getChar(event) {
  if (event.which == null) {  
    if (event.keyCode < 32) return null; // ñïåö. ñèìâîë
    return String.fromCharCode(event.keyCode) 
  } 
  if (event.which!=0) { // âñå êðîìå IE
    if (event.which < 32) return null; // ñïåö. ñèìâîë
    return String.fromCharCode(event.which); // îñòàëüíûå
  }

  return null; 
  }