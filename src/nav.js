(function (){
const menu = document.querySelector('.barnav__menu');
const close = document.querySelector('.barnav__close');
const nav = document.querySelector('.barnav');
const inicio = document.querySelector('.inicio');
const tools = document.querySelector('.tools');
const proyects = document.querySelector('.proyects');
const contact = document.querySelector('.contact');
const inicio1 = document.querySelector('.inicio1');
const tools1 = document.querySelector('.tools1');
const proyects1 = document.querySelector('.proyects1');
const contact1 = document.querySelector('.contact1');
const inicio2 = document.querySelector('.inicio2');
const tools2 = document.querySelector('.tools2');
const proyects2 = document.querySelector('.proyects2');
const contact2 = document.querySelector('.contact2');

function bajar (px) { window.scrollTo({behavior:"smooth", top:px});}
function toggleShow () {nav.classList.toggle('show');}
    
inicio.addEventListener('click', () => {bajar(0)} );
tools.addEventListener('click', () => {bajar(1545)} );
proyects.addEventListener('click', () => {bajar(2444)} );
contact.addEventListener('click', () => {bajar(3711)} );

inicio1.addEventListener('click', () => {bajar(0), toggleShow();});
tools1.addEventListener('click', () => {bajar(1545), toggleShow();});
proyects1.addEventListener('click', () => {bajar(2444), toggleShow();});
contact1.addEventListener('click', () => {bajar(3711), toggleShow();});

inicio2.addEventListener('click', () => {bajar(0)} );
tools2.addEventListener('click', () => {bajar(1545)} );
proyects2.addEventListener('click', () => {bajar(2444)} );
contact2.addEventListener('click', () => {bajar(3711)});


menu.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    });

close.addEventListener('click', ()=>{
    toggleShow();
    });
})();

