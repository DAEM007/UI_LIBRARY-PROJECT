import './styles/dropdown.css';

class Dropdown {
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init(){
        // TOGGLE CLASS OF ACTIVE ON BOTH TRIGGER AND CONTENT
        this.trigger.addEventListener('click', () => {
            // note that that dot in front of active is not meant to be there...
            this.trigger.classList.toggle('active'); 
            this.content.classList.toggle('active');
        });
    }
}

export { Dropdown as default };

