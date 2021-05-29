let total=document.getElementById('totale');
let part1=document.getElementById('part1');
let part2=document.getElementById('part2');
let part3=document.getElementById('part3');
let heart1=document.getElementById('heart');
 let Pri1= document.getElementById('prix1');
let Pri2= document.getElementById('prix2');
let Pri3= document.getElementById('prix3');
    let qtn1= document.getElementById('nbre-qtn1');
 let qtn2= document.getElementById('nbre-qtn2');
 let qtn3= document.getElementById('nbre-qtn3');
function ajoutMontant1(){
 total.innerHTML=+total.innerHTML+250;
  Pri1.innerHTML=+Pri1.innerHTML+250;
 qtn1.innerHTML=+qtn1.innerHTML+1;
} 
function dimunueMontant1(){
    if(qtn1.innerHTML==0){
 total.innerHTML=total.innerHTML+250;
  Pri1.innerHTML=+Pri1.innerHTML+250;
 qtn1.innerHTML=qtn1.innerHTML+1;
       }
       else
       {
       total.innerHTML=+total.innerHTML-250;
  Pri1.innerHTML=+Pri1.innerHTML-250;
 qtn1.innerHTML=+qtn1.innerHTML-1; 
       }
}
function ajoutMontant2(){
 total.innerHTML=+total.innerHTML+250;
  Pri2.innerHTML=+Pri2.innerHTML+250;
 qtn2.innerHTML=+qtn2.innerHTML+1;
} 
function dimunueMontant2(){
    if(qtn2.innerHTML==0){
 total.innerHTML=total.innerHTML+250;
  Pri2.innerHTML=+Pri2.innerHTML+250;
 qtn2.innerHTML=qtn2.innerHTML+1;
       }
       else
       {
       total.innerHTML=+total.innerHTML-250;
  Pri2.innerHTML=+Pri2.innerHTML-250;
 qtn2.innerHTML=+qtn2.innerHTML-1; 
       }
}
function ajoutMontant3(){
 total.innerHTML=+total.innerHTML+250;
  Pri3.innerHTML=+Pri3.innerHTML+250;
 qtn3.innerHTML=+qtn3.innerHTML+1;
} 
function dimunueMontant3(){
    if(qtn3.innerHTML==0){
 total.innerHTML=total.innerHTML+250;
  Pri3.innerHTML=+Pri3.innerHTML+250;
 qtn3.innerHTML=qtn3.innerHTML+1;
       }
       else
       {
       total.innerHTML=+total.innerHTML-250;
  Pri3.innerHTML=+Pri3.innerHTML-250;
 qtn3.innerHTML=+qtn3.innerHTML-1; 
       }
}


function heart(){
    if (heart1.style.color == "red"){
        heart1.style.color = "black";
        }
        else{
           heart1.style.color = "red"; 
        }
}
    
    function heartt(){
    if (heart2.style.color == "red"){
        heart2.style.color = "black";
        }
        else{
           heart2.style.color = "red"; 
        }
          
}
function hearttt(){
    if (heart3.style.color == "red"){
        heart3.style.color = "black";
        }
        else{
           heart3.style.color = "red"; 
        }
          
}
function remove1(){
   part1.style.display='none';
    total.innerHTML=+total.innerHTML-Pri1.innerHTML;
}
function remove2(){
   part2.style.display='none';
    total.innerHTML=+total.innerHTML-Pri2.innerHTML;
}
function remove3(){
   part3.style.display='none';
    total.innerHTML=+total.innerHTML-Pri3.innerHTML;
}


