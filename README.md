#Bootstrap-CAP
##`window.confirm()`, `window.alert()`, and `window.prompt()` replacements using Bootstrap Modals

A simple way to replace `window.confirm`, `window.alert`, and `window.prompt` with Bootstrap Modals, since these built-in functions can vary in appearance from browser to browser.
Requires jQuery and Boostrap v 3.x.


###Usage

####Initialize
```javascript
window.addEventListener('load', function(){
	window.bsCAP = new BSCAP();
}, false);
```
<br>


####Confirm

#####window.confirm()
```javascript
function doTheThing(){
	if(confirm(('Are you sure you want to do the thing?'){
		//Code to do the thing
	}	
}
```

#####bsCAP.confirm()
```javascript
function doTheThing(){
	bsCAP.confirm('Are you sure you want to do the thing?', function(confirmed){
		if(confirmed){
			//Code to do the thing
		}
	})
}
```
<br>


####Alert

#####window.alert()
```javascript
function doTheThing(){
	alert('You are about to do the thing.');
	//Code to do the thing
}
```

#####bsCAP.alert()
```javascript
function doTheThing(){
	bsCAP.alert('You are about to do the thing.', function(){
		//Code to do the thing
	})
}
```
<br>


####Prompt

#####window.prompt()
```javascript
function doTheThing(){
	var howMany = prompt('How many things did you want to do?');
	//Code to do the thing
}
```

#####bsCAP.prompt()
```javascript
function doTheThing(){
	bsCAP.prompt('How many things did you want to do?', function(howMany){
		//Code to do the thing
	})
}
```
<br>


###Titles
You may also provide a title for each of these methods as a second parameter. Normally this is handled by the browser on, say, window.alert(), and a generic title is given in the popup window.
You can optionally provide your own title. Example:

```javascript
function doTheThing(){
	bsCAP.alert('You are about to do the thing.', 'Here is a nice, descriptive title', function(){
		//Code to do the thing
	})
}
```
<br>
