var i = 0;

var images = [];
var time = 3000;

images[0] = "assets/donuts-and-bagel-display-205961.jpg";
images[1] = "assets/chocolate-cupcake-with-white-and-red-toppings-913136.jpg";
images[2] = "assets/blueberries-cake-chocolate-chocolate-cake-291528.jpg";
images[3] = "assets/chocolate-cake-on-chopping-board-2067396.jpg";

function pictureSlider() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("pictureSlider()", time);
}
window.onload = pictureSlider;

const header = document.querySelector(".header");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function() {
    const scrollheight = window.pageYOffset;
    const headerheight = header.getBoundingClientRect().height;
    if (scrollheight > headerheight) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});

const cart = document.querySelector(".carti");
const closeCart = document.querySelector(".closecart");
const cartList = document.querySelector(".cartlist");

cart.addEventListener("click", function() {
    cartList.classList.add("show-cartlist");
});

closeCart.addEventListener("click", function() {
    cartList.classList.remove("show-cartlist");
});
const reviews = [{
        id: 1,
        name: "Abel Adejumo",
        img: "assets/IMG_20181024_011411.jpg",
        text: "The quality of pasteries at Optimized bakery is top notch, they are taking this industry to the next level.",
    },
    {
        id: 2,
        name: "Paulina Obi",
        img: "assets/IMG_20200413_171305.jpg",
        text: "The customer Service at Optimized bakery is excellent as advertised, orders are taken and deliveries efficiently.",
    },
    {
        id: 3,
        name: "James Dauda",
        img: "assets/IMG_20180413_012421.jpg",
        text: "OPtimized bakery is one of the oldest, tested and trusted bakery in the country, and they have continously solidified their position as a leader in this industry, I'm glad to be a customer.",
    },
    {
        id: 4,
        name: "Abdullahi karwa",

        img: "assets/IMG_20180415_181428.jpg",
        text: "Place an order and you will be glad you did, over 5 years of patronising them and each experience has been a delight. Unarguably The best in the game. ",
    },
];

const person = document.getElementById("person");
const info = document.getElementById("info");
const img = document.getElementById("person-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    person.textContent = item.name;
    info.textContent = item.text;
    img.src = item.img;
});

function showAuthor(author) {
    const item = reviews[author];
    person.textContent = item.name;
    info.textContent = item.text;
    img.src = item.img;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showAuthor(currentItem);
});
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showAuthor(currentItem);
});

const staff = [{
        mgt: "Josephine Attah",
        image: "assets/IMG_20200602_194241.jpg",
        job: "Chief Chef",
    },
    {
        mgt: "Samuel Nanyong",
        image: "assets/IMG_20200508_224341.jpg",
        job: "Deputy Chef I ",
    },
    {
        mgt: "Ahmed Adebayo",
        image: "assets/IMG_20191220_003429.jpg",
        job: "Deputy Chef II",
    },
    {
        mgt: "Aisha Kamaru",
        image: "assets/IMG_20200424_232022.jpg",
        job: "Head of Department, ACCOUNTING ",
    },
    {
        mgt: "Ahmed Adebayo",
        image: "assets/IMG_20200504_204437.jpg",
        job: "Head of Department, LOGISTICS",
    },
];

const mgt = document.getElementById("worker");
const job = document.getElementById("job");
const staffImg = document.getElementById("staff-img");
const nextsBtn = document.getElementById("nexts");
const prevsBtn = document.getElementById("prevs");

let currentWorker = 0;

window.addEventListener("DOMContentLoaded", function() {
    const desc = staff[currentWorker];
    mgt.textContent = desc.mgt;
    staffImg.src = desc.image;
    job.textContent = desc.job;
});

function showWorker(worker) {
    const desc = staff[worker];
    mgt.textContent = desc.mgt;
    staffImg.src = desc.image;
    job.textContent = desc.job;
}

nextsBtn.addEventListener("click", function() {
    currentWorker++;
    if (currentWorker > staff.length - 1) {
        currentWorker = 0;
    }
    showWorker(currentWorker);
});
prevsBtn.addEventListener("click", function() {
    currentWorker--;
    if (currentWorker < 0) {
        currentWorker = staff.length - 1;
    }
    showWorker(currentWorker);
});
const hamburger = document.querySelector(".hamburger");
const link = document.querySelectorAll(".nav-link");
const nav = document.getElementById("nav-list");
const clos = document.querySelector(".close");
const he = document.querySelector(".he");
const heade = document.querySelector(".header");
const navg = document.querySelector(".nav");

hamburger.addEventListener("click", function() {
    nav.classList.add("show-nav-list");
    clos.style.display = "block";
    he.style.display = "none";
    hamburger.style.display = "none";
    navg.style.backgroundColor = "white";
});
clos.addEventListener("click", function() {
    nav.classList.remove("show-nav-list");
    clos.style.display = "none";
    he.style.display = "flex";
    hamburger.style.display = "block";
    navg.style.backgroundColor = "#f3d28b";
});

const cartButton = document.querySelectorAll(".cart");


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    showTotals()
}
cartButton.forEach(function(cartBut) {
    cartBut.addEventListener("click", (e) => {
        e.preventDefault;
        const item = {};
        const namecart =
            e.target.parentElement.parentElement.children[2].children[0].textContent;
        item.name = namecart;
        const price = e.target.parentElement.parentElement.children[2].children[2].textContent.replace(
            "$",
            ""
        );
        const finalprice = price.trim();
        item.price = finalprice;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `<div class="cartitemitem">
        <div class="cart-name"> <p class="cart-namee">${item.name}</p></div>
        <div class="cart-price"><p class="cart-pricee">$${item.price}</p></div>
        <input class="cart-input" type="number" value="1">
        <div class="remove-cart"><span class="remove">REMOVE</span></div>
        </div>`;
        var quantityInputs = cartItem.getElementsByClassName('cart-input')


        const cartbott = document.getElementById("cart-bottom");
        cartlist.insertBefore(cartItem, cartbott);

        const removeitem = cartItem.querySelector(".remove");
        removeitem.addEventListener("click", () => {
            cartItem.remove();
            showTotals();

        })

        const clearAll = document.querySelector(".clear-cart");
        clearAll.addEventListener("click", () => {
            cartItem.remove();
            showTotals();

        })

        showTotals();


    });
});



function showTotals() {
    const sum = [];
    var total = 0
    const itemPrice = document.querySelectorAll(".cart-pricee");
    itemPrice.forEach(function(item) {
        //  const itemss = item.textContent.slice(1).trim();
        const preTotal = parseFloat(item.textContent.slice(1).trim());
        const quantity = document.querySelector(".cart-input");
        const qty = parseFloat(quantity.value);
        console.log(qty);
        total = total + preTotal * qty

    });
    //const totalSum = sum.reduce(function(total, item) {
    //  total += item;
    //return total;
    //}, 0);
    //const finalSum = totalSum.toFixed(2);


    document.getElementById("total").textContent = total
        //   const euros = [5, 6, 7];
        // const sumtotal = euros.reduce((hh, gg) => total + amount);
        //console.log(sumtotal);

}
const autowrite = document.querySelector(".intro2");
const writeText = "Your number ONE bakery store, products made from the best ingredients, <br> We are reliable and will surpass your expectations.";

let indexWrite = 0;

function write() {
    autowrite.innerHTML = writeText.slice(0, indexWrite);
    indexWrite++;

}
setInterval(write, 50);