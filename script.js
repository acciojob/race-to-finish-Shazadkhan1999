window.promises = [];

//const promises = [];

for(let i = 1; i <= 5; i++){
	const randomTime = Math.floor(Math.random()  *5+1)*1000;
	const promise = new Promise ((resolve) => {
		setTimeout(() => {
		resolve(`Promise ${i} resolved after ${randomTime / 1000} seconds`);
		}, randomTime);
	});
	window.promises.push(promise);
	}

Promise.any(window.promises)
.then((result) => {
	document.getElementById("output").textContent = result;
})
.catch((error) => {
	document.getElementById("output").textContent = "promises failed";
});




// Do not change the code above this
// add your promises to the array `promises`
