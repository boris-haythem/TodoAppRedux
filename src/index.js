import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, } from 'redux'
import { Provider } from "react-redux"


const init = [{ task: "ITEM1", isDone: false, id: 1 }, { task: "ITEM2", isDone: false, id: 2 }]
function tasks(state = init, action) {
    switch (action.type) {
        case "ADD":
            const newStateAdd = state
            let maxId = Math.max.apply(Math, newStateAdd.map(function(o) { return o.id; }))
            return [...newStateAdd, { task: action.text, isDone: false, id: ++maxId}]
        case "EDIT":
            console.log(action.ptask);
            const idEdit = action.payload
            const newStateEdit = state
             
            newStateEdit[idEdit.id].task = (idEdit.aaa==="")?newStateEdit[idEdit.id].task: idEdit.aaa
            return [...newStateEdit]
        case "DELETE":
            const idDelete = action.payload
            const newState = state
            newState.splice(idDelete, 1)
            return [...newState]
        case "COMPLETE":
            const idComplete = action.payload
            const newStateComp = state
            newStateComp[idComplete].isDone = !newStateComp[idComplete].isDone
            return [...newStateComp]
        default:
            return state
    }
}
const store = createStore(tasks)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister()