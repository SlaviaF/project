const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const eventList=document.querySelector('.event-list')
const previousPage =document.querySelector('.previous-page')
const nextPage=document.querySelector('.next-page')
const search =document.querySelector("#site-search")

let coffeeEventList=[];
let page = 0;



const totalImages = images.length;
console.log(images)
console.log(prev)
let index = 0;
prev.addEventListener('click', () => {
  console.log("click")
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {

    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}


for (let i =1; i <= 30; i++){
  let li = document.createElement("li");

  li.innerHTML = `  <div class="event-item">
  <div class="event-item-image">
  <img src="https://media.istockphoto.com/photos/ladys-hands-holding-cup-with-sth-heartshaped-picture-id880466816?b=1&k=20&m=880466816&s=170667a&w=0&h=EmfPhci08icmztc29LCKs5IdjnPkDoPgveT6yihrSec=" alt="coffee event">
  </div> 
  <div class="event-item-info">

                    <h2>${i}.World Copenhagen 2021</h2>
                     <p class="light-text">Published 12/07/2021</p> 
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. An tu me de L. Quod autem satis est, eo quicquid accessit, nimium est; Primum quid tu dicis breve? Quid ad utilitatem tantae pecuniae? Non est igitur summum malum dolor. Duo Reges: constructio interrete. At iam decimum annum in spelunca iacet. Praeclare hoc quidem. </p>
  
  <p>Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Illi enim inter se dissentiunt. Paria sunt igitur. Quis non odit sordidos, vanos, leves, futtiles? Negat esse eam, inquit, propter se expetendam. Quid ait Aristoteles reliquique Platonis alumni? </p>
  
  <p>Confecta res esset. Sed nimis multa. Hos contra singulos dici est melius. Quam si explicavisset, non tam haesitaret. Erit enim mecum, si tecum erit. </p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. An tu me de L. Quod autem satis est, eo quicquid accessit, nimium est; Primum quid tu dicis breve? Quid ad utilitatem tantae pecuniae? Non est igitur summum malum dolor. Duo Reges: constructio interrete. At iam decimum annum in spelunca iacet. Praeclare hoc quidem. </p>
  
  <p>Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Illi enim inter se dissentiunt. Paria sunt igitur. Quis non odit sordidos, vanos, leves, futtiles? Negat esse eam, inquit, propter se expetendam. Quid ait Aristoteles reliquique Platonis alumni? </p>
  
  <p>Confecta res esset. Sed nimis multa. Hos contra singulos dici est melius. Quam si explicavisset, non tam haesitaret. Erit enim mecum, si tecum erit. </p>
  </div> 
  <div>
  </div>
  </div> 

                     `

                     coffeeEventList.push(li)
    
  }


  

for (let i = 0; i<page+5; i++){
  eventList.appendChild(coffeeEventList[i]);
}  

nextPage.addEventListener('click', ()=>{
  page==coffeeEventList.length-5 ? (page=0) : (page +=5);
  eventList.innerHTML="";
  for(let i =page; i<page +5; i++){
    eventList.appendChild(coffeeEventList[i])
  }

})

previousPage.addEventListener('click', ()=>{
  page==0 ? page= coffeeEventList.length-5: (page-=5);
  eventList.innerHTML="";
  for(let i =page; i<page +5; i++){
    eventList.appendChild(coffeeEventList[i])
  }
})

 