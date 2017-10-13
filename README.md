Описание
==============

Данный скрипт написан как маленькая библиотека для работы с cookie.
Все наверняка сталкивались с проблемами при работе с cookie со стороны JavaScript

Данный скрипт решает множество проблем с проверками определенных cookie,
а также помогает создавать и записывать новые без особого труда.

Для работы требуется jQuery, любой версии, можно и без нее, тогда, нужно будет внести правки
в заполнении объекта куками. Я сделал с jQuery, чтобы легче было наполнить, точно зная, что вся
структура уже загрузилась. Знаю, что куки грузятся раньше, но всякое бывает

Описание методов и свойств
--------------------------

**$.cookie** - общий объект, в котором хранятся методы и свойство с куками

**$.cookie.toString()** - возвращает куки в стандартном представлении JavaScript (аналог document.cookie)

**$.cookie.object** - объект со всеми cookie, которые имеются

**$.cookie.save()** - метод сохраняющий новые куки или измененные старые.

Как работать!
---------------

Примеры будут для консоли, а используйте где удобно

```js
$.cookie.object

```

```
{popup: "true", ololo: "null", param: "test", param2: "test2"}
```

```js
//Создаем новый куки
$.cookie.object.newcookie = 'test-cookie';
//Записываем его
$.cookie.save();

//Проверяем
$.cookie.toString();

//или так
document.cookie //стандартный метод js.
```

увидите что-то типа этого, по порядку команд, естественно куки я создал свои, у вас будут другие.

```
$.cookie.object.newcookie = 'test-cookie';
"test-cookie"
$.cookie.save()
undefined
$.cookie.toString()
"popup=true; ololo=null; param=test; param2=test2; newcookie=test-cookie"
document.cookie
"popup=true; ololo=null; param=test; param2=test2; newcookie=test-cookie"
```

Перезаписать отдельный cookie

```
$.cookie.object.popup = 'false';
"false"
$.cookie.save();
undefined
$.cookie.toString()
"popup=false; ololo=null; param=test; param2=test2; newcookie=test-cookie"
```
