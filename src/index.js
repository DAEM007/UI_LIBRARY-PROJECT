// import '../src/daem-ui/styles/tooltip.css';

import Tooltip from './daem-ui/tooltip';

// QUERIES
const elementSpan = document.querySelector('.tooltip');

// CREATE A TOOLTIP
const toolTip = new Tooltip(elementSpan);

toolTip.init();