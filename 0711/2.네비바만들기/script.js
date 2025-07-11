const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');


  // flase 안보이는 상태 true 보이는 상태 목록이 보이는지 안보이는지 여부
let isShow = false;


btn.addEventListener('click', () => {

  // 개사기
  list.classList.toggle('show');


  // jQuery
  // $('.list-group').toggleClass('show');



})

const liTags = document.querySelectorAll('.list-group-item');

for(let i=0; i<liTags.length; i++) {

  liTags[i].addEventListener('click', () => {
    alert('ㅋㅋㅋㅋㅋ');
  })


}





// if(isShow) {
  //  isShow가 true일때 실행되는 영역
  //  true라는 소리는 목록이 현재 보이고 있다
//   list.classList.remove('show');
//   isShow = !isShow;
// } else {
  //  isShow가 fales일때 실행되는 영역
  //  fales라는 소리는 목록이 현재 안보임
  // list.classList.add('show');
  // isShow = !isShow;


// }

  // list.classList.add('show');