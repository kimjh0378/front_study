const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content')

function clearClassList() { 
for(let i=0; i<btns.length; i++) {
  btns[i].classList.remove('selected');
  contents[i].classList.remove('show');
}

}

for( let i=0; i<btns.length; i++) {

  btns[i].addEventListener('click', () => {
    //0,1,2 에 모든 selcted, show를 제거
    clearClassList();
  
    btns[i].classList.add('selected');
    contents[i].classList.add('show');
  })
}


// btns[1].addEventListener('click', () => {
//   btns[1].classList.add('selected');
//   contents[1].classList.add('show');
// })
// btns[2].addEventListener('click', () => {
//   btns[2].classList.add('selected');
//   contents[2].classList.add('show');
// })