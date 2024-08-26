var passcode;

while (true) {
    passcode = prompt("enter the passcode to start website ")
    if (passcode === "1234" ) {
        break;
    }else if(passcode === "2468"){
        break;
    }
    alert("Wrong Passcode,Try Again")
}
alert("Correct Passcode")

