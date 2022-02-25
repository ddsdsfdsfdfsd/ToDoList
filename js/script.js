let todos = []

const createTask = (e) => {
    e.preventDefault()
    let message = document.getElementById('text')
    let desc = document.getElementById('desc')
    console.log(message.value)
    console.log(desc.value)

    if (message.value == '') {
        alert("The name can't be empty!")
    } else if (desc.value == '') {
        alert("The description can't be empty!")
    } else if (message.value.trim() == '') {
        alert("The name can't consist of spaces!")
    } else if (desc.value.trim() == '') {
        alert("The description can't consist of spaces!")
    } else if (message.value.length < 3) {
        alert("The name must be longer than 3 symbols!")
    } else if (desc.value.length < 3) {
        alert("The description must be longer than 3 symbols!")
    } else if (message.value.length > 25) {
        alert("The name is too long!")
    } else {
        let todo = {
            id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
            message: message.value,
            desc: desc.value,
            status: false,
            date: new Date()
        }
        todos.push(todo)
        console.log(todos)
        message.value = ''
        desc.value = ''
        renderTodos()
    }
}

const renderTodos = () => {
    const output = document.getElementById('output')
    output.innerHTML = ''

    todos.map(todo => {
        let row = document.querySelector('.row')
        let block = document.createElement('div')
        block.className = 'block'
        // block.style.background = todo.status === true ? 'green' : 'coral'


        let mess = document.createElement('h2')
        let description = document.createElement('h4')
        let date = document.createElement('p')
        let doneIsComplete = document.createElement('p')

        let buttons = document.createElement('div')
        buttons.className = 'buttons'
        let done = document.createElement('button')
        let editName = document.createElement('button')
        let editDescr = document.createElement('button')

        let del = document.createElement('div')
        del.className = 'del'
        let leftx = document.createElement('span')
        let rightx = document.createElement('span')

                
        



        done.style.display = todo.status ? 'none' : 'inline'

        if (todo.status == true) {
            doneIsComplete.textContent = `Done is complete!`
        } else {
            doneIsComplete.style.display = 'none'
        }


        mess.textContent = `Name: ${todo.message}`
        description.textContent = `Description: ${todo.desc}`

        let current_date = todo.date
        date.textContent = `
        Todo was created ${current_date.getDate()}.${current_date.getMonth() + 1}.${current_date.getFullYear()} at ${current_date.getHours()}:${current_date.getMinutes()} 
        `
        date.style.fontSize = '14px'



        done.textContent = 'Done'
        editName.textContent = 'Edit name'
        editDescr.textContent = 'Edit description'

        done.addEventListener('click', () => {
            doneTodo(todo.id)
            console.log(todo.id)
        })
        del.addEventListener('click', () => {
            deleteTodo(todo.id)
        })

        editName.addEventListener('click', () => {
            editNameTodo(todo.id)
        })

        editDescr.addEventListener('click', () => {
            descrTodo(todo.id)
        })

        del.append(leftx, rightx)
        buttons.append(done, editName, editDescr)
        block.append(mess, del, description, date, doneIsComplete, buttons)
        output.append(block)
        row.append(output)
    })
}

const doneTodo = (id) => {
    todos.map(el => {
        console.log(el)
        if (id == el.id) {
            el.status = true
            renderTodos()
        }
    })
}

const deleteTodo = (id) => {
    todos.map(todo => {
        if (id == todo.id && todo.status === true) {
            todos = todos.filter(el => el.id != id)
            renderTodos()
        } else if (id == todo.id && todo.status != true) {
            alert("You didn't finish todo")
            console.log(todos)
        }
    })


}


const editNameTodo = (id) => {
    todos.map(el => {
        console.log(el)
        if (id == el.id) {
            let newName = prompt('Enter new name')
            if (newName == '' || newName.trim() == '' || newName == null || newName.length < 3) {
                el.message
            } else if (newName.length <= 3) {
                alert('Minimum length is 3 symbols!')
            } else {
                el.message = ` ${newName}`
                renderTodos()
            }

        }
    })
}

const descrTodo = (id) => {
    todos.map(el => {
        console.log(el)
        if (id == el.id) {
            let newDesc = prompt("Enter new name")
            if (newDesc == '' || newDesc.trim() == '' || newDesc == null || newDesc.length < 3) {
                el.desc
            } else if (newDesc.length <= 3) {
                alert('Minimum length is 3 symbols!')
            } else {
                el.desc = ` ${newDesc}`
                renderTodos()
            }
        }
    })
}





// ===new Date===
// console.log(new Date())
// console.log(new Date().getDate())
// console.log(new Date().getMonth()+1)
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())
