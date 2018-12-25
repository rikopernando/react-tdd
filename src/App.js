import React, { Component } from 'react';
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {

    state = {
        todos : [
            { id: 1, text: 'Hello', done: false},
            { id: 2, text: 'There', done: true},
            { id: 3, text: "It's cool, isn't it?", done: false},
        ] 
    }

    render(){

        const { todos } = this.state

        return (
            <div className="App">
                <TodoList entries={todos} />
            </div>
        ) 
    }
}

export default App;
