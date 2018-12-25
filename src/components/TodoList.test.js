import React from 'react'
import { shallow } from 'enzyme'
import TodoList from './TodoList'


// 1. Menampilkan Header / judul dengan benar, yaitu MyTodo List
it('shows correct header', () => {
    const subject = shallow(<TodoList entries={[]} />)

    expect(subject.find('.todo-list__header').text()).toBe('My Todo List')
    
})

// 2. Bisa filter todo berdasarkan kategori: all(semua todo) dan done (todo yang sudah selesai)
it('should be to filter todos', () => {
    const todoEntries = [
        { id: 1, text: 'Hello', done: false},
        { id: 2, text: 'There', done: true},
        { id: 3, text: "It's cool, isn't it?", done: false},
    ]

    const subject = shallow(<TodoList entries={todoEntries}/>)

    // Untuk memfilter todo yang tampil, Kita akan menggunakan element select, 
    // yang option nya adalah : all dan done
    //
    // 1. Kita harus bisa melihat semua todo list, ketika filter === all
    // filter akan disimpan distate dengan key: filter
    // Setiap item todo yang ditampilkan, mempunyai attribute class Todo'
    //

    expect(subject.state('filter')).toBe('all')
    // karena jumlah todo ada 3, maka ketiga nya harus tampil
    expect(subject.find('Todo').length).toBe(3)

    //2. ketika filter === done, todo yang tampil harus hanya yang done saja
    // yaitu 1 todo saja
    //
    // stub dom event, set value dari filter menjadi done
    let eventSub = {
        target : {
            value: 'done'
        }
    }


    //simulasi event change 
    subject.find('.todo-list__filter').simulate('change', eventSub)

    // assert todo yang tampil harus 1
    expect(subject.find('Todo').length).toBe(1)

    // ketika value dari select di set menjadi all lagi, maka semua todo harus tampil 

    eventSub = {
        target: {
            value: 'all'
        }
    }

    subject.find('.todo-list__filter').simulate('change',eventSub)

    expect(subject.find('Todo').length).toBe(3)

    // 4. cek salah satu todo
    // at(2) maksudnya element ke 3, since it's started with 0, jadi 3-1 === 2
    // kemudian .text() ambil textnya

    expect(subject.find('Todo').at(2).shallow().text()).toBe("It's cool, isn't it?")
})
