//ALL IMPORTS
//  import '../src/daem-ui/styles/tooltip.css';
import Tooltip from './daem-ui/tooltip';
import Dropdown from './daem-ui/dropdown';
import Tabs from './daem-ui/tabs';

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

// Create an instance of class Tab initialize
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
