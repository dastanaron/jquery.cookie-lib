$.cookie = {
	object: {},
	toString: function () {
		return document.cookie;
	},
	save: function () {
		for (var cookie in this.object) {

			document.cookie = cookie + '=' + this.object[cookie] + ';';
			
		}
	}
};

$(function () { 
	$.cookie.object = getCookies();
});

function getCookies()
{
	var cookiestr = document.cookie.split('; ');
	
	var obj = {};
	
	for(var i=0; i<cookiestr.length; i++){ 
		var array=cookiestr[i].split('=');
		if(array[0]!='') {
			obj[array[0]]=unescape(array[1]);
		}
	} 
	
	return obj;
}
	
