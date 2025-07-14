// 정해진 시간이 흐른뒤 해당 코드가 작동되도록 함
//setTimeout( 콜백함수, 시간(ms))
//5초뒤에 콜백함수가 실행됨
const time = document.querySelector('.time');

let t = 5;

const interval = setInterval(() => {
  t--;
  time.innerHTML = t;
  console.log(t);

},1000);

setTimeout( () => {
  document.querySelector('.alert').style.display = 'none'
  clearInterval(interval)
}, 5000);

// 정해진 시간이 흐른뒤 해당 코드가 반복하며 작동

//setInterval( 콜백함수, 시간(ms))

setInterval(() => {
  console.log('2초마다 실행되는 코드임')
}, 2000)

let timer;

document.querySelector('.btn').addEventListener('click', () => {

  clearTimeout(timer)
  
  timer = setTimeout(() => {
    console.log('클릭하면 3초뒤에 나타남')
  }, 3000);
  
})



// 날짜 관련된 함수들
// 현재 날짜와 시간
//const date = new Date();
//console.log(date)

//년도 추출
//console.log(date.getFullYear())

//월 추출 - (0부터 11로 출력)
//console.log(date.getMonth())

// 일 추출
//console.log(date.getDate())

//요일 추출 - (0-일요일 6-토요일)
//console.log(date.getDay())

// 시간추출
//console.log(date.getHours())

//분 추출
//console.log(date.getMinutes())

// 초 추출
//console.log(date.getSeconds())

const clock = document.querySelector('.clock');


function insertTime() {
const date = new Date;
const h = String( date.getHours()).padStart(2,0);
const m = String( date.getMinutes()).padStart(2,0);
const s = String( date.getSeconds()).padStart(2,0);


clock.innerHTML = `${h} : ${m} : ${s}`;
}
setInterval ( insertTime, 1000)



