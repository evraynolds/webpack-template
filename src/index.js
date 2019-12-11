import _ from 'lodash';
import './style.css';
// import Icon from './image.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['I can', 'see you'], ' ');
    element.classList.add("hello");    

    //Add the image to our existing div
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
};

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

console.log("this is module", module.hot);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    });
};