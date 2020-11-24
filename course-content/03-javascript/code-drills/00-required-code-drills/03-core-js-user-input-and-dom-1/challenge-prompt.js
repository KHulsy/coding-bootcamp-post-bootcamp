// User Input and Writing to DOM 1



// Declare a variable `userName`

var= "userName";



// Prompt the user for their name and store their response into `userName`
// hint: use javascript's built in `prompt` method

varuserName=prompt("Please enter your name", "FarleyBaconChicken");
if (userName !=null)
document.getElementBYID("demo").innerHTML
"Hello" + userName + "! How are you today?";




// Create an alert welcoming the user to the "Sandwich Shop" using the name they just gave us
 if(userName !=null)
 document.getElementBYID("demo").innerHTML
"Hello+FarleyBaconChicken + "!Welcome to Le Sandwich Shop";



// Using the `confirm` method, ask the user if they would like a sandwich
// Store their response into a new `wantsSandwich` variable

confirm("Pick a sandwich")
var=wantsSandwich
if(wantsSandwich !=null)
document.getElementBYID("demo").innerHTML
"Hello+FarleyBaconChicken+ "!Enjoy your vegan sammich";




// Check if the user wanted a sandwich

confirm("Did you want a sandwich?")
var=wantedSandwich
if(wantedSandwich !=null)
document.getElementBYID("demo).innerHTML
"Hello+FarleyBaconChicken+ "!Evidently, you wanted a sandwich";


    // If the user did want a sandwich, use the `document.write` method to write "Your sandwich will be ready soon!" to the DOM

    
// Else, say goodbye to the user using the name they gave us earlier



