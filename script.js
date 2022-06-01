
    const form=document.querySelector("form");
    var statusTxt=form.querySelector(".button-area span");
    
    form.onsubmit= (e)=>{
    e.preventDefault();
    statusTxt.style.display="block";

    let xhr=new XMLHttpRequest();//CREATING NEW XML OBJECT 
    xhr.open("POST","message.php",true);//sending post request to message.php file
    
    xhr.onload=()=>{//once ajax loaded
    if(xhr.readyState == 4 &&xhr.status==200){ //if ajax response status is 200 && ready status is 4 means there is no any error 
    let response1=xhr.response;//storing ajax response 
    if(response1.indexOf("enter a valid emaillike example@gmail.com")!=-1||response1.indexOf("failed to send ur email")||response1.indexOf("enter a valid emaillike example@gmail.com")){
        statusTxt.style.color="red";
    }
    else{
        form.reset();
        setTimeout(()=>{
            statusTxt.style.display="block";
        },3000);//hide the status text after 3 sec if the message has been sent successfully
    }
    statusTxt.innerText=response1;
}
    }
    let formData=new FormData(form);//creating new form data obj.this object is used to send form data
    xhr.send(formData);//sending form data
}