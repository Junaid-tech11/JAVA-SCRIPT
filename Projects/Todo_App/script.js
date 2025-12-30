let todoList = JSON.parse(localStorage.getItem('myTodos')) || []

let struct = {
  id: '1432',
  text: 'Buy Milk',
  isCompleted: false
}

let input = document.getElementById('user-text')
let btn = document.getElementById('generic')
let lst = document.getElementById('data')

function addTodo () {
  const text = input.value
  if (text != '') {
    const newTodo = {
      id: Date.now(),
      text: text,
      isCompleted: false
    }
    todoList.push(newTodo)

    renderTodos()

    input.value = ''
  }
}

btn.addEventListener('click', addTodo)

function renderTodos () {
  lst.innerHTML = ''
  todoList.forEach(task => {
    const item = document.createElement('li')
    item.classList.add('todo-item')

    const textSpan = document.createElement('span')
    textSpan.innerText = task.text

    if (task.isCompleted) {
      textSpan.classList.add('completed')
    }

    const AddBtn = document.createElement('button')
    AddBtn.innerText = 'Done'
    AddBtn.classList.add('done-btn')

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.classList.add('delete-btn')

    AddBtn.addEventListener('click', () => {
      task.isCompleted = !task.isCompleted
      renderTodos()
    })

    deleteBtn.addEventListener('click', () => {
      todoList = todoList.filter(temp => temp.id != task.id)
      renderTodos()
    })

    item.appendChild(textSpan)
    item.appendChild(AddBtn)
    item.appendChild(deleteBtn)

    lst.appendChild(item)
  })

  localStorage.setItem('myTodos', JSON.stringify(todoList))
}

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTodo()
  }
})

renderTodos()
