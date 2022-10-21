//ALL IMPORTS
import Tooltip from './daem-ui/tooltip';
import Dropdown from './daem-ui/dropdown';
import Tabs from './daem-ui/tabs';
import Snackbar from './daem-ui/snackbar';

// QUERIES
const Span = document.querySelector('.tooltip');
const dropDowns = document.querySelectorAll('.drop-down');

// Create an instance of class Tooltip and initialize
const toolTip = new Tooltip(Span);
toolTip.init();

// Create an instance of class Dropdown and initialize
dropDowns.forEach(dropDown => {
    const instance = new Dropdown(dropDown);
    instance.init();
});

// Create an instance of class Tab and initialize
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// Create an instance of class Snackbar and initialize
const snackbar = new Snackbar();
snackbar.init();
// still on the snackbar...trying to get a reference to the button on the html
const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
    snackbar.show('Hey! you just clicked me :)');
});
