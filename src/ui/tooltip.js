import './styles/tooltip.css'

class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){ //initialize the component 
        const tip = document.createElement('div'); // the little bubble for the tooltip
        tip.classList.add('tip');
        tip.textContent = this.message; 
        this.element.appendChild(tip);
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        }); //fires once when you enter it while hovering over it
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        })
    }
}

//element = tooltip span tag from index.js

export { Tooltip as default }