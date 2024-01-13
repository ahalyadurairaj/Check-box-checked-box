var input = document.getElementById('value');

var check = document.getElementById('check');

var btn = document.getElementById('sub');




btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(input.value == "" ){
        alert("pleace enter a name");
    }
    else if(!check.checked){
        alert("pleace click a checkbox");
    }
    else{
        alert("login succesfully");
    }
})




