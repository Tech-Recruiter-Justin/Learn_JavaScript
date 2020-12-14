# DOM Events

### On Click

- it is not ideal to write onclick events in HTML inline, instead, it shoule be done in JavaScript
- also there cannot be more than one onclick property as it is - a property after all

```javascript
btn = querySelector('button'); //select the button element
btn.onClick = fucntion(); //on click, execute function
```

### Event Listener

- can create more than one of the same property

```javascript 
btn.addEventListener('click', function1, { once: true}); //the event listener is only once
btn.addEventListener('click', function2);
```

### This

- to create a generic function that refers to whatever the event is happening on, we can use 'this' keyword

```javascript
//after selecting an element, whenever this function is called, event occurs on that element
function colorize(){
	this.style.backgroundColor = makeRandColor();
	this.style.color = makeRandColor();
}
```

### Event Objects/ Kayboard Events

- if we hold down a key, keydown fuction will keep executing after a certain delay

```javascript
input.addEvetnListener('keydown', function(evt) {
	console.log("keydown"); //prints keydown when any key is pressed/ hold
  console.log(evt.key); //prints the end result i.e. press left shift, prints "Shift"
  console.log(evt.code); //prints the keyboard position i.e. prints "ShiftLeft"
})
input.addEvetnListener('keyup', function() {
	console.log("keyup"); //prints when any key is released
})
```

### 

