//эта функция при наведении мышкой на сушу увеличивают коробку с сушей
function menuHover(element) {
    element.style.transform = 'scale(1.1)';
}
//а если убрать наведение на сушину то коробка вернется в стандартный размер
function menuOut(element) {
    element.style.transform = 'scale(1)';
}
//переворачивает коробку суши на обратную сторону
function flipElement(button) {
    var flipContainer = button.parentNode.parentNode.parentNode;
    flipContainer.classList.toggle('flip');
}
//открывает или закрывает вкладку суши в меню
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "block";
    }
    else if(menu.style.display === "none")
    {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
}
//открывает или закрывает вкладку сеты в меню
function toggleMenuu() {
    var menu = document.getElementById("menu1");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function scrollToBlock() {
    var block = document.getElementById("targetBlock");
    block.scrollIntoView({ behavior: "smooth" });
}





//работа со слайдами
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    let slideshowInterval;

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
        resetInterval();
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
        resetInterval();
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function resetInterval() {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);
    }

    resetInterval();

    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", function() {
        plusSlides(-1);
    });

    nextButton.addEventListener("click", function() {
        plusSlides(1);
    });
});


