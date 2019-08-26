function get356Info() {

	var parent = document.createElement("div");	//create parent to delete info box not all boxes parent
	parent.id = "fisrtPorscheBox";

	//head block
	var heading = document.createElement("h1");				//heading for car
	heading.id = "three56h1";
	heading.innerHTML = "Porsche 356";

	var carName = document.createElement("div");			//div to float header left
	carName.id = "carName";
	carName.appendChild(heading);

	
	var xButton = document.createElement("BUTTON");			//exit button
	xButton.innerHTML = "X";
	xButton.style.backgroundColor = "white";
	xButton.style.borderRadius = "4px";
	xButton.style.width = "40px";
	xButton.style.height = "40px";
	xButton.addEventListener('click', exit356);

	var exitButton = document.createElement("div");			//div to float button
	exitButton.id = "exitButton";
	exitButton.class = "exitButton";
	exitButton.appendChild(xButton);

	var clean = document.createElement("div");				//div to clear
	clean.style = "clear: both";

	var buttonBlock = document.createElement("div");		//div for heading
	buttonBlock.id = "buttonBlock";	
	buttonBlock.class = "buttonBlock";

	//append childs of heading div
	buttonBlock.appendChild(carName);			
	buttonBlock.appendChild(exitButton);
	buttonBlock.appendChild(clean);

	//add car photo
	/*
	var picture = document.createElement("img");			//photo of car
	picture.id = "photo";
	picture.src = "popUp356.jpeg";
	*/

	//info block
	//this h3 is added to a div(textFloat) so it can float left
	var carInfo = document.createElement("P");
	carInfo.id = "three56information";
	carInfo.innerHTML = "The porsche 911 was first released in 1964. it was called the 901 until legal problems forced them to change the name to 911. there are eight different Porsche generatons ";
	carInfo.innerHTML += " the origional generaton is the 911. from there comes the 930, the first Porsche with a turbo which had a 3.0L engine. It's precedor, the 964 didn' have much change";
	carInfo.innerHTML += ". it mostly just had a bigger engine. After that Porsche would come to make it's last air-cooled engine car. The 993 is in my opinion the best looking porsche generaton. ";
	carInfo.innerHTML += "The first water-cooled engine porsche is the 996. One of the more affordable 911's on the market. the sixth generaton 911 is my second favorite porsche. a modernized 993 porsche ";
	carInfo.innerHTML += ", the 997. From there they had to go backwards in numbers so they made the 991. shortly after, they ran out of numbers and developed the eigth generaton, the 991.2";
	carInfo.innerHTML += "the 911 is also known as the porsche carrera. each generaton has different sub models. the 930 can be bought in a S version but also has exclusive models that are very rare. ";
	carInfo.innerHTML += "from there more sub-models were added. carrera 4 was an AWD porsche. Also the base models didn't have a turbo. if you want more power, you would have to buy a 911 turbo which also ";
	carInfo.innerHTML += "comes in S model. above that we have the GT2 and a GT3. more exclusive models like 911R or RSR or even GT2/GT3 RS are neck breakers when seen in real life.";

	/*
	var difModels = document.createElement("a");
	difModels.href = "https://www.carthrottle.com/post/an-idiots-guide-to-understanding-the-porsche-911-range/";
	difModels.target = "_blank";
	difModels.innerHTML = "click here to view the different model types Porsche has for the 911 generatons.";
	*/
	
	var textFloat = document.createElement("div");
	textFloat.id = "porsche356Info"; 						// created id because i need acces to change left margin, float, BG color and text color for the whole div
	textFloat.class = "porsche356Info";						// creadted class because i need to change elements inside the div

	textFloat.appendChild(carInfo);
	//textFloat.appendChild(difModels);

	var clear = document.createElement("div");				//clear float
	clear.style = "clear: both";

    parent.appendChild(buttonBlock);
    parent.appendChild(textFloat);
    parent.appendChild(clear);


    var grandPa = document.getElementById("porscheXInfo");
    grandPa.appendChild(parent);

    document.getElementById("three56B").disabled = true;

    document.getElementById("fisrtPorscheBox").scrollIntoView(true);
}//end get911Info




//GENERIC FUNCTIONS


//remove div
function exit356() {
	var grandPa = document.getElementById("porscheXInfo");

	var parent = document.getElementById("fisrtPorscheBox");	//get parent

	grandPa.removeChild(parent);

	requiredDiv = grandPa.getElementsByTagName('div')[1];
   
    if(grandPa.childNodes.length > 1) {
    	requiredDiv.scrollIntoView(true);
    }	
	else {
		document.getElementById("middleSection").scrollIntoView(true);
	}

	document.getElementById("three56B").innerHTML = "Porsche 356";

	document.getElementById("three56B").disabled = false;
}