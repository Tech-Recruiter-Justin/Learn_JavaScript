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

```javascript
image = document.getElementsByTag('tag'); //returns an HTML collection with tag
image[0]; //slected the first image of the document
```

- the resulting collection looks like an array but it is not, they are separate objects
- however, it is iterable

### By Class Name

Seleting all elements with that class

```javascript
image = document.getElementsByTag('class'); //returns an HTML collection with class
```

