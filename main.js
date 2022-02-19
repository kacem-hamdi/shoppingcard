const coeur=document.getElementsByClassName('fa-heart');
console.log(coeur);
for(let i of coeur){
    i.addEventListener('click', function() {
        if(i.style.color === 'red') {
            i.style.color = 'black';
        }
        else {
     i.style.color = 'red';
    }
})
}
const rem=document.getElementsByClassName('remove');
const iteams=document.querySelectorAll('.iteams');
console.log(iteams);
for(let i of iteams){
    i.addEventListener('click',function(){
        i.remove();
    })
}
const pls=document.getElementsByClassName('plus');
for(let j of pls)
j.addEventListener('click',function(){
    j.previousElementSibling.value++
})

const min=document.getElementsByClassName('min');
for(let k of min)
k.addEventListener('click',function(){
    const p=k.nextElementSibling.value
    if(p>0){    k.nextElementSibling.value--
    }
})
const price=document.getElementsByClassName('price');
const qty=document.getElementsByClassName('qtt');
function sum(){
let total=0;
for(let i=0;i<price.length;i++){
    total+=parseInt(qty[i].value)*parseInt(price[i ])
}
}