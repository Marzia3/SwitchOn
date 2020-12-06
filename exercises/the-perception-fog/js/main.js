console.log('ciao');
//const two button 
//


//let Hide = document.getElementsByClassName ('.Hide');//
const Hide = document.querySelector ('.Hide');
const show = document.querySelector('.show');
let counter = 5;


Hide.addEventListener('click', obscure);
show.addEventListener('click', light );


function obscure(event){
const layer = document.querySelector(`[data-layer~="${counter}"]`);
console.log({layer})
layer.style.opacity = 0;
counterSubstract();


   
};

function light(event){
    const layer = document.querySelector(`[data-layer~="${counter}"]`);
    console.log({layer})
    layer.style.opacity = 1;
   counterAdd();
       
 };


 function counterAdd(){
    if(counter < 5 && counter > 0 ){
        counter++;
    } else {
       counter = 5;
    }
 }



function counterSubstract(){
    if(counter > 1 && counter <= 5){
        counter--;
    }else{
        counter = 1;
    }
}


//  event.target.classList.add("opacity");//
