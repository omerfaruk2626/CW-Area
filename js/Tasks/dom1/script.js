const allElements = document.querySelectorAll('*');
allElements.forEach(element => {
    element.style.margin = '0';
    element.style.padding = '0';
    element.style.boxSizing = 'border-box';
});

//! -------------------------*HEADER*---------------------------/

const h1 = document.getElementById('title');
h1.textContent = 'Javascript Dom Assignment 1';
// console.log(h1)

const header = document.querySelector('.header');
header.style.color = 'white';
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.justifyContent = 'center';
header.style.padding = '10px';
header.style.alignItems = 'center';
header.style.backgroundColor = 'rgb(255,69,0';
header.style.fontSize = '16px';

//? -------------------------*NAVBAR*---------------------------/

const navDiv = document.querySelector('.nav-item');
navDiv.style.display = 'flex';

const navDivLi = document.querySelector('.nav-item li');
navDivLi.style.marginRight = '10px';

const navItemList = document.querySelectorAll('.nav-item li');

navItemList.forEach(li => {
    li.style.listStyle = 'none';
});



//! ---------------------------*MAİN*-----------------------------/


const main = document.querySelector('main');
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.justifyContent = 'space-around';
main.style.height = '80vh';

//? -------------------------*SECTION*---------------------------/

const section = document.querySelector('section');
section.style.marginBottom = '200px';

const usarname = document.getElementById('usarname');
usarname.style.marginBottom = '10px';
usarname.value = 'omer';
const usernameInput = document.getElementById('usarname');
usernameInput.readOnly = true;

const password = document.getElementById('password');
password.style.marginBottom = '10px';
password.value = 'asdasd';
const passwordInput = document.getElementById('password');
passwordInput.readOnly = true;


const login = document.getElementById('login');
login.style.padding = '10px';
login.textContent = 'Giriş Yap';
login.style.backgroundColor = 'rgb(255,169,20';
login.style.borderRadius = '5px';
login.style.cursor = 'pointer';
login.style.borderStyle = 'none';


login.addEventListener('mouseover', function() {
    login.style.backgroundColor = 'rgb(255, 69, 0)';
});


login.addEventListener('mouseout', function() {
    login.style.backgroundColor = 'rgb(255, 169, 20)';
});


//? -------------------------*PROJECTS*---------------------------/

const projectsUl = document.getElementById('projectsUl');
const projectTitles = ['Hello World!', 'Guess Number', 'Checkout Page', 'Gelir-Gider Projesi', 'Api Projects'];

projectsUl.textContent = 'Js Dom Projects';
projectsUl.style.fontSize = '24px';
projectsUl.style.fontWeight = 'bold';

projectTitles.forEach(title => {
    const newLi = document.createElement('li');
    newLi.textContent = title;
    projectsUl.appendChild(newLi);
    newLi.style.fontWeight = 'normal';
    newLi.style.fontSize = '18px';
});

