/*--- Start countDown Script ---*/	

const countDown = ( date , id) => 
{
    let upperDate = new Date(date).getTime();

    let x = setInterval(function() 
    {
        let currentDate = new Date().getTime(); // Get today's date and time

        // Find the distance between upper date and current date
        let distance    = upperDate - currentDate;

        // Time calculations for days, hours, minutes and seconds
        let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        let element = document.getElementById(id);

        element.querySelector('.secound').innerHTML = seconds;
        element.querySelector('.minut').innerHTML   = minutes;
        element.querySelector('.hour').innerHTML    = hours;
        element.querySelector('.day').innerHTML     = days;

        // If the count down is finished
        if (distance < 0) 
        {
            clearInterval(x);

            element.querySelector('.secound').style.display = "none";
            element.querySelector('.minut').style.display   = "none";
            element.querySelector('.hour').style.display    = "none";
            element.querySelector('.day').style.display     = "none";
            element.querySelector('.expired').innerHTML     = "انتهى العرض ...";
        }


    }, 1000);
}

const offerDate = () => {
    countDown("Jan 29, 2022 21:47:55", "product-1");
    countDown("Jan 20, 2022 21:47:55", "product-2");
}

// window.addEventListener("load", offerDate);

/*--- End countDown Script ---*/


/*--- Start srollY window Script ---*/ 
let   scrollpos     = window.scrollY;
const header        = document.querySelector(".top-header");
const header_height = header.offsetHeight;

const add_class_on_scroll    = () => header.classList.add("top-header--shadow");
const remove_class_on_scroll = () => header.classList.remove("top-header--shadow");

window.addEventListener('scroll', function() 
{ 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) 
    { 
        add_class_on_scroll();
    }
    else 
    { 
        remove_class_on_scroll();
    }
})

/*--- End srollY window Script ---*/


/*--- Start searchBook Script ---*/

const searchBook = () => 
{
    let inputValue     = document.getElementById('search').value.toUpperCase();
    let booksContainer = document.getElementById('books');
    let bookCards      = booksContainer.getElementsByClassName('card');
    let book;

    for (let i = 0; i<bookCards.length; i++ )
    {
        book = bookCards[i].querySelector('.book-title');

        if (book.innerText.toUpperCase().indexOf(inputValue) > -1)
        {
            bookCards[i].style.display = "";
        }
        else
        {
            bookCards[i].style.display = "none";
        }
    }


}

/*--- End searchBook Script ---*/


/*--- Start addToCart Script ---*/

const cartCounter   = document.getElementById('cart');
const carts         = document.querySelectorAll('.js-cart');

let storeCart = localStorage.getItem('cart_counter');
let counter   = 0;

const addToCart = () =>
{
    storeCart = storeCart === null ? 0 : storeCart;
    counter   = storeCart;

    counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";

    cartCounter.innerText = counter > 9 ? "9+" : counter;

    carts.forEach (element => 
        {
            element.addEventListener('click' , (e) => 
            {
                counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";
                counter++;
                cartCounter.innerText = counter > 9 ? "9+" : counter;
                localStorage.setItem('cart_counter', counter)
            })
    });
};

window.addEventListener("load", addToCart);

/*--- End addToCart Script ---*/















// Menu Script
function toggleMobileMenu(menu) 
{
    menu.classList.toggle('open');
}

// Login Model Script
const login           = document.getElementById("login");
const register        = document.getElementById("register");
const close__login    = document.getElementById("close__login");
const close__register = document.getElementById("close__register");

const model__login    = document.getElementById("model__login");
const model__register = document.getElementById("model__register");

login.addEventListener('click' , ()=>{
    model__login.style.display = "block";
});

register.addEventListener('click' , ()=>{
    model__login.style.display    = "none";
    model__register.style.display = "block";
});

close__register.addEventListener('click' , ()=>{
    model__register.style.display = "none";
})

close__login.addEventListener('click' , ()=>{
    model__login.style.display    = "none";
})

// Banner Script
var slideIndex = 1;
banner(slideIndex);

function plus(n) 
{
    banner(slideIndex += n);
}

function current(n) 
{
    banner(slideIndex = n);
}

function banner(n) 
{
    var i;
    
    var slides = document.getElementsByClassName("banner__item");
    var dots = document.getElementsByClassName("unit__item");

    if (n > slides.length) 
    {
        slideIndex = 1;
    } 

    if (n < 1) 
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


// image slide script
const imgMain = document.getElementById("img-main");
const imges   = document.getElementsByClassName("img");

for (let i=0 ; i<imges.length ; i++)
{
    imges[i].addEventListener('click' , (e)=>
    {
        e.target;
        imgMain.setAttribute('src' , e.target.src);
    })

    if (imgMain.src === imges[i].src)
    {
        imges[i].classList.add('img__item--center')
    }
}

const imgModel = document.getElementById("model__img");
const imgSlide = document.getElementById("img-slide");

const prevImg  = document.getElementById("prev__img");
const nextImg  = document.getElementById("next__img");

imgMain.addEventListener('click' , ()=>{
    imgModel.style.display = "block";
});

prevImg.addEventListener('click' , ()=>
{
    if (imgSlide.style.justifyContent === "center")
    {
        imgSlide.style.justifyContent = "end";
    }
    else if (imgSlide.style.justifyContent === "end")
    {
        imgSlide.style.justifyContent = "start";
    }
    else
    {
        imgSlide.style.justifyContent = "center";
    }
    
})

nextImg.addEventListener('click' , ()=>
{
    if (imgSlide.style.justifyContent === "end")
    {
        imgSlide.style.justifyContent = "start";
    }
    else if (imgSlide.style.justifyContent === "start")
    {
        imgSlide.style.justifyContent = "center";
    }
    else
    {
        imgSlide.style.justifyContent = "end";
    }
    
})

const closeImg = document.getElementById("close__img");

closeImg.addEventListener('click' , ()=>{
    imgModel.style.display    = "none";
})
