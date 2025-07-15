function connectGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const temp = document.querySelector('.temp');
  const temp_max = document.querySelector('.temp_max');
  const temp_min = document.querySelector('.temp_min');
  const name = document.querySelector('.name');



  console.log(`위도:${lat} 경도:${lon}`)
  const APIKEY = '5d19b35d0974bdc0e5f4f8c19dff38d9'
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&nuits=metric&lang=kr`

  fetch(URL)
  .then(response => response.json())
  .then(data => {
    temp.innerHTML = data.main.temp;
    name.innerHTML = data.name;




    console.log(data);

   })







  console.log(URL);

}

function errorGeo() {
  alert('위치 정보 연결 실패')
}

// 위치정보 허용
navigator.geolocation.getCurrentPosition(connectGeo,errorGeo);