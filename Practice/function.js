
let submission=document.querySelector('#submission');
let result=document.querySelector('#result');
let new1=document.createElement('p');
function BMI(value){

new1.innerHTML=`<h1>Your BMI is ${value}`;
result.style.display='block';
result.append(new1);

}
submission.addEventListener('click',()=>{
    let height1=parseFloat(document.querySelector('#height').value);
let weight1=parseFloat(document.querySelector('#weight').value);

let BMI1=(weight1 / ((height1 / 100) ** 2)).toFixed(2);

isNaN(height1) || isNaN(weight1) || height1<0 || weight1<0?BMI(-1):BMI(BMI1);
  
})
