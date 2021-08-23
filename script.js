    //get button
    const btnplus = document.querySelectorAll(" #btnplus ");
    console.log(btnplus);
    const btnmoins = document.querySelectorAll("#btnmoins");
    console.log(btnmoins);
    //get span
    const span = document.querySelectorAll("span");
    console.log(span);
    //get span
    const input = document.querySelectorAll(".input");
    console.log(input);
    const input1 = document.querySelectorAll(".input1");
    console.log(input1);
//get amount
const amount = document.querySelectorAll(".amount");
console.log(amount);

//total
const total = document.querySelector(".total");

console.log(btnplus.length)
    //incrimente quantite 
    for (let i=0 ;i<btnplus.length; i++){
    btnplus[i].addEventListener("click",function() {
        input[i].value++;
        amount[i].innerHTML=parseInt(amount[i].innerHTML)+parseInt(input1[i].value);
        total.innerHTML=parseInt(total.innerHTML)+parseInt(input1[i].value);
    })

    }
//decremente quantite
for(let i=0;i<btnmoins.length;i++){
    btnmoins[i].addEventListener("click",function(){
        input[i].value--;
         amount[i].innerHTML=parseInt(amount[i].innerHTML)-parseInt(input1[i].value);
          total.innerHTML=parseInt(total.innerHTML)-parseInt(input1[i].value);
    });

}

// heart
let heart = document.querySelectorAll("#heart");
console.log(heart);
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        if (heart[i].style.color=="red"){
            heart[i].style.color="black"
        }
        else{
            heart[i].style.color="red"
        }
    })
}
//remove
const ligne = document.querySelectorAll("tbody tr");
const cor = document.querySelectorAll("#trash");
for(let i=0;i<cor.length;i++){
    cor[i].addEventListener("click",function(){
        let child = ligne[i].lastChild;
        while(child){
            ligne[i].removeChild(child)
            child=ligne[i].lastChild ;
        }
    }
    )
}
