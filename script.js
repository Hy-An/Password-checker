const PASSWORD = "afirmo";
let RESPONSE;
let COUNT = 0;
const LIMIT = 3;
let ERROR = false;

while(RESPONSE != PASSWORD && !ERROR){
    if (COUNT <= LIMIT)
    {
    RESPONSE = window.prompt("Enter password");
    COUNT++;
    }
    else{ERROR = true;}
}
if (ERROR){
    alert("Too many tries, access denied")
}
else{
    alert("Access Granted");
}
