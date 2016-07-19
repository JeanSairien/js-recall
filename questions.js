var selectElementsStartingWithA = function(array) {
    var tab = [];
    for(var i=0;i < array.length; i++){
        var first_letter = array[i].charAt(0);
        if(first_letter == 'a'){
        	tab.push(array[i]);
        	}
        }
        	return tab;
    }
    


var selectElementsStartingWithVowel = function(array) {
	var tab = [];
	var voyelle = ['a','e','i','o','u','y'];
		for(var i=0;i<array.length;i++){
			var test = array[i].toLowerCase();
			var first_letter = test.charAt(0);
             for(var inc=0;inc<voyelle.length;inc++){
			 	if(first_letter == voyelle[inc]){
			 		tab.push(array[i]);
			 	}
			 }

		}
				return tab ; 

    
}

var removeNullElements = function(array) {
    function selectElements(element){
        return element !== null; 
    }

    return array.filter(selectElements);}
    /*var tab = [];
    for(var i=0 ; i<array.length ; i++){
    if(array[i] != null){
        tab.push(array[i]);
    }
    return tab;
   }
}*/



var removeNullAndFalseElements = function(array) {
   function selectElements(element){
        return element !== null && element !== false; 
    }

    return array.filter(selectElements);
}

   /*var tab =[];
   for(var i=0;i<array.length;i++){
    if(array[i] != null && typeof array[i] != "boolean"){
        tab.push(array[i]);
    }
    return tab;
   }
}*/

var reverseWordsInArray = function(array) {
    var tab =[];
    for (var i=0; i<array.length; i++){
        var phrase = array[i].split("").reverse().join("");
                tab.push(phrase);
    }
    return tab;
}

var everyPossiblePair = function(array) {
    var tab = [];
    for (var i=0; i<array.length-1; i++){
        for (var k=i+1; k<array.length; k++){
                var paire = [array[i],array[k]];
                paire.sort();
                tab.push(paire);
             }
    }
    tab.sort();
    return tab;
}
var allElementsExceptFirstThree = function(array) {
        array.splice(0, 3);
        return array;  
    }

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
   return str.split("").reverse().join("");

        res = array.map(reverseString);
        return res.sort().map(reverseString);
}
        /*return array.map(reversestring).sort("").map(reversestring);*/
    /*var tab = [];
    for(var i=0;i<array.length;i++){
        var w=(array[i].split().reverse().join());
            tab.push(w); 
    }
    tab.sort();
    for(var i=0;i<tab.lenght;i++){
        tab[i]= (tab[i].split("").reverse().join(""));
    }
    return tab;}*/


var getFirstHalf = function(string) {
    var n = Math.ceil(string.length);
    return  string.slice(0, n);
}

var makeNegative = function(number) {
    return -Math.abs(n);
}

var numberOfPalindromes = function(array) {
    var tab = [];
   for (var i = 0; i < array.length; i++) {
       
       if (array[i] === array[i].split("").reverse().join("")) {
           tab.push(array[i]);
       }
   }
   return tab.length;
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
