"use strict"
let orderTaker = document.getElementById("order-taker");
let cook = document.getElementById("cook");

function giveOrder(e){
    switch(e.type){
        case "animationstart":
        console.log("start");
        break;

        case "animationend":
        console.log("end");
        break;

        case "animationiteration":
        if (orderTaker.attributes["src"].nodeValue.indexof('right')>0){
            orderTaker.attributes["src"].nodeValue = "pizza-man-left.gif";
        }
        else{
            orderTaker.attributes["src"].nodeValue = "pizza-man-left.gif";
        }
        console.log(`new loop after ${e.elapsedTime} seconds`);
        break;
    }
}
window.onload = giveOrder;
orderTaker.addEventListener("animationstart", listener, false);
orderTaker.addEventListener("animationend", listener, false);
orderTaker.addEventListener("animationiteration", listener, false);
