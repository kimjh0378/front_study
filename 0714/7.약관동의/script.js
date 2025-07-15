const box = document.querySelector('.box');
const btn = document.querySelector('.btn');
const chk = document.querySelector('#chk');

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
  
})


  //체크해야 버튼 확인
  btn.addEventListener('click', () => {
    if(chk.checked) {
      alert('다음페이지로 이동')
      } else {
        alert('약관동의 안함')
      }

  })

  // 446p. 화면 높이 window.innerHeight
  console.log(window.innerHeight)
  //document.body.clientHeight body 태그 높이
  console.log(document.body.clientHeight)

  const innerHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;


window.addEventListener('scroll', () => {
  console.log(window.scrollY);


  // 윈도우 스크롤 Y축 나누기 바디태그 높이와 화면 높이를 빼고 100을 곱한거임
  const status = window.scrollY / (bodyHeight - innerHeight) * 100;
  console.log("비율임", status)

  document.querySelector('.status-bar').style.width = `${status}%`;

})


