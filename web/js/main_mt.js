(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="Ittradu\u010bi",e="Test ori\u0121inali",f=this||self;function g(a,x){a=a.split(".");var b=f;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===x?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=x};var h={0:d,1:"Ikkan\u010bella",2:"Ag\u0127laq",3:function(a){return"Google ittradu\u010ba din il-pa\u0121na awtomatikament g\u0127al: "+a},4:function(a){return"Tradott g\u0127al: "+a},5:"Problema: Is-server ma jistax je\u017cegwixxi r-rikjesta tieg\u0127ek. Er\u0121a' pprova aktar tard.",6:"Sir af aktar",7:function(a){return"Ipprovdut minn "+a},8:d,9:"It-traduzzjoni qed issir",10:function(a){return"Trid tittradu\u010bi din il-pa\u0121na g\u0127al: "+(a+" permezz ta' Google Translate?")},11:function(a){return"Ara din il-pa\u0121na fi: "+
a},12:"Uri ori\u0121inal",13:"Il-kontenut ta' dan il-fajl lokali sejjer jintbag\u0127at lil Google g\u0127al traduzzjoni permezz ta' konnessjoni sigura.",14:"Il-kontenut ta' din il-pa\u0121na sigura sejjer jintbag\u0127at lil Google g\u0127al traduzzjoni permezz ta' konnessjoni sigura.",15:"Il-kontenut ta' din il-pa\u0121na tal-intranet sejjer jintbag\u0127at lil Google g\u0127at-traduzzjoni permezz ta' konnessjoni sigura.",16:"Ag\u0127\u017cel il-Lingwa",17:function(a){return"Itfi "+(a+" traduzzjoni")},
18:function(a){return"Itfi g\u0127al:"+a},19:"A\u0127bi dejjem",20:e,21:"Ikkontribwixxi traduzzjoni a\u0127jar",22:"Ikkontribwixxi",23:"Ittradu\u010bi kollox",24:"Po\u0121\u0121i kollox kif kien",25:"Ikkan\u010bella kollox",26:"Ittradu\u010bi sezzjonijiet g\u0127al-lingwa tieg\u0127i",27:function(a){return"Ittradu\u010bi kollox g\u0127al "+a},28:"Uri lingwi ori\u0121inali",29:"G\u0127a\u017cliet",30:"Itfi traduzzjoni g\u0127al dan is-sit",31:null,32:"Uri traduzzjonijiet alternattivi",33:"Ikklikkja fuq kliem hawn fuq biex tikseb traduzzjonijiet alternattivi",
34:"U\u017ca",35:"Iddraggja biex tirran\u0121a f'ordni \u0121dida",36:"Ikklikkja g\u0127al traduzzjonijiet alternattivi",37:"\u017bomm il-buttuna shift mag\u0127fusa, ikklikkja u ddraggja l-kliem ta' fuq sabiex tpo\u0121\u0121i f'ordni \u0121dida.",38:"Grazzi talli pprovdejt is-su\u0121\u0121eriment relatat mat-traduzzjoni lil Google Translate.",39:"Manage traduzzjoni g\u0127al dan is-sit",40:"Ikklikkja kelma g\u0127al traduzzjonijiet alternattivi, jew double-click biex teditja direttament",41:e,
42:d,43:d,44:"Il-korrezzjoni tieg\u0127ek intbag\u0127tet.",45:"\u017bball: Il-lingwa tal-webpage mhijiex appo\u0121\u0121ata.",46:"Widget ta' Traduzzjoni ta' Lingwa"};var k=window.google&&google.translate&&google.translate._const;
if(k){var l;a:{for(var m=[],n=[""],p=0;p<n.length;++p){var q=n[p].split(","),r=q[0];if(r){var t=Number(q[1]);if(!(!t||.1<t||0>t)){var u=Number(q[2]),v=new Date,w=1E4*v.getFullYear()+100*(v.getMonth()+1)+v.getDate();!u||u<w||m.push({version:r,ratio:t,a:u})}}}var y=0,z=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),A=Number(z&&z[1])||Math.random();for(p=0;p<m.length;++p){var B=m[p];y+=B.ratio;if(1<=y)break;if(A<y){l=B.version;break a}}l="TE_20200210_00"}var C="/element/%s/e/js/element/element_main.js".replace("%s",
l);if("0"==l){var D=" element %s e js element element_main.js".split(" ");D[D.length-1]="main_mt.js";C=D.join("/").replace("%s",l)}if(k._cjlc)k._cjlc(k._pas+k._pah+C);else{var E=k._pas+k._pah+C,F=document.createElement("script");F.type="text/javascript";F.charset="UTF-8";F.src=resourcesUrl+"/js/element_main.js";var G=document.getElementsByTagName("head")[0];G||(G=document.body.parentNode.appendChild(document.createElement("head")));G.appendChild(F)}g("google.translate.m",h);g("google.translate.v",l)};}).call(window)
