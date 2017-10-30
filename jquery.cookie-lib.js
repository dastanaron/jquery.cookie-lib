$.cookie = {
	
	object: {},
	
	show: function () {
		return getCookies();
	},
	
	toString: function () {
		return document.cookie;
	},
	
	date: new Date(),
	
	save: function (name, value, options) {
		
		if (typeof options != 'object') {
			console.error('The third parameter is not an object');
			return null;
		}
		
		var query = name + '=' + value + ';';
		
		var expires = options.expires;
		
		var path = options.path;
		
		if(path) {
			
			query += 'path=' + path + ';';
		}
		
		if (typeof expires == "number" && expires) {
			var d = this.date;
			d.setTime(d.getTime() + expires * 1000);
			expires = d;
			
		}
		
		 if (expires && expires.toUTCString) {
			query += 'expires=' + expires.toUTCString();
			options.expires = expires.toUTCString();
		  }
		//console.log(query);
		document.cookie = query;
		
	},
	
	saveObject: function () {
		
		for (var cookie in this.object) {
			document.cookie = cookie + '=' + this.object[cookie];
			console.log(cookie + '=' + this.object[cookie]);
		}
		
	},
	
	add: function (name, value, options) {

		options = options || {};
		
		this.object[name] = value;
		
		this.save(name, value, options);
		
	},
	
	remove: function (name) {
		this.save(name, '', {expires: -60});
	},
	
};

function getCookies()
{
	var cookiearr = document.cookie.split('; ');
	
	var obj = {};
	
	for(var i=0; i<cookiearr.length; i++){ 
		var array=cookiearr[i].split('=');
		if(array[0]!='') {
			obj[array[0]]=unescape(array[1]);
		}
	} 
	
	return obj;
}
	
