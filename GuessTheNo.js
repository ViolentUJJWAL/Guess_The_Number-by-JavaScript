let ask = true
while (ask){
	let x = Math.floor(Math.random() * 100+1);
	let u =0
	let t=100
	while (x!=u){
		u = prompt("Enter no.: ")
		if (u<x){
			if (x-u<=2){
				console.log("Your guess are very near")
				alert("Your guess are very near")
			}
			else if (x-u<=10){
				console.log("Your guess are slidely smallest")
				alert("Your guess are slidely smallest")
			}
			else{
				console.log("Your guess are smaller then gen number")
				alert("Your guess are smaller then gen number")
			}
		}
		else if (u>x){
			if (u-x<=2){
				console.log("Your guess are very near")
				alert("Your guess are very near")
			}
			else if (u-x<=10){
				console.log("Your guess are slidely greatest")
				alert("Your guess are slidely greatest")
			}
			else{
				console.log("Your guess are greater then gen number")
				alert("Your guess are greater then gen number")
			}
		}
		else if (u==x){
			console.log(`you are right guess \nscore is ${t} \nThanks for playing`)
			alert(`you are right guess \nscore is ${t} \nThanks for playing`)
			document.write(`you are right guess \nscore is ${t} \nThanks for playing`)
		}
		else {
			console.log('Enter number please')
			alert('Enter number please')
		}
		t--;
	}
	ask = confirm("Re start")
}