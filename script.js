
//Code for Basic calculations

let inp = document.getElementById('inp');
function push(event){
    inp.value += event;
};
function equal(){
    try {
       inp.value = eval(inp.value); 
    } catch (error) {
        alert("Something Went Wrong")
    }
}
let clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    inp.value = '';
});

//Code for MATHEMATICAL FUNCTIONS

let del = document.getElementById('del');
del.addEventListener('click',function(){
    inp.value = inp.value.slice(0,-1);
});
let sqrt = document.getElementById('sqrt');
sqrt.addEventListener('click',function(){
    inp.value = Math.sqrt(inp.value);
});
let sin = document.getElementById('sin');
sin.addEventListener('click',function(){
    let x = Math.sin(inp.value* Math.PI/180)
    inp.value = x;
});
let cos = document.getElementById('cos');
cos.addEventListener('click',function(){
    let x = Math.cos(inp.value* Math.PI/180)
    inp.value = x.toFixed(3);          //toFixed is use for ,,,ki tumhe kitne decimal place tak value chahiye
});
let tan = document.getElementById('tan');
tan.addEventListener('click',function(){
    let x = Math.tan(inp.value* Math.PI/180)
    inp.value = x.toFixed(3);
});

//code for KEYBOARD BUTTONS

window.addEventListener('keydown',function(eve){
    inp.value+= eve.key;
});
window.addEventListener('keydown',function(dl){
    if(dl.key=="Delete"){
         inp.value = inp.value.slice(0,-7)
    }
    else if(dl.key=="Backspace"){
        inp.value=inp.value.slice(0,-10);
    }
    else if(dl.key=="Shift"){
        inp.value = inp.value.slice(0,-5);
    }
    else if(dl.key=="Enter"){
        inp.value = inp.value.slice(0,-5);
    }
    else if(dl.key=="Meta"){
        inp.value = inp.value.slice(0,-4);
    }
    else if(dl.key=="Control"){
        inp.value = inp.value.slice(0,-7);
    }
});

//Code for background change

let dark = document.getElementById('dark');
let main1 = document.getElementById('main1');
let body = document.getElementById('body');
let inst = document.getElementById('instructions');

dark.addEventListener('click',function(){
    main1.style.color = "#ffffff";
    main1.style.backgroundColor="#17181c";
    body.style.backgroundColor="#2e424d";
    inst.style.backgroundColor="#23424d";
    let digits =document.querySelectorAll('.digits');
    for (let i = 0; i< digits.length; i++) {
      digits[i].style.backgroundColor="#ff1a4a";
      digits[i].style.boxShadow="2px 2px 2px #f54768 , -2px -2px 2px #f54678";
       
    }
});
let light = document.getElementById('light');
light.addEventListener('click',function(){
    main1.style.color="#000000";
    main1.style.backgroundColor="#016170";
    body.style.backgroundColor="#46a094";
    inst.style.backgroundColor="#46a094";
    let digits2 = document.getElementsByClassName('digits');
    for (let i = 0; i < digits2.length; i++) {
        digits2[i].style.backgroundColor="#ffffff";
        digits2[i].style.boxShadow="3px 3px 4px #6e726c";
        
    }
});

//                                HAPPY ENDING COPYRIHT© CHAUDHARY'S
