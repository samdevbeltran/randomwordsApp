var phrasesVar;
var keyPhrasesVar;

fetch('./json/words.json').then(response =>{
		if(response.ok){
			return response.json();
		}
	}).then(result => {

		phrasesVar = result;
	});

fetch('./json/keyWords.json').then(response =>{
	if(response.ok){
		return response.json();
	}
}).then(result => {

	keyPhrasesVar = result;
});

function showSlectedPhrase(id){

	let result;
	if(typeof id === "string"){
		id = id.trim();
		id = id.toLowerCase();
		

		switch(id){
			case "morat":
				result = [getSecretItem(id)];
			break;
			case "novios":
				result = [getSecretItem(id)];
			break;
			case "album":
				result = [getSecretItem(id)];
			break;
			case "video":
				result = [getSecretItem(id)];
			break;
			case "morat2":
				result = [getSecretItem(id)];
			break;
			case "mon amour":
				result = [getSecretItem(id)];
			break;
			case "la suerte":
				result = [getSecretItem(id)];
			break;
			case "if the":
				result = [getSecretItem(id)];
			break;
			
		}	
	}else{
		result = phrasesVar.filter(item => item["id"] == id);	
	}
	
	sessionStorage.setItem("presentPhrase", JSON.stringify(result));
	window.location.href = https://samrandomwordsapp.herokuapp.com/index.html#message-section";
	//window.location.href = "http://localhost/randomwordsApp/index.html#message-section";
}


function findByType(type,value){
	value = String(value)
	value = value.trim();
	value = value.toLowerCase();
	value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	let result = [];	

	phrasesVar.forEach(item => {
		item[type] = item[type].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		if(item[type].toLowerCase().indexOf(value) > -1){
			result.push(item)  
		}
	});

	return result;
}

function checkIfIdExists(array,list){
	let numbersTrack = [];
	if(array.length == 0){
		return false;
	}
	if(array.length > 0){	
		array.forEach(item => {
			numbersTrack.push(item["id"])
		})

		if(!numbersTrack.includes(list["id"])){
			array.push(list);
		}
	}
}

function reloadPage(){
	location.reload();
}

if(document.getElementById("buscar-button2") != null){
	document.getElementById("buscar-button2").addEventListener("mouseup",function(){
		setTimeout(function(){
		normalSearchButtonColor("buscar-button2");		
		},200);	
	});
	document.getElementById("buscar-button2").addEventListener("mousedown",function(){		
		pressSearchButtonColor("buscar-button2");
	});	
}

function normalSearchButtonColor(buttonName){
	document.getElementById(buttonName).style.cssText = 
	"color: #ff6700;"+
	"background-color: transparent;";	    
}

function pressSearchButtonColor(buttonName){
	document.getElementById(buttonName).style.cssText = 
	"color: white;"+	
	"border: 2px solid #ff6700;"+
	"background-color: #ff6700;";
}

function getSecretItem(word){
	word = word.toLowerCase();
	word = word.trim();
	let response;
	
	switch(word){
			case "morat" :
				response = keyPhrasesVar["morat"];
			break;
			case "novios" :
				response = keyPhrasesVar["novios"];
			break;
			case "album" :
				response = keyPhrasesVar["album"];
			break;
			case "video" :
				response = keyPhrasesVar["video"];
			break;
			case "morat2" :
				response = keyPhrasesVar["morat2"];
			break;
			case "mon amour" :
				response = keyPhrasesVar["mon amour"];
			break;
			case "la suerte" :
				response = keyPhrasesVar["la suerte"];
			break;
			case "if the" :
				response = keyPhrasesVar["if the"];
			break;
		}		
		
	return response;
}
