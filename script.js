let headerEL = document.getElementById('header');
let apllayBtn = document.getElementById('apllay');
let form = document.getElementById('form');

/*filed controllers */
let nameEl = document.getElementById('name');
let emailEl = document.getElementById('email');
let phoneNumEl = document.getElementById('phoneNumber');
let coursesEl = document.getElementById('courses');


let lastKnownScrollPosition = 0;
let ticking = false;
let navPosition = 10;


function doSomething(scrollPos) {

    if (scrollPos === 0) {
        setNavPosition(10);
        return;
    }
    if (lastKnownScrollPosition !== scrollPos) {
        if (lastKnownScrollPosition < scrollPos) {
            navPosition -= navPosition > -100 ? 10 : 0;
            setNavPosition(navPosition);
        } else {
            navPosition += navPosition < 10 ? 5 : 0;
            setNavPosition(navPosition);
        }
        lastKnownScrollPosition = scrollPos
    }

}

function setNavPosition(num) {

    headerEL.style.top = `${num}px`;
}


function saveInfo(e) {
    e.preventDefault();

    console.log(nameEl.value);


    console.log(emailEl.value);
    console.log(phoneNumEl.value);
    console.log(coursesEl.value);

}

document.addEventListener('scroll', function(e) {

    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(window.scrollY);
            ticking = false;
        });

        ticking = true;
    }
});

form.addEventListener('submit', saveInfo); //saveInfo