import React from 'react';
import ReactDOM from 'react-dom';
import Body from './component/Body';
import 'babel-polyfill'; 
import Header from './component/Header';


function App(){

    return (<div className="container">
                        <Header/>
                         <Body/>

    </div>)

}

ReactDOM.render(<App/>,document.getElementById('app'));
