const dateFormat = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const currentDate = new Date().toLocaleDateString('en-US', dateFormat);
document.getElementById('current-date').innerText = currentDate;

document.getElementById('task-1-btn').addEventListener('click', function () {
    this.disabled = true;

    this.classList.add("bg-gray-400", "cursor-not-allowed");
    this.classList.remove("bg-blue-500");
    alert('Board Successfully Updated');
    const taskAssigned = document.getElementById('task-assign-number').innerText;
    if (taskAssigned === "1") {
        alert('Congrats!! You have completed all the current task');
    }
    const mainTaskAssigned = document.getElementById('main-task-num').innerText;
    const convTaskAssigned = parseInt(taskAssigned);
    const convMainTaskAssigned = parseInt(mainTaskAssigned);
    const sum = convTaskAssigned - 1;
    const mainSum = convMainTaskAssigned + 1;
    document.getElementById('task-assign-number').innerText = sum;
    document.getElementById('main-task-num').innerText = mainSum;
    const container = document.getElementById('activity-log');
    const p = document.createElement('p');

    p.classList.add("bg-gray-200", "rounded-lg", "text-gray-700", "text-sm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    p.innerText = `
    You have completed the task Fix the Mobile Button Issue at ${formattedTime}
    `
    container.appendChild(p);
})

document.getElementById('task-2-btn').addEventListener('click', function () {
    this.disabled = true;

    this.classList.add("bg-gray-400", "cursor-not-allowed");
    this.classList.remove("bg-blue-500");
    alert('Board Successfully Updated');
    const taskAssigned = document.getElementById('task-assign-number').innerText;
    if (taskAssigned === "1") {
        alert('Congrats!! You have completed all the current task');
    }
    const mainTaskAssigned = document.getElementById('main-task-num').innerText;
    const convTaskAssigned = parseInt(taskAssigned);
    const convMainTaskAssigned = parseInt(mainTaskAssigned);
    const sum = convTaskAssigned - 1;
    const mainSum = convMainTaskAssigned + 1;
    document.getElementById('task-assign-number').innerText = sum;
    document.getElementById('main-task-num').innerText = mainSum;
    const container = document.getElementById('activity-log');
    const p = document.createElement('p');

    p.classList.add("bg-gray-200", "rounded-lg", "text-gray-700", "text-sm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    p.innerText = `
    You have completed the task Add Dark Mode at ${formattedTime}
    `
    container.appendChild(p);
})

document.getElementById('task-3-btn').addEventListener('click', function () {
    this.disabled = true;

    this.classList.add("bg-gray-400", "cursor-not-allowed");
    this.classList.remove("bg-blue-500");
    alert('Board Successfully Updated');
    const taskAssigned = document.getElementById('task-assign-number').innerText;
    if (taskAssigned === "1") {
        alert('Congrats!! You have completed all the current task');
    }
    const mainTaskAssigned = document.getElementById('main-task-num').innerText;
    const convTaskAssigned = parseInt(taskAssigned);
    const convMainTaskAssigned = parseInt(mainTaskAssigned);
    const sum = convTaskAssigned - 1;
    const mainSum = convMainTaskAssigned + 1;
    document.getElementById('task-assign-number').innerText = sum;
    document.getElementById('main-task-num').innerText = mainSum;
    const container = document.getElementById('activity-log');
    const p = document.createElement('p');

    p.classList.add("bg-gray-200", "rounded-lg", "text-gray-700", "text-sm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    p.innerText = `
    You have completed the task Optimize Home page at ${formattedTime}
    `
    container.appendChild(p);
})

document.getElementById('task-4-btn').addEventListener('click', function () {
    this.disabled = true;

    this.classList.add("bg-gray-400", "cursor-not-allowed");
    this.classList.remove("bg-blue-500");
    alert('Board Successfully Updated');
    const taskAssigned = document.getElementById('task-assign-number').innerText;
    if (taskAssigned === "1") {
        alert('Congrats!! You have completed all the current task');
    }
    const mainTaskAssigned = document.getElementById('main-task-num').innerText;
    const convTaskAssigned = parseInt(taskAssigned);
    const convMainTaskAssigned = parseInt(mainTaskAssigned);
    const sum = convTaskAssigned - 1;
    const mainSum = convMainTaskAssigned + 1;
    document.getElementById('task-assign-number').innerText = sum;
    document.getElementById('main-task-num').innerText = mainSum;
    const container = document.getElementById('activity-log');
    const p = document.createElement('p');

    p.classList.add("bg-gray-200", "rounded-lg", "text-gray-700", "text-sm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    p.innerText = `
    You have completed the task OAdd new emoji 🤲 ${formattedTime}
    `
    container.appendChild(p);
})

document.getElementById('task-5-btn').addEventListener('click', function () {
    this.disabled = true;

    this.classList.add("bg-gray-400", "cursor-not-allowed");
    this.classList.remove("bg-blue-500");
    alert('Board Successfully Updated');
    const taskAssigned = document.getElementById('task-assign-number').innerText;
    if (taskAssigned === "1") {
        alert('Congrats!! You have completed all the current task');
    }
    const mainTaskAssigned = document.getElementById('main-task-num').innerText;
    const convTaskAssigned = parseInt(taskAssigned);
    const convMainTaskAssigned = parseInt(mainTaskAssigned);
    const sum = convTaskAssigned - 1;
    const mainSum = convMainTaskAssigned + 1;
    document.getElementById('task-assign-number').innerText = sum;
    document.getElementById('main-task-num').innerText = mainSum;
    const container = document.getElementById('activity-log');
    const p = document.createElement('p');

    p.classList.add("bg-gray-200", "rounded-lg", "text-gray-700", "text-sm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    p.innerText = `
    You have completed the task Integrate OpenAI API ${formattedTime}
    `
    container.appendChild(p);
})

document.getElementById('task-6-btn').addEventListener('click', function () {
    this.disabled = true;

    this.classList.add("bg-gray-400", "cursor-not-allowed");
    this.classList.remove("bg-blue-500");
    alert('Board Successfully Updated');
    const taskAssigned = document.getElementById('task-assign-number').innerText;
    if (taskAssigned === "1") {
        alert('Congrats!! You have completed all the current task');
    }
    const mainTaskAssigned = document.getElementById('main-task-num').innerText;
    const convTaskAssigned = parseInt(taskAssigned);
    const convMainTaskAssigned = parseInt(mainTaskAssigned);
    const sum = convTaskAssigned - 1;
    const mainSum = convMainTaskAssigned + 1;
    document.getElementById('task-assign-number').innerText = sum;
    document.getElementById('main-task-num').innerText = mainSum;
    const container = document.getElementById('activity-log');
    const p = document.createElement('p');

    p.classList.add("bg-gray-200", "rounded-lg", "text-gray-700", "text-sm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    p.innerText = `
    You have completed the task Improve Job searching ${formattedTime}
    `
    container.appendChild(p);

})

document.getElementById('activity-log-btn').addEventListener('click', function () {
    document.getElementById('activity-log').innerHTML = '';
})

document.getElementById('color-change').addEventListener('click', function () {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

document.getElementById('new-page').addEventListener('click', function(){
    window.location.href="./qaPage.html";
})



