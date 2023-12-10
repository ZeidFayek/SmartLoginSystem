let x = document.querySelector('.control');

let email_input = document.getElementById('in');
let pass_input = document.getElementById('in1');

let y = document.getElementById('slect');

y.addEventListener('click',function(){
    if(email_input ==""&&pass_input =="")
    {
        document.getElementById('correct').innerHTML="All inputs is required";
    }
    else if(email_input ==""){
        document.getElementById('correct').innerHTML=style="All inputs is required";
    }
    else if(pass_input ==""){
        document.getElementById('correct').innerHTML= "All inputs is required";
    }
    else{
        console.log("hello");
    }
});


