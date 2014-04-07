console.log("Good Morning")
function f(o){
  o.value=o.value.toUpperCase().replace(/([^0-9A-Z])/g,"");
}
var isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
var telephone= prompt("Please enter your ten digit phone number with dashes included\nThis is for a great cause I swear ^_^","numbers")
while (telephone.length !== 12 || telephone.charAt(3,7) !== '-') {
	alert("Please enter your full ten digit phone number and remember to include the dashes")
	var telephone= prompt("Please enter your ten digit phone number with dashes included\nThis is for a great cause I swear ^_^","numbers")

}
alert(telephone+" is a fine phone number. You should order more pizzas. Just a suggestion")

var birthdate= prompt("Please enter your date of birth using the xx/xx/xx format\nThis is completely trustworthy I swear","Date of Birth")
while (birthdate.length !== 8 || birthdate.charAt(2,5) !== '/') {
	alert("Please enter your birthdate using the xx/xx/xx format")
	var birthdate= prompt("Enter your birthdate below", "xx/xx/xx")

}
alert(birthdate+" must be a pretty cool day. Don't forget to order your parents some flowers!")

var postalcode= prompt("Please enter your postal code. It can be xxxxx or xxxxx-xxxx", "postal code")

if (postalcode.length === 5 || (postalcode.length === 10 && postalcode.charAt(5) === '-')) {
		alert(postalcode+" is a pretty nice area I'm sure. You should go to your local park today")
}

else {
	alert("Please enter your postal code in either the xxxxx or xxxxx-xxxx format")
	var postalcode= prompt("Please enter postal code", "xxxxx or xxxxx-xxxx")
}




var state=prompt("Please enter the abbreviation for your state in all caps. No funny business I promise","State")
state= state.toUpperCase;
while (state.length !== 2)  {
	alert("Please just input the abbreviation of your State")
	var state=prompt("Please enter the initials of your state.","State")
}

alert(state+" is a beautiful place to visit!")

var marriage=prompt("Please state if you are married: Yes or No", "marriage status")
if (marriage === "Yes" || marriage === "yes" || marriage === "YES" || marriage === "yeS" || marriage === "yES" || marriage === "YeS"|| marriage === "YEs" || marriage === "no" || marriage === "No" || marriage === "NO"|| marriage === "nO"){
	alert("Thank you for the infomation!")
}  
else{
	alert("Please input a simple Yes or No regarding your marital status.")
	var marriage=prompt("Please state if you are married: Yes or No", "marriage status")
}
alert("Thank you for all the wonderful infomation. I assure you it's in safe hands ;)")
