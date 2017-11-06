cookie-storage-lib
==============

[На русском](README_RU.md)

This script is written as a small library for working with cookies.
Everyone has probably encountered problems when working with JavaScript cookie

This script solves many problems with checking certain cookies,
and also helps to create and record new ones without much difficulty.

To work requires jQuery, any version, you can and without it, then you will need to make edits
in filling the object with cookies.

Version History
=====================

1.0.1
--------------
1. Updated methods for saving and updating.
2. Added new methods
3. Corrected work of the cookie.object
4. Updated description in README.md

1.1.0
-------------

1. Added methods for working with LocalStorage
2. Doubled description in English

Methods
--------------------------

### $.cookie

**$.cookie** - a common object that stores methods and a property with cookies

**$.cookie.toString()** - returns cookies in the standard JavaScript view (similar to document.cookie)

**$.cookie.show()** - displays the object with all the cookies that are available

**$.cookie.save(name, value, options)** - method that stores new cookies or changed old ones. It is better to use to update existing ones. The first parameter will be its name,
the second is the value, the third must be an object containing the path of saving the cookie and the time for which it will be stored in seconds. To add, it's better to use the method ** $. Cookie.add (name, value, options) **

**$.cookie.saveObject()** - saves cookies from the $ .cookie.object object if they are there. In $ .cookie.object it is necessary to write down in the form {name: value}

**$.cookie.add(name, value, options)** - adds cookies with the name name, value - value and options along the path and time of saving

**$.cookie.remove(name)** - deletes cookies with a name, it must be a string.
 
### $. lstorage

**$.lstorage** - common object for working with the local storage of the browser

**$.lstorage.add(key, value)** - adds a new element to the local store with key and value. If value is an object, then it will be serialized in a JSON-string

**$. lstorage.get(key)** - get the property from localStorage with the key

**$. lstorage.view()** - show the entire contents of LocalStorage

**$. lstorage.delete(key)** - removes from the repository a property with the key

**$.lstorage.clear()** - clears LocalStorage


Examples
---------------
```js
$.cookie.add('param5', 'false');

$.cookie.show();

//output: {param1: "test", param5: "false"}

//removed cookie
$.cookie.remove('param5');

//Added cookie on root, and at the 60 seconds
$.cookie.add('popupshow', 'true', {path: '/', expires: 60});

$.cookie.show();
//output {param1: "test", popupshow: "true"}
```

Example in the console with the addition from the object

```
> $.cookie.object.newcookie = 'test-cookie';
"test-cookie"
> $.cookie.saveObject();
undefined
> $.cookie.toString()
"popup=true; ololo=null; param=test; param2=test2; newcookie=test-cookie"
> document.cookie
"popup=true; ololo=null; param=test; param2=test2; newcookie=test-cookie"
```

LocalStorage Examples
-------------------------

```js
$.lstorage.add('obj', {key1: 'test', 'key2': 'test2'}); //Added object in to LocalStorage

$.lstorage.view(); //show

//output: [object Storage]{length: 1, obj: "{"key1":"te..."}
```
