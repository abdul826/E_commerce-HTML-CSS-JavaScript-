const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jorden",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


let wapper = document.querySelector('.sliderWrapper')
let menuItems = document.querySelectorAll('.menuItem');

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProducPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, ind) => {
    item.addEventListener('click',()=>{
        // Change the slide of the product
        wapper.style.transform = `translateX(${-100 * ind}vw)`;

        // change the product section
        choosenProduct = products[ind];

        // change the texts of the choosen product
        currentProductTitle.textContent = choosenProduct.title;
        currentProducPrice.textContent = `$ ` + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        // change the color and size of the product
        currentProductColors.forEach((color,i)=>{
            color.style.background = choosenProduct.colors[i].code;
        })
    })
});

// click on the color option to change the product color
currentProductColors.forEach((color,ind)=>{
   color.addEventListener('click', ()=>{
    currentProductImg.src = choosenProduct.colors[ind].img;
   })
});

// chnage the size
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

// Payment
let productButton = document.querySelector('.productButton');
let payment = document.querySelector('.payment');
let close = document.querySelector('.close');

productButton.addEventListener('click', ()=>{
    payment.style.display = 'block';
});

close.addEventListener('click', ()=>{
    payment.style.display = 'none';
});