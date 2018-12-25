import React, { Component } from 'react'
import Todo from './Todo'


class TodoList extends Component {

    state = {
        filter: 'all'
    }

    onFilterChange = (event) => {
        this.setState({
            filter: event.target.value 
        }) 
    }

    render(){

        const { filter } = this.state
        let { entries } =  this.props

        // Jika filter nya adalah done, maka ambil todo yang punya property done === true
        // (lihat props yang dipass , hanya 1 element dengan property done === true)
        //
        // JIka filter nya adalah all, maka block if dibawah tidak akan dieksekusi sehingga a
        // kan value entries tetap samaa, yaitu 3 item

        if(filter === 'done') {
            entries = entries.filter(todo => todo.done) 
        }

        return(
            <div className="todo-list">
                <h3 className="todo-list__header">My Todo List</h3>
                <select onChange={this.onFilterChange} className="todo-list__filter">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                </select>
                {entries.map(todo => (
                    <Todo key={todo.id} text={todo.text} isDone={todo.done} />
                ))}
            </div>
        ) 
    
    }

}

export default TodoList
