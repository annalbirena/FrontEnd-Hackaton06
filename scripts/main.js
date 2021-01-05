//DROPDOWN
//Propiedades y Metodos del objeto
function Dropdown(options){
    const {
        elem
    } = options;
    const element = document.querySelector(elem);
    //Ejecutar evento
    this.addEvent(element);
}
//Evento
Dropdown.prototype.addEvent = function(element){
    element.onclick = () => {
        element.classList.toggle('open_dropdown');
    }
}

//Creo el objeto
const dropdownButton = new Dropdown({
    elem: '.js_dropdown'
})
const dropdownButton2 = new Dropdown({
    elem: '.js_dropdown2'
})
///////////////////////////////////////////////////////////////////
//ACCORDION
// function AccordionB(options){
//     this.element = document.querySelector(options.element);
//     this.accordionItems = this.element.querySelectorAll('.js_accordion_item h3');

//     this.toggleAccordion(options);
//     this.openAccordion();
// }

// AccordionB.prototype.openAccordion = function(){
//     const itemToggle = this.accordionItems.getAttribute('aria-expanded');
//     console.log(itemToggle);
// }

// //Evento
// AccordionB.prototype.toggleAccordion = function(options){
//     const array = this.accordionItems;
//     array.forEach(element => {
//         console.log('Hola');
//     });
//         console.log(array);
// }

// const accordion = new AccordionB({
//     element: '.js_accordion'
// })
///////////////////////////////////////////////////////////////////////
function AccordionB(options){
    this.element = document.querySelector(options.elem);
    this.accordionItems = this.element.querySelectorAll('h3');

    this.addEvent(options);
}

AccordionB.prototype.toggle = function(element){
const itemToggle = element.parentNode.getAttribute('area-expanded');

this.accordionItems.forEach(element => {
    element.parentNode.setAttribute('area-expanded', 'false');
});

if (itemToggle == 'false') {
    element.parentNode.setAttribute('area-expanded', 'true');
}
}

AccordionB.prototype.addEvent = function(options){
this.accordionItems.forEach(element => {
    element.onclick = () =>{
        this.toggle(element);
}
});
}

//Crear objeto
const accordion1 = new AccordionB({
 elem: '.js_accordion',
})

/////////////////////////////////////////////////////////////////////
//MODAL
function Modal(options){
    this.element = document.querySelector(options.element);
    this.elementClose = this.element.querySelector('.js_close');
    this.elementAccept = this.element.querySelector('.js_accept');
    this.elementCancel = this.element.querySelector('.js_cancel');

    this.registerEvens(options);
}

Modal.prototype.open = function(){
    this.element.classList.add('is-active');
}
Modal.prototype.close = function(){
    this.element.classList.remove('is-active');
}
Modal.prototype.registerEvens = function(options){
    //Se usa arrow function en este caso para que el this.close apunte 
    //a la funcion
    this.elementClose.onclick = () =>{
        this.close();
    }
    this.elementAccept.onclick = options.cbAccept;
    this.elementCancel.onclick = options.cbCancel;

}

//Crear objetos
const modal1 = new Modal({
    element: '.js_modal1',
    cbAccept: function(){
        console.log('aceptar');
        modal1.close();
    },
    cbCancel: function(){
        console.log('cancelar');
        modal1.close();
    }
})

const modal2 = new Modal({
    element: '.js_modal2',
    cbAccept: function(){
        console.log('aceptar');
        modal2.close();
    },
    cbCancel: function(){
        console.log('cancelar');
        modal2.close();
    }
})

const button1 = document.querySelector('.js_buttonModal1');
button1.onclick = function(){
    modal1.open();
}
const button2 = document.querySelector('.js_buttonModal2');
button2.onclick = function(){
    modal2.open();
}
