# Learn JavaScript

## Variables
- holds a value which can be altered, used, and referred to
- formulas only create a snapshot of the results of variables at that instance, the variables will not be linked!!!!
- "+= -= *= /= %= ++ --"

### Best Practices for Naming Variables
- no spacing
- no snake casing i.e. today_date
- use camel casing i.e. todayDate
    - note that the first word starts with lower casing
- use isSomething for boolean variables

### Operators
- "+ - * / % **"
- % is used for finding the remainder
- ** to the power of

#### Comparison Operators
- "> < >= <= == != === !==" returns a boolean whether the statement is ture or fales, can also be used on strings (based on unicode)
- == != is not very reliable as it converts different data types to the same before comparing
- === !== checks the data types as well as the value
- when used for arrays, the operators actually compares the amount of memory allocated to the array (a reference is assigned to each array)
    - hence, array1 will always be different from array2
    - unless two variables are set to reference to the same array (pointing)

## Data (Primitive) Types
1. Number
2. String
3. Boolean
4. Null
5. Undefined

### 1. Numbers
- one number type (some languages have two number types to reduce memory use)
- positive numbers
- negative numbers
- whole numbers (integers)
- decimal numbers
    - the number of decimal places is limited by the memory available (not longer accurate as the number gets rounded)

#### Constant
- const
- use when we want an unchangable number

#### NaN (Not a Number)
- considered a number data type but not a number

### 2. String
- may use " " or ' '

#### Indicies
- use [ ] to access a character within the string
- first character starts at 0

#### String Template
- use ` back-ticks to bracket string templates
- use ${ } in a string to specify values evaluated as JavaScript NOT a string, methods can be used inside it

#### 3. Boolean

#### True/ False
- JavaScript allows variables to switch data types i.e. from numbers to boolean

### 4. Null
- "intentional absence of any value"
- must be assigned
- let variable = null;
- JavaScript way of saying "there is nothing"

### 5. Undefined
- variables that do not have an assigned value
- let variable;
- JavaScript way of saying "I don't know"

## Array
- const arrays' CONTENTS can be changed an altered, but it's pointer cannot be changed
    - hence, const is quite often used for arrays
- arrays can be nested inside arrays

## Object Literals
- we can set key-value pairs within an object
- arrays and objects can be nested within objects
- to access objects, use ["key"] after the object variable, or use object.key
- all keys are converted to stings i.e. numbers or symbols will become strings
- [number] will also be convert to ["number"] automatically
- code can be run inside [] for dynamic keys i.e. another variable

## Loops
- used to repeat code
- can also be used for accessing arrays/ objects

### 1. For Loop
- for loop inside for lop will run a full cycle whilst the outer cycle runs each time
- if ... break; word can be used to create a loop exception

### 2. While Loop
- used when we don't know how many times to repeat

### 3. For ... of Loop
- used to iterate content of array or iterable objects i.e. strings BUT Object Literals are NOT iterable objects

### 4. For ... in Loop

### Infinite Loop
- the loop never stops and uses up all the memory available

## Functions
- reusable modular code

### Arguments
- inputs for functions which generates different outputs
- every method is a function

### Return
- console.log in functions cannot be captured, we need a concrete output i.e. return
- also, stops the operation

### Function Expressions
- we can store a function within a variable
- functions are just treated like other values

### Higher Order Functions
- functions that accept other functions as arguement
- functions that return functions

## Scoping

### Function Scope
- variables defined within a function is only accessible within that function

### Block Scope
- variables defined within a block {} is only accessible within that block

### Lexical Scope
- nested functions have access to its parent function's elements, but not vice versa 

## Set Timeout
- setTimeout(function, delay in ms);
- the browser will wait the delay before calling the function

## Set interval
- repeat the function with intervals in between

## New JavaScript Functions

### Default Params

A quicker way compared to how default values are traditionally set

```javascript
//example: the default print out out be "1"
print = (x = 1) => console.log(x); //creates a function named print
print(); //1
```

### Spread

#### Function Calls

Spread can be used to make a single array become multiple arguements in a function

```javascript
//example: spreading values in an array to a max function
const num = [3,7,12,8,33,123];
Math.max(nums); //returns NaN as Math.max expects multiple arguments, not a single array
Math.max(...nums); //123
```

#### Array Literals

Spread can also be used to manipulate contents of arrays - copying, merging, adding etc.

```javascript
classA = ['Peter', 'Mary', 'Jill'];
classB = ['Justin', 'Stephanie'];
classC = [...classA, ...classB, 'Jason'];
//classC = ['Peter', 'Mary', 'Jill', 'Justin', 'Stephanie', 'Jason'];
```

#### Object Literals

Spread properties in object to form a new object, can also be used when copying an object

```javascript
const userA = {
  id: '0001',
  name: 'Justin Choi',
  email: 'user.A@gmail.com'
}
const userB = {
  id: '0002',
  name: 'Stephanie Kwok',
  email: 'user.B@gmail.com',
  nickname: 'bubu'
}
const allData = {...userA, ...userB}; //when merged, if any of the properties are the same within objects, the later will overwrite the former
```

#### Rest Params

. . . Can also be used to collect remaining function arguements to form an array

```javascript
raceResults = (gold, silver, ...bronze) =>{
  console.log(`Gold award: ${gold}`);
  console.log(`Silver award: ${silver}`);
  console.log(`Gold award: ${bronze}`);
  console.log(bronze);
}
raceResults('Justin', 'Leo', 'Ruby', 'Kotlin', 'Jupyter');
//Gold award: Justin
//Silver award: Leo
//Gold award: Ruby,Kotlin,Jupyter
//["Ruby", "Kotlin", "Jupyter"]
```

### Destructuring

#### Arrays

Putting array elements into individual variables

```javascript
const originalArray = ['Alpha', 'Beta', 'Charlie', 'Echo', 'Fox'];
const [newA, newB, newC, ...newD] = originalArray;
newA; //Alpha
newB; //Beta
newC; //Charlie
newD; //['Echo', 'Fox']
```

#### Objects

Creating individual variables based on the the properties in the object

```javascript
const userA = {
  id: '0001',
  name: 'Justin Choi',
  email: 'user.A@gmail.com'
}
const { name, id, email } = userA;
name; //Justin Choi

//changing the variable name whilst destructing
const { id: userID, age = 25 } = userA; //same theory as default param
userID; //0001
age; //25
```

#### Params

```javascript
movies.filter((movie) => movie.score >= 90)
movies.filter(({ score }) => score >= 90) //same output but param destructured
```



## Syntaxes

### General
- type of x - shows the type of variable x
- let x = y; - create a variable x with the value of y
- const x = y; - create a constant that cannot be changed

### Methods (functions within an object)
- variable.length - checks the length of a string
- variable.toUpperCase() - all characters in the string become upper casing
- variable.toLowerCase() - all characters in the string become lower casing
- variable.trim() - removes the space in the string
- variable.indexOf('x') - find the index of first matching character, if the character doesn't exist, return -1
- variable.slice() - removes the characters before index, negative value works backwards, two values can be used to form a bracket
- variable.replace('what to replace','what to replace with') - replaces the first matching instance
- variable.repeat(x) - creates a new variable that repeats the original variable x times
- array.push() - add an item to the end of an array
- array.unshift() - add an item to the beginning of an array
- array.pop() - remove an item at the end of an array
- array.shift() - remove an item from the the beginning of an array
- array1.concat(array2) - add array2 to the end of array1
- array.includes() - check whether the array includes the item
- array.indexOf() - check the index of item, reuturns -1 if item doesn't exist
- array.reverse() - reverse the whole array
- array.slice() - get a slice of the array based on the index range input
- array.splice(start index, number of items to delete, item to insert)
- array.sort() - by default covert everything into strings and sort based on UTF16 (without perentheses)
- object.keys(object) - creates an array of keys in that object
- object.value(object) - creates an array of values in that object
- array.filter(function) - creates an new array that fulfills the requirements in the function
- array.some(function) - checks if any of the items in the array passes the function
- array.every(function) - checks if all of the items in the array passes the fucntion

### Math Object
- Math.method are properties and methods that help to calculate things, comes with JavaScript by default
- Math.floor() - chopping off at a certain decimal
- Math.random() - generates a random number from 0-1 with random number of decimal places
    - No default way of generating a random integer so must use another method to create a random integer i.e. floor

### For Loop
for (let [initialExpression];[condition];[incrementExpression]) {
    action to repeat
}

### Define Functions
function name(variable) {
    console.log(variable);
}

### Reduce Method
variable.reduce((a, b) => total + price)

#### Min/ Max
variable.redice((min, price) => {
    if (price < min){
        return price;
    }
    return min;
}
