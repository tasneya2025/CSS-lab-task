const fnametf=document.getElementById("fname");
const lnametf=document.getElementById("lname");
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const cp=document.getElementById("cp");
const phone=document.getElementById("phone");

const fnameErr=document.getElementById("fnameErr");
const lnameErr=document.getElementById("lnameErr");
const emailErr=document.getElementById("emailErr");
const passErr=document.getElementById("passErr");
const confpassErr=document.getElementById("conpassErr");
const phoneErr=document.getElementById("numErr");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex=/^(?:\+?88|0088)?(01[3-9]\d{8})$/;
function formvalidate()
{
    const nameRegex=/^[a-zA-Z]+$/;
    const emailRegex=/\S+@\S+\.\S+/;


    let hasErr=false;
    if(fnametf.value.trim()==="")
    {
        hasErr=true;
        fnameErr.innerHTML="name can not be empty";
        fnameErr.style.color="red";
    }
    else
    {
        if(!nameRegex.test(fnametf.value))
        {
            hasErr=true;
            fnameErr.innerHTML="name can not have any symbol or numbers";
            fnameErr.style.color="red";
        }
    }


    
   
    if(lnametf.value.trim()==="")
    {
        hasErr=true;
        lnameErr.innerHTML="name can not be empty";
        lnameErr.style.color="red";
    }
    else
    {
        if(!nameRegex.test(lnametf.value))
        {
            hasErr=true;
            lnameErrnameErr.innerHTML="name can not have any symbol or numbers";
            lnameErrnameErr.style.color="red";
        }
    }





    if(email.value.trim()==="")
        {
            hasErr=true;
            emailErr.innerHTML="email can not be empty";
            emailErr.style.color="red";
        }
    else{
        if(!emailRegex.test(email.value))
        {
            hasErr=true;
            emailErr.innerHTML="enter a valid email";
            emailErr.style.color="red";
        }

    }
    if(!passwordRegex.test(pass.value))
    {
        hasErr=true;
        passErr.innerHTML="enter a strong password";
        passErr.style.color="red";
    }
    if(cp.value!=pass.value)
    {
        hasErr=true;
        confpassErr.innerHTML="password does not match";
        confpassErr.style.color="red";
    }
    if(!phoneRegex.test(phone.value))
    {
        hasErr=true;
        phoneErr.innerHTML="enter a valid phone number";
        phoneErr.style.color="red";
    }
    return !hasErr
}