# Learn JavaScript

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

#### Operators
- "+ - * / % **"
- % is used for finding the remainder
- ** to the power of

#### NaN (Not a Number)
- considered a number data type but not a number

### 2. String
- may use " " or ' '

#### Indicies
- use [ ] to access a character within the string
- first character starts at 0

### 3. Boolean

#### True/ False
- JavaScript allows variables to switch data types i.e. from numbers to boolean

### 4. Null

### 5. Undefined

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

## Syntaxes
- type of - shows the type of the thing after this function
- let x = y; - create a variable x with the value of y
- const x = y; - create a constant that cannot be changed

### Methods
- variable.length - checks the length of a string
- variable.toUpperCase() - all characters in the string become upper casing
- variable.toLowerCase() - all characters in the string become lower casing
- variable.trim() - removes the space in the string
- variable.indexOf('x') - find the index of first matching character, if the character doesn't exist, return -1
- variable.slice() - removes the characters before index, negative value works backwards, two values can be used to form a bracket
