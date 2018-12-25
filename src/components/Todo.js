import React from 'react'

const Todo = ({text, isDone}) => (
    <div className="todo" style={{textDecoration : isDone ? 'line-through' : 'none'}}>
        {text}
    </div>
)

Todo.displayName = 'Todo'

export default Todo
