window.onload = alert("This page is too swag");


//to make the main picture a slide show
function slidShow() {
	//code for this function
	//goes
	//in
	//here
	//......
	//two years later
	//......
}

//THESE ARE FOR TEXT CHANGE FOR PORSCHE MODELS

//changes the text when mouse is over element space
function mouseOver(obj) {
	var t = obj.innerHTML;

	switch (t) {
		case "Porsche Boxter":
			obj.innerHTML = "check out Porsche Boxter";
			break;
		case "Porsche 911":
			obj.innerHTML = "check out Porsche 911";
			break;
		case "Porsche 356":
			obj.innerHTML = "check out Porsche 356";
			break;
		case "Porsche Cayman":
			obj.innerHTML = "check out Porsche Cayman";
			break;
		case "Front Engine Porsches":
			obj.innerHTML = "check out Front Engine Porsches";
			break;
		case "Racing Porsches":
			obj.innerHTML = "check out Racing Porsches"
			break;
		default:
			obj.innerHTML = "no swag";	
	}
}//end mouseOver

//changes text when mouse leaves elements space
function mouseOut(obj) {
	var t = obj.innerHTML;

	if (t == "check out Porsche Boxter") {
		obj.innerHTML = "Porsche Boxter";
	}
	else if (t == "check out Porsche 911") {
		obj.innerHTML = "Porsche 911"
	}
	else if (t == "check out Porsche 356") {
		obj.innerHTML = "Porsche 356";
	}
	else if (t == "check out Porsche Cayman") {
		obj.innerHTML = "Porsche Cayman"
	}
	else if (t == "check out Front Engine Porsches") {
		obj.innerHTML = "Front Engine Porsches";
	}
	else if (t == "check out Racing Porsches") {
		obj.innerHTML = "Racing Porsches"
	}
	else {
		obj.innerHTML = "no swag";
	}
} //end mouseOut



