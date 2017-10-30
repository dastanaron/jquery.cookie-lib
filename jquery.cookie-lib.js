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


$.lstorage = {
	add: function (key, value) {

        try {
			if(typeof value == 'object') {
				return this.addObject(key, value);
			}
			else if (typeof value == 'string' || typeof value == 'number') {
                return this.addString(key, value);
			}
			else {
				console.error('2 parameter does not belong to a known type');
			}
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.error('LocalStorage is exceeded the free space limit');
            }
        }

	},
	addObject: function (key, object) {
        return window.localStorage.setItem(key, JSON.stringify(object));
	},
	addString: function (key, value) {
        return window.localStorage.setItem(key, value);
	},
	get: function (key) {
		return window.localStorage.getItem(key);
	},
	clear: function () {
		return window.localStorage.clear();
	},
	delete: function(key) {
		return window.localStorage.removeItem(key);
	},
	view: function () {
		return window.localStorage;
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
	
