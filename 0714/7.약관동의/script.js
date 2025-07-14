const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

let boxY = box.scrollHeight;
console.log(boxY);


let boxHeight = box.clientHeight;
console.log(boxHeight);



let isDisabled = true;


box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  console.log(scroll);

  if(isDisabled && boxHeight + scroll > boxY - 5) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }

  btn.addEventListener('click', () => {
    
  })
   

 



})