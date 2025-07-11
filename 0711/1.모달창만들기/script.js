const btnBoard = document.querySelector('#open');
const modalBox = document.querySelector('.black-bg');



//js문법
  btnBoard.addEventListener( 'click', () => {
  modalBox.classList.add('show');

});

// jQuery
// $('#open').on( 'click', () => {
//   $('.black-bg').addClass('show');
// })






const btnClose = document.querySelector('#close');


// 클릭했을때 실행
btnClose.addEventListener( 'click', () => {


  //  클릭하면 show 클래스를 지우기
  modalBox.classList.remove('show');

});

// $('#close').on('click', () => {
//   $('black-bg').removeClass('show');
// })

