//  실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임

const FRUITS = [
  { name: 'apple', memo : '맛있는 사과'},
  { name: 'mango', memo : '맛있는 망고'},
  { name: 'melon', memo : '맛있는 멜론'}
];

const cardTitle = document.querySelectorAll('.card-body h5');
const catdMemo = document.querySelectorAll('.card-body p');
const cardImg = document.querySelectorAll('img')



for(let i=0; i<FRUITS.length; i++) {
let card = 
      `<div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./요소추가연습이미지/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
      </div>
      `;



  // beforebegin : 해당 요소앞에 html을 넣어줌
  // afterbegin : 해당 요소 첫번째 자식을 추가
  //  beforeend : 해당요소 마지막 자식으로 추가
  //  afrerend : 해당요소 뒤에 넣어줌
      document.querySelector('.row').insertAdjacentHTML("beforeend",card);
}

  const cart = document.querySelectorAll('.cart')
  
  for(let i=0; i<cart.length; i++) {
    cart[i].addEventListener('click', (e) => {
      let nameTag = e.target.previousElementSibling.previousElementSibling;
      let name = nameTag.innerHTML;


      // 로컬스토리지에서 꺼내옴
      let temp = localStorage.getItem('cart');

      // 장바구니에 넣으려는과일이 로컬스토리지에 있는지 여부를 알려주는 변수
      let isHave = false;
      // 장바구니에 넣으려는 과일이 로컬스토리지에 있으면 
      // 몇번째 인덱스에 있는지 알려주는 변수
      let index;



      if( temp != null){
        //  로컬스토리지에 있으면 먼저 그 정보ㄹ들을 꺼내와야함
        //  문자열 형태이므로 원본인 배열로 되돌려줌
        temp = JSON.parse(temp)

        temp.forEach( (data, i) => {
          if(data.name == name ) {
            isHave = true;
            index = i;
          }

        })

        //  위반복문에서 기존 로컬스토리지에 해당 과일이 있는지 없는지
        //  검사를 끝냈으므로 여부에 따라 다르게 처리
        if(isHave) {
          temp[index].cnt++;
        } else {
          temp.push( { 'name':name, 'cnt': 1 })
        }


        // 새로 장바구니에 담을 name을 추가
        // temp.push(name);
        //  추가된 정보를 로컬 스토리지에 다시 넣음
        localStorage.setItem('cart', JSON.stringify(temp));


      } else {
        // 해당 과일이 없을때가 아님
        // 로컬스토리지가 비어있을경우
        localStorage.setItem('cart', 
          JSON.stringify( [ { 'name' : name, 'cnt' : 1 }] ) )
      }

    })

  }
  
















//로컬스토리지에 저장 or 수정 (동일한 키를 넣으면 기존 데이터를 지움)
// localStorage.setItem('키','값')
//로컬스토리지에서 해당키에 대한 값을 리턴해줌
// localStorage.getItem('키')
//로컬스토리지에서 해당 키를 삭제
// localStorage.removeItem('키')


// let arr = [1,2,3,4,5];
// let obj = {
//     name : 'kim',
//     age : 20
// };


// 로컬스토리지는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
// localStorage.setItem('arr',arr);
// localStorage.setItem('obj', obj);

//  JSON형식으로 변환 
// let arr_json = JSON.stringify(arr)

// localStorage.setItem('arr', arr_json);

// arr = localStorage.getItem('arr');


//로컬스토리지에서 꺼내와도 아직까진 문자열임 (구조가 살아있는 상태)
// console.log(arr, typeof arr);

// 문자열 형태를 다시 배열로 되돌려줌
// arr = JSON.parse(arr);

// console.log(arr, typeof arr)



// for(let i=0; i<FRUITS.length; i++) {

//   cardTitle[i].innerHTML = FRUITS[i].name;
//   catdMemo[i].innerHTML = FRUITS[i].memo;
//   cardImg[i]
//   .setAttribute( 'src', `./요소추가연습이미지/${FRUITS[i].name}.jpg` );

// }





// cardTitle[1].innerHTML = FRUITS[1].name;
// catdMemo[1].innerHTML = FRUITS[1].memo;
// cardImg[1]
// .setAttribute( 'src', `./요소추가연습이미지/${FRUITS[1].name}.jpg`);

// cardTitle[2].innerHTML = FRUITS[2].name;
// catdMemo[2].innerHTML = FRUITS[2].memo;
// cardImg[2]
// .setAttribute('src', `./요소추가연습이미지/${FRUITS[2].name}.jpg`);




// FRUITS.forEach( (data, index) => {

//   console/console.log(data.name, index);
  
// } )