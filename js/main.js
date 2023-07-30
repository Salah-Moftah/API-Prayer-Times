  function getTimings(city) {
    axios.get(`http://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`)
    .then((response) => {
        let content_1 = `<h5 class="card-title fs-1 fw-bold">${response.data.data.timings.Fajr}</h5>`
        document.querySelector('.time-1').innerHTML = content_1;
        let content_2 = `<h5 class="card-title fs-1 fw-bold">${response.data.data.timings.Sunrise}</h5>`
        document.querySelector('.time-2').innerHTML = content_2;
        let content_3 = `<h5 class="card-title fs-1 fw-bold">${response.data.data.timings.Dhuhr}</h5>`
        document.querySelector('.time-3').innerHTML = content_3;
        let content_4 = `<h5 class="card-title fs-1 fw-bold">${response.data.data.timings.Asr}</h5>`
        document.querySelector('.time-4').innerHTML = content_4;
        let content_5 = `<h5 class="card-title fs-1 fw-bold">${response.data.data.timings.Maghrib}</h5>`
        document.querySelector('.time-5').innerHTML = content_5;
        let content_6 = `<h5 class="card-title fs-1 fw-bold">${response.data.data.timings.Isha}</h5>`
        document.querySelector('.time-6').innerHTML = content_6;
    }).catch(() => {
      console.log('Error');
    })
    
  }

  getTimings('cairo');

let citys = document.querySelectorAll('.cairo li').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

    if (el.dataset.city === 'cairo') {
      getTimings(el.dataset.city);
    } else if (el.dataset.city === 'alex') {
      getTimings(el.dataset.city);
    } else if (el.dataset.city === 'aswan') {
      getTimings(el.dataset.city);
    } else if (el.dataset.city === 'giza') {
      getTimings(el.dataset.city);
    } else if (el.dataset.city === 'Sharm El-Shaikh') {
      getTimings(el.dataset.city);
    } 
  })
})


function getdate() {
  axios.get('http://api.aladhan.com/v1/timingsByCity?country=EG&city')
.then((response) => {
    let contect =`تاريخ اليوم: <span style="color: black; font-size: 30px">${response.data.data.date.hijri.weekday.ar}</span> <span dir="ltr">${response.data.data.date.readable}</span>`;
    document.querySelector('.date').innerHTML = contect;
}).catch(() => {
  console.log('Error');
})
}

getdate();