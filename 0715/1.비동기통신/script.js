//예전 문법

const xhr = new XMLHttpRequest();

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

xhr.setRequestHeader("content-type", "application/json")


const data = {
  userId : 100,
  title: '비동기통신 연습',
  body: '이것저것 보내는중'
};


// send 요첨함수
xhr.send(JSON.stringify(data) );

xhr.onload = () => {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드
  console.log( JSON.parse(xhr.response));// 응답 데이터
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 요즘문법
 
// fetch('요청주소')
// .then((변수)=> 성공시 처리할코드)
// .then((변수)=> 성공시 처리할코드)
// .catch((e) => 요청 실패시 처리할 코드)

const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userid = document.querySelector('.userid');
const body = document.querySelector('.body');


// 커뮤니티 게시글을 보려고 할 때
// get요청 버튼을 사용자가 누름 -> 서버로 이 게시글 보고싶다 요청날림 ->
// 서버가 요청받아서 게시글을 찾음 -> DB에 접속해서 해당 게시글을 꺼내옴 ->
//서버가 해당게시글 데이터를 응답객체에 담아서 사용자한테 다시 보내줌 (응답처리)
getBtn.addEventListener('click', () => {

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then( (response) => response.json()  )
  .then((data) => {
    title.innerHTML = data.title;
    id.innerHTML = data.id;
    userid.innerHTML = data.userId;
    body.innerHTML = data.body;

    console.log(data.title);
    console.log(data.id);
    console.log(data.userId);
    console.log(data.body);
  })
  .catch((e) => {
    console.log(e);
  });
  


})


  const post_userid = document.querySelector("[name='userId']");
  const post_title = document.querySelector("[name='title']");
  const post_body = document.querySelector("[name='body']");

postBtn.addEventListener('click', (e) => {
  e.preventDefault();
   
  // 오브젝트 모으기
  const data = {
    userId : post_userid.value,
    title : post_title.value,
    body : post_body.value,
  };

  console.log(data);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify(data),// JSON으로 변환후 
    headers: { // 오브젝트
      "content-type" : "application/json"
    }
  }).then( response => response.json())
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료!');
    })
    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패!')
    })
    
  })
    const async_test = document.querySelector('.async');

    async_test.addEventListener('click', async () => {

      let a =1;
      
      a = await fetch('https://jsonplaceholder.typicode.com/posts/3')
      a = await a.json();

      console.log(a);
      

    });

    function add(i) {

        
      for(i=0; i<10000; i++){

      }

      return i;

    }


    
