function setHTML(selector, value) {
    var element = document.querySelector(selector);
    element.innerHTML = value;
}

var cars = [
    {
        img: 'https://porsche-vietnam.vn/wp-content/uploads/2022/05/992-sc-modelimage-sideshot-1536x864.png',
        name: '911 Sport Classic',
        price: 'Giá tiêu chuẩn: 19.220.000.000 VNĐ*',
    },
    {
        img: 'https://porsche-vietnam.vn/wp-content/uploads/2022/11/992-dakar-modelimage-sideshot-1536x864.png',
        name: '911 Dakars',
        price: 'Giá tiêu chuẩn: 15.290.000.000 VNĐ*',
    },
    {
        img: 'https://porsche-vietnam.vn/wp-content/uploads/2020/10/911-tus-cab-modelimage-sideshot-1600x900.png',
        name: '911 Turbo S Cabriolet',
        price: 'Giá tiêu chuẩn: 17.380.000.000 VNĐ*',
    },
]

// 1. Hiển thị danh sách cars thông qua Javascript thay thế cho HTML
document.addEventListener('DOMContentLoaded', function () {
    renderCars();
})

function renderCars() {
    var html = '';
    var carLength = cars.length;
    for (i = 0; i < carLength; i++) {
        var car = cars[i];
        html += `
        <div class="card" style="width: 24rem;">
          <img class="card-img-top" src="${car.img}" alt="${car.name} image image">
          <div class="card-body">
           <h5 class="card-title">${car.name}</h5>
           <p class="card-text">${car.price}</p>
          </div>
        </div>
        `
    }
    setHTML('#car-list', ''); 
}

function handleCheckPrice() {
    var selectElement = document.querySelector('#cars');
    var selectValue = selectElement.value

    // Kiểm tra xem xe nào được chọn
    if (selectValue === '911 Sport Classic') {
        renderCars(0);
    } else if (selectValue === '911 Dakars') {
        renderCars(1);
    } else if (selectValue === '911 Turbo S Cabriolet') {
        renderCars(2);
    } else {
        setHTML('#car-list', '');
    }
}

function renderCars(index) {
    var car = cars[index];
    var html = `
        <div class="card" style="width: 24rem;">
          <img class="card-img-top" src="${car.img}" alt="${car.name} image">
          <div class="card-body">
           <h5 class="card-title">${car.name}</h5>
           <p class="card-text">${car.price}</p>
          </div>
        </div>
    `;
    setHTML('#car-list', html);
}