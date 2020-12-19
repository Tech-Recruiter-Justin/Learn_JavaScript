# Async JavaScript

## The Call Stack

- the mechanism that JS interpreter uses to keep track of its place in a script that calls multiple functions
- marks the function that is currently being run and what functions are being called within that function
- last in ... first out

## JavaScript is Single Threaded

- only a single JS thread is running at most one line of JS code
- when there is a delay i.e. waiting for a web API to be called, JS call stack hands off the task to the browser
- the browser is usually built in a multi-threaded language i.e. C++
- once the browser finishes the task, it is returned and psued onto the stack as a callback

## Callback Hell

- things can get messy when callbacks are nests

## Promises & Async

- an object representing the eventual completion or failure of an asynchronous operation

### Status

- pending
- resolved
- rejected

```javascript
//lengthy way of doing it
fakeRequestPromise('google.com/api/fake')
  	.then(() => {
				console.log("fake" is working");
  			fakeRequestPromise('google.com/api/fake2');
        		.then(() => {
            		console.log("fake2 is working");
        		})
        		.catch(() => {
            		console.log("It is not working!");
        		})
				})
  	.catch(() => {
  			console.log("It is not working!");
		});
//flat way using promise
fakeRequestPromise('google.com/api/fake')
	  .then(() => {
				console.log("fake is working");
  			return fakeRequestPromise('google.com/api/fake2');
		})
		.then(() => {
				console.log("fake2 is working");  
		})
		.catch(() => {
  			console.log("It it not working!");
		})
//even quicker async way
async function fakeQuick(){
  try {
      await fakeRequestPromise('google.com/api/fake')
  		console.log("fake is working");
  		await fakeRequestPromise('google.com/api/fake2')
  		console.log("fake2 is working");  
  } catch () {
   		console.log("It is not working"); 
  }
}
```

