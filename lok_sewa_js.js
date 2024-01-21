function validation()
{
    let name = document.getElementById('idfname').value.trim();
    let mname=document.getElementById('idmname').value.trim();
    let lname=document.getElementById('idlname').value.trim();
    let date=document.getElementById('iddate').value.trim();
    let email=document.getElementById('idemail').value.trim();
    let number=document.getElementById('idnumber').value.trim();
    let errormsg = document.getElementById('error_msg');

    let namepattern= /[A-Z]([a-z])+/;
    let error = 0;
    if (name == ''){
        errormsg.innerText="enter your first name";
        error++;
    }
    else if(!namepattern.test(name)){
        errormsg.innerText = "Enter valid  your first name ";
        error++;
    }
    //for middle name
    let mnamepattern= /[A-Z]([a-z])+/;
    if (mname == ''){
        errormsg.innerText="enter your middle name";
        error++;
    }
    else if(!mnamepattern.test(mname)){
        errormsg.innerText = "Enter valid  your middle name ";
        error++;
    }
    //last name
    let lnamepattern= /[A-Z]([a-z])+/;
    if (lname == ''){
        errormsg.innerText="enter your last name";
        error++;
    }
    else if(!lnamepattern.test(lname)){
        errormsg.innerText = "Enter valid  your last name ";
        error++;
    }
    

    //date
    let datecheck = /\S/;
    if(!datecheck.test(date)){
        errormsg.innerText = "choose the date in valid form ";
        error++;
    }

//email
let emailpattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (email == ''){
    errormsg.innerText="enter your email";
    error++;
}
else if(!emailpattern.test(email)){
    errormsg.innerText = "emailmis not valid form";
    error++;
}

//phone
let phonepattern =/^(98|97)\d{8}$/;
if (number == ''){
    errormsg.innerText="enter your number";
    error++;
}
else if(!phonepattern.test(number)){
    errormsg.innerText = "number not valid form";
    error++;
}   


    if(error > 0){
        return false;
    }
    if(error == 0){
       let a= alert("saved succdessful")
        console.log(a);
    }
}