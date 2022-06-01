<?php 
//getting all form values
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$website=$_POST['website'];
$message=$_POST['message'];


if(!empty($email)&& !empty($message)){

if(filter_var($email,FILTER_VALIDATE_EMAIL)){
    $recevier="andam.00012789@gmail.com";
    $subject="email form $name to you";
    $body="email form $name to you with email $email with phone $phone with website $website and his message is $message";
    $sender="and the sender is $email";
    if(mail(  $recevier, $subject, $body, $sender)){
        echo "ur message has been sent ";
        echo ("$recevier .$subject.$body.$sender");
    }else{
        echo "failed to send ur email";
    }
}
else { 
    echo"enter a valid emaillike example@gmail.com";
}
}
elseif(!empty($email)){
echo('message is required');
}
elseif(!empty($message)){
    echo('email is required');
    }
    elseif(empty($email)&&empty($message)){
        echo "email and message are requierd";
    }


//bas dabe bixaya server aki online hata esh bka agar na hamu shty tawawa
?>