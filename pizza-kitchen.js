'use strict'
let orderTaker = document.querySelector("#order-taker");
let pause = document.getElementById("pause");
let cook = document.getElementById("cook");
let fridge = document.getElementById("freezer");
let deliveryman = document.getElementById("pizza-delivery");
let frozenPizza = document.getElementById("frozen-pizza");
let oven = document.getElementById("oven")

// console.log(e)
function toggleChef(e) {
    orderTaker.classList.toggle('paused');
		cook.classList.toggle('paused');
		deliveryman.classList.toggle('paused')
}

function grabPizza(e) {
	switch(e.type) {
		case "animationstart":
			break;
			
		case "animationend":
		  break;

		case "animationiteration":
			if(cook.attributes["src"].nodeValue.indexOf('right') > 0) {
				cook.attributes['src'].nodeValue = "pizza-man-frozen.gif";
				fridge.attributes['src'].nodeValue = "freezer-open.png";
				console.dir(frozenPizza);
				frozenPizza.style.zIndex = 3;
			}
			else {
				cook.attributes['src'].nodeValue = "pizza-man-right.gif";
				fridge.attributes['src'].nodeValue = "freezer-closed.png";
				frozenPizza.style.zIndex = 1;
			}
		  break;
	}
}

function takeOrder(e){
    switch(e.type) {
		case "animationstart":
		  break;

		case "animationend":
		  break;

		case "animationiteration":
			if(orderTaker.attributes["src"].nodeValue.indexOf('right') > 0) {
				orderTaker.attributes['src'].nodeValue = "pizza-man-left.gif";
				grabPizza;
			}
			else {
				orderTaker.attributes['src'].nodeValue = "pizza-man-right.gif";
			}
		  break;
	}

}
orderTaker.addEventListener("animationstart",takeOrder, false);
orderTaker.addEventListener("animationend",takeOrder, false);
orderTaker.addEventListener("animationiteration",takeOrder, false);
cook.addEventListener("animationstart",grabPizza, false);
cook.addEventListener("animationend",grabPizza, false);
cook.addEventListener("animationiteration",grabPizza, false);
deliveryman.addEventListener("animationstart",grabPizza, false);
deliveryman.addEventListener("animationend",grabPizza, false);
deliveryman.addEventListener("animationiteration",grabPizza, false);

pause.addEventListener("click", toggleChef, false);