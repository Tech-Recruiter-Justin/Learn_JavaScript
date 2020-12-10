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

