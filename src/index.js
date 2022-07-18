import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from'react-router-dom';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
     <App/>
     </BrowserRouter>
     );
 
    //  If i dont overlap my App component in BrowseRouter then I cant see anything on localhost/