const names = document.querySelector('.names');
const temp = document.querySelector('.temp');
const temp_max = document.querySelector('.temp_max');
const temp_min = document.querySelector('.temp_min');
const img = document.querySelector('.world > img')






const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780

  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};



const selectBox = document.querySelector('select')
const APIKEY = '5d19b35d0974bdc0e5f4f8c19dff38d9'


// 이벤트 레스너로 체인지 걸어주고 확인하기
selectBox.addEventListener('change', () => {
  const name = selectBox.value;

  const lat = countryCoordinates[name].latitude;
  const lon = countryCoordinates[name].longitude

  console.log(lat)
  console.log(lon)

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`

  fetch( URL )
  .then(response => response.json())
  .then(data => {
  
    console.log(data)

    names.innerHTML = data.name;
    img.setAttribute('src', '')


  })
})






//api키 잠시 복사함 5d19b35d0974bdc0e5f4f8c19dff38d9