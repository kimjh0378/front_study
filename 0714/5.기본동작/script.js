document.querySelector('a').addEventListener('click', (e) => {
  

  // 기본동작 막아줌
  e.preventDefault();



  console.log('aaaa');

})

//  contextmenu 우클릭
document.querySelector('p').addEventListener('contextmenu', (e) => {
  e.preventDefault();
 alert('ㅋㅋㅋ');
})
// selectstart 드래그 못함
document.querySelector('p').addEventListener('selectstart', (e) => {
  e.preventDefault
  alert('드래그 ㄴㄴ')
})