# DOM

## Selecting

Singling certain elements of the document out

### By ID

```javascript
const variable = document.getElementById('id');
console.dir(variable); //shows the element selected as an object with a list of properties
```

### By Tag

Seleting all elements with that tag

- the resulting collection looks like an array but it is not, they are separate objects
- however, it is iterable

```javascript
image = document.getElementsByTag('tag'); //returns an HTML collection with tag
image[0]; //slected the first image of the document
```

### By Class Name

Seleting all elements with that class

```javascript
image = document.getElementsByClassName('class'); //returns an HTML collection with class
```

### Query Selector

A newer way to select

```javascript
document.querySelector('p'); //selects the first paragraph
document.querySelector('#banner'); //selects the first id object matching it
document.querySelector('.square'); //selects the first class matching object it
document.querySelector('img:nth-of-type(3)'); //selects the third img
document.querySelectorAll('') //same rules as the above but selects an HTML collection
```

## Manipulating

### innerText

- the texts currently DISPLAYED i.e. if hidden then it won't show up in this property

### innerHTML

- shows the text with its HTML tags etc. so it can be modified

### textContent

- the actual content written in the code, shows even hidden etc.

### Attributes

- JavaScript properties like .src or .href allows us to change the attributes THROUGH the JavaScript object
- .getAttribute however, access the content in HTML directly
  - not a big concern but there are differences between the above two

```javascript
document.querySelector('img').src = "www.abcd.com"; //changes the img source to this link
variable.setAttribute('type', 'text'); //another way
```

### Style

Changing CSS properties

```javascript 
h1.style.color = 'green'; //setting CSS styles throught the DOM
window.getComputedStyle(h1); //access the computed result of h1
```

### Class List

- Class list CANNOT modify multiple elements' classList, so it is required to literate over the array

```javascript
const li = document.querySelectorAll('li');
for (let list of li){
	list.classList.toggle('highlight');
}
```

### Parent/ Child/ Sibling

```javascript
x.parentElement //select parent element
x.children //select all children elements
x.childElementCount //count how many children elements there are
x.nextSibling
x.previousSibling
x.nextElementSibling
x.previousElementSibling
```

### Append & Append Child

```javascript
document.parent.appendChild(newVariable); //adds the newVariable

variable = document.createElement('h3');
variable.innerText = "some thing you want to type"; //created h3 and added innerText

p.append('Hi!'); //adds Hi! to the end of the p
p.prepend('Hi!'); //adds Hi! to the begining of the p

variable.insertAdjacentElement('position', h2)
```

### Remove

```javascript
//the longer way to do it
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

ul.parentelement.removeChild(ul); //kind of janky old way

thingToRemove.remove(); //new way to remove but doesn't work on IE
```

