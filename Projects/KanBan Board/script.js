let tasksData = {}

const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const columns = [todo, progress, done];
let dragElement = null


function addTask(title, desc, column) {
    const div = document.createElement('div')

    div.classList.add('task')
    div.setAttribute('draggable', true)

    div.innerHTML = `
            <h2>${title}</h2>
            <p>${desc}</p>
            <button>Delete</button>
            `

    column.appendChild(div)

    div.addEventListener('drag', (e) => {
        dragElement = div;
    })

    const deleteBtn = div.querySelector('button');
    deleteBtn.addEventListener('click', () => {
        div.remove();
        updateTaskCount();
    })

    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll('.task');
        const count = col.querySelector('.right');

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector('h2').innerText,
                desc: t.querySelector('p').innerText


            }
        })


        //local storage in string
        localStorage.setItem('tasks', JSON.stringify(tasksData));
        count.innerText = tasks.length;


    })

}

if (localStorage.getItem('tasks')) {
    //convert the string to JSON Format
    const data = JSON.parse(localStorage.getItem('tasks'))

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column)
        })

    }
    updateTaskCount();
}

const tasks = document.querySelectorAll('.task');


tasks.forEach(task => {
    task.addEventListener('drag', (e) => {
        //console.log('dragging', e);
        dragElement = task;

    })
})



function addDragEventsOnColumn(column) {
    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
        column.classList.add('hover-over');
    })

    column.addEventListener('dragleave', (e) => {
        e.preventDefault();
        column.classList.remove('hover-over')
    })

    //to show the element into other element
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    column.addEventListener('drop', (e) => {
        e.preventDefault();



        columns.forEach(col => {
            const tasks = col.querySelectorAll('.task');
            const count = col.querySelector('.right');

            tasksData[col.id] = Array.from(tasks).map(t => {
                return {
                    title: t.querySelector('h2').innerText,
                    desc: t.querySelector('p').innerText


                }
            })

            //local storage in string
            localStorage.setItem('tasks', JSON.stringify(tasksData));
            count.innerText = tasks.length;


        })

        column.appendChild(dragElement);
        column.classList.remove('hover-over')

        updateTaskCount();






    })



}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// here we are using modal logic to show our card
const toggleModalButton = document.querySelector('#toggle-modal')
const modalBg = document.querySelector('.modal .bg')
const modal = document.querySelector('.modal')
const addTaskButton = document.querySelector('#add-new-task')



toggleModalButton.addEventListener('click', () => {
    modal.classList.toggle('active')
})


modalBg.addEventListener('click', () => {
    modal.classList.remove('active')
})


addTaskButton.addEventListener('click', () => {
    const taskTitle = document.querySelector('#task-title-input').value
    const desTitle = document.querySelector('#task-description-input').value

    addTask(taskTitle, desTitle, todo)
    updateTaskCount

    modal.classList.remove('active')

    document.querySelector('#task-title-input').value = '';
    document.querySelector('#task-description-input').value = '';
})

