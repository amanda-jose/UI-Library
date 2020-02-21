import Tooltip from './ui/tooltip'
import Dropdown from './ui/dropdown'
import Tabs from './ui/tabs'
import Snackbar from './ui/snackbar'

// this file used for creating instances 

// create tooltip 
const tooltip = new Tooltip(document.querySelector('.tooltip')) //instance of the Tooltip class 
tooltip.init()

// create dropdowns 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown)
    instance.init()
}) // use foreach because querySelectorAll returns a node list 

//create tabs 
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init()

//create snackbar
const snackbar = new Snackbar()
snackbar.init()

const button = document.querySelector('button')
button.addEventListener('click', () => {
    snackbar.show('you clicked me! :)')
})