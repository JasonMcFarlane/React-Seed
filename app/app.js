import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Welcome from './components/Welcome.jsx';

const appData = {
    title: 'React Development Environment'
}

ReactDOM.render( 
    <Welcome data={appData} />, document.getElementById('container')
);