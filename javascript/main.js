const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggle.addEventListener('click', () => {
    navigation.classList.toggle('show');
});

const w1 = document.querySelector('.w1');
const w2 = document.querySelector('.w2');
const w3 = document.querySelector('.w3');
const text1 = "Hello.";
const text2 = "Wellcome to my website";
const text3 = "I Wan't To Become A Web Development.";
let index = 0;
let index2 = 0;
let index3 = 0;

function autoText() {
    w1.textContent = text1.slice(0, index);
    index++;
    if (index > text1.length) {
        index = 0;
    }
}
setInterval(autoText, 200);


function autoText2() {
    w2.textContent = text2.slice(0, index2);
    index2++;
    if (index2 > text2.length) {
        index2 = 0;
    }
}
setInterval(autoText2, 200);

function autoText3() {
    w3.textContent = text3.slice(0, index3);
    index3++;
    if (index3 > text3.length) {
        index3 = 0;
    }
}
setInterval(autoText3, 200);


const myn = document.querySelector(".fullname");
var myname = "Nguyen huu phuc.";
var final = 0;

function textMyname() {
    myn.textContent = myname.slice(0, final);
    final++;
    if (final > myname.length) {
        final = 0;
    }
}
setInterval(textMyname, 200);
//scroll to top

window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.ScrolltoTop');
    scroll.classList.toggle('active', window.scrollY > 500);
})
const active = document.querySelector('.active');

function letScroll() {
    window.scrollTo({
        top: 0
    })
}

///////button social network////////////
const one = document.querySelector('.one');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');

one.addEventListener('click', () => {
    first.classList.toggle("first1");
})

first.addEventListener('click', () => {
    second.classList.toggle("second1");
})

second.addEventListener('click', () => {
    third.classList.toggle("third1");
})

third.addEventListener('click', () => {
    fourth.classList.toggle("fourth1");
})

fourth.addEventListener('click', () => {
    fifth.classList.toggle("fifth1");
})


///***instagram */

const one2 = document.querySelector('.one2');
const first2 = document.querySelector('.first2');
const second2 = document.querySelector('.second2');
const third2 = document.querySelector('.third2');
const fourth2 = document.querySelector('.fourth2');
const fifth2 = document.querySelector('.fifth2');

one2.addEventListener('click', () => {
    first2.classList.toggle("first22");
})

first2.addEventListener('click', () => {
    second2.classList.toggle("second22");
})

second2.addEventListener('click', () => {
    third2.classList.toggle("third22");
})

third2.addEventListener('click', () => {
    fourth2.classList.toggle("fourth22");
})

fourth2.addEventListener('click', () => {
        fifth2.classList.toggle("fifth22");
    })
    ///***twitter */

const one3 = document.querySelector('.one3');
const first3 = document.querySelector('.first3');
const second3 = document.querySelector('.second3');
const third3 = document.querySelector('.third3');
const fourth3 = document.querySelector('.fourth3');
const fifth3 = document.querySelector('.fifth3');

one3.addEventListener('click', () => {
    first3.classList.toggle("first33");
})

first3.addEventListener('click', () => {
    second3.classList.toggle("second33");
})

second3.addEventListener('click', () => {
    third3.classList.toggle("third33");
})

third3.addEventListener('click', () => {
    fourth3.classList.toggle("fourth33");
})

fourth3.addEventListener('click', () => {
    fifth3.classList.toggle("fifth33");
})

//random a text for password

let genera = document.querySelector('.btn-genera');

const copy = document.querySelector('.copy');
const copied = document.querySelector('.copied');

genera.addEventListener('click', () => {
    rand();
})


function rand() {
    var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()/";

    var passwordLength = 16;
    var password = "";
    for (i = 0; i < passwordLength; i++) {
        randomPass = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPass, randomPass + 1);
    }
    console.log(password);
    document.getElementById('result').value = password;
    copied.classList.remove("active");
    copy.classList.remove("hidden");
}
copy.addEventListener('click', () => {
    copyText();
})



function copyText() {
    var copyT = document.getElementById('result');

    copyT.select();
    copyT.setSelectionRange(0, 9999999);
    document.execCommand('copy');
    copied.classList.add("active");
    copy.classList.add("hidden");
    document.getElementById('audio-play').play();

}



//
const toggleModal = document.getElementById("toggle-modl");

toggleModal.addEventListener('click', () => {
    model.classList.remove("active-model");
})