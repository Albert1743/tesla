let km = document.querySelector(".box_km b")
let speed = document.querySelector(".left_speed b")
let five = 5

let btn_speed_plus = document.querySelector("#speed_plus")
let btn_minus_speed = document.querySelector("#speed_minus")

btn_speed_plus.onclick = () => {
    let currentValue = parseInt(speed.innerHTML);
    speed.innerHTML = currentValue - 5;

    let km_minus = parseInt(km.innerHTML);
    km.innerHTML = km_minus + 10;
}

btn_minus_speed.onclick = () => {
    let currentValue = parseInt(speed.innerHTML);
    speed.innerHTML = currentValue + 5;

    let km_minus = parseInt(km.innerHTML);
    km.innerHTML = km_minus - 10;
}



// TEMPERATURE
let temperature = document.querySelector(".left_temperature b")
let btn_plus_temperature = document.querySelector("#temperature_plus")
let btn_minus_temperature = document.querySelector("#temperature_minus")

btn_plus_temperature.onclick = () => {
    let current = parseInt(temperature.innerHTML);
    temperature.innerHTML = current - 1;

    if (temperature.innerHTML < 20) {
        document.querySelector("#conder").textContent = "Печка";
    } else {
        document.querySelector("#conder").textContent = "Кондиционер";
    }
}

btn_minus_temperature.onclick = () => {
    let current = parseInt(temperature.innerHTML);
    temperature.innerHTML = current + 1;

    if (temperature.innerHTML <= 19) {
        document.querySelector("#conder").textContent = "Печка";
    } else {
        document.querySelector("#conder").textContent = "Кондиционер";
    }
}


let conditioner = document.querySelector("#conditioner")

conditioner.onclick = () => {
    let minus = parseInt(km.innerHTML);
    if (minus > 730) {
        km.innerHTML = minus + 20;
    } else {
        km.innerHTML = minus - 20;
    }
}


let view = document.querySelector("#view");
view.onclick = () => {
    setTimeout(() => {
        window.location.href = "./salon.html";
    }, 200)
}

let view_car = document.querySelector("#view_car");
view_car.onclick = () => {
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 200)
}


const img = document.querySelector('img')
const btns = document.querySelectorAll('button')
const images = {
    black: "img/black_salon.jpg",
    white: "img/white_salon.png",
    bejeviy: "img/bejeviy_salon.png",
}


btns.forEach(btn => {
    btn.onclick = () => {
        let color = innerText
        img.setAttribute('src', images[color])
    }
})

