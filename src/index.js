// import '../src/daem-ui/styles/tooltip.css';
import Tooltip from './daem-ui/tooltip';
import Dropdown from './daem-ui/dropdown';

// QUERIES
const Span = document.querySelector('.tooltip');
const dropDowns = document.querySelectorAll('.drop-down');

// CREATE A TOOLTIP AND INITIALIZE
const toolTip = new Tooltip(Span);
toolTip.init();

// CREATE A DROP-DOWN AND INITIALIZE
dropDowns.forEach(dropDown => {
    const instance = new Dropdown(dropDown);
    instance.init();
});

