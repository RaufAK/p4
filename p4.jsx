import React from 'react';
import Example from "./Components/example/Example";
import states from "./Components/states/States";

class p4 extends React.Component{
const mainButton = document.createElement('button');
mainButton.textContent = 'Example View';
document.body.appendChild(mainButton);

mainButton.addEventListener('click', () => {
    if(mainButton.textContent == "State View"){
    window.location.src = /example/Example.jsx;
    mainButton.textContent = "Example View";
}else{
    window.location.src = /states/States.jsx;
    mainButton.textContent = "States View";

}
});





//
//
}

// export default p4;
