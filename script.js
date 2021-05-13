var password = "afirmo";
var response;
var count = 0;
var limit = 3;
var error = false;

while(response != password && !error){
    if (count <= limit)
    {
    response = window.prompt("Enter password");
    count++;
    }
    else{error = true;}
}
if (error){
    alert("Too many tries, access denied")
}
else{
    alert("Access Granted");
}
