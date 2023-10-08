
// document.addEventListener('DOMContentLoaded', function () {
// function addTask() {
//     console.log('button click')
//     const inpField = document.querySelector('.input_field')
//     const inpText = inpField.value.trim()
//     // Checking Data is entered or not
//     if (inpText === "") {
//         console.log('no data found');
//     }else{
//         console.log(`data found -- ${inpText}`)
//     }

//     // Adding tasks on click event
//     const taskData = document.querySelector('.task_data')
//     const addedLi = document.createElement('li')
//     addedLi.innerHTML = `
//     ${inpText} <button onclick="editData(this)">Edit</button>
//     <button onclick="eraseData(this)">Delete</button>
//     `
//     taskData.appendChild(addedLi)


//     // Adding data to local storage
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || []
//     tasks.push(inpText)
//     localStorage.setItem('tasks', JSON.stringify(tasks))
//     inpField.value = ""
// }
// const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// const taskData = document.querySelector('.task_data')
// tasks.forEach((task) => {
//     const addedLi = document.createElement('li')
//     addedLi.innerHTML = `
//     ${task} <button onclick="editData(this)">Edit</button>
//     <button onclick="eraseData(this)">Delete</button>
//     `
//     taskData.appendChild(addedLi)
// });
// })


// // Edit Task onclick of edit button
// function editData(button) {

//     console.log('edit clicked')

//     const newText = prompt('Edit task : ', button.parentElement.firstChild.textContent)
//     if (newText !== null) {
//         button.parentElement.firstChild.textContent = newText
//     }

//     const tasks = JSON.parse(localStorage.getItem('tasks'));
//     const taskIndex = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
//     tasks[taskIndex] = newText;
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }

// // Delete Task onclick of delete button
// function eraseData(button) {
//     if (confirm('Sure! delete this task?')) {
//         console.log('delete task')
//         const tasks = JSON.parse(localStorage.getItem('tasks'))
//         const taskIndex = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
//         tasks.splice(taskIndex, 1)
//         localStorage.setItem('tasks', JSON.stringify(tasks))
//         button.parentElement.remove()
//     }
// }