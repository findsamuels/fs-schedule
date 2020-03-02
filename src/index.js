import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faArrowLeft, faArrowRight, faTasks, faGrinBeam, faBars, faHome, faCheck, faUndo, faEdit } from "@fortawesome/free-solid-svg-icons";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducerTypes from './Store/reducers/index'
library.add(
  faTrash,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faTasks,
  faGrinBeam,
  faBars,
    faHome,
    faCheck,
    faUndo,
    faEdit
);
const firebaseConfig = {
    apiKey: "AIzaSyCkdQVoNu0YuD8Wltx349hFr_HabtqVjsk",
    authDomain: "fs-schedule.firebaseapp.com",
    databaseURL: "https://fs-schedule.firebaseio.com",
    projectId: "fs-schedule",
    storageBucket: "fs-schedule.appspot.com",
    messagingSenderId: "1036925973477",
    appId: "1:1036925973477:web:038d162299ad46881ab50c",
    measurementId: "G-SSQ7KTXM7K"
};
firebase.initializeApp(firebaseConfig);

const composeEnhansers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
    addTask: reducerTypes.addTaskReducer,
    tasks: reducerTypes.getTaskReducer,
    updateTask: reducerTypes.selectedTaskReducer,
    deleteTask: reducerTypes.deleteReducer,
    uiReducer: reducerTypes.uiReducer,
    authReducer: reducerTypes.authReducer,
    updateTaskReducer: reducerTypes.updateTaskReducer
})



const store = createStore(rootReducer, composeEnhansers(applyMiddleware(thunk)));



const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
