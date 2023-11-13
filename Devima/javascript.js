function showtext()
{
	// var show;
	const price1 = 5;
	const price2 = 6;
	let show = price1 + price2;
	// show="hello world";
	console.log(show);
			document.getElementById('anzeigen').innerHTML= price1;
			// document.write(5 + 6);
			// alert ni adare3
			// window.alert(5 + 6);
			// console.log(5 + 6); tbaned gi debugging
			
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("anzeigen").innerHTML = fruits.join(" ,");
	document.getElementById("anzeigen").innerHTML = fruits.toString();
	fruits.push("Kiwi"); 	// add kiwi and show length Element
}
