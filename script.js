function validateForm() {
var x = document.forms["myForm"]["fname"].value;
var y = document.forms["myForm"]["id1"].value;
if (x == "" || y == "") {
alert("Name/ age cannot be empty");
return false;
}
else
alert(Succesfully logged in);
}








