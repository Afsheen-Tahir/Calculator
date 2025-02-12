let button=document.querySelectorAll('button')
let arrays=Array.from(button)
let bar=document.getElementById('calculate')
let string='';

function barValue(string){
    bar.value=string
}

arrays.forEach((count)=>{
count.addEventListener('click',(e)=>{
    let buttonText=e.target.innerText
   
    if(buttonText === '='){
        string=eval(string)
        barValue(string)
         string=''
        }
    else if(buttonText==='AC'){
        string=''
        barValue(string)
    }
    else{
    string+=buttonText
    barValue(string)
    }
})
})
