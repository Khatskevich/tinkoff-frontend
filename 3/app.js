"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;


var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

// сформируем задачки
var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'todo'
    },
    {
        name: 'Купить хлеб',
        status: 'done'
    },
    {
        name: 'Захватить мир',
        status: 'todo'
    },
    {
        name: 'Добавить тудушку в список',
        status: 'todo'
    }
];

var filterStates = {
    "all":"all",
    "done":"done",
    "todo":"todo"
};

// функция по генерации элементов
function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    setTodoStatusClassName(newElement, todo.status === 'todo');

    return newElement;
}

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
}

function onListClick(event) {
    var target = event.target;
    var element;

    if (isStatusBtn(target)) {
        element = target.parentNode;
        changeTodoStatus(element);
    }

    if (isDeleteBtn(target)) {
        element = target.parentNode;
        deleteTodo(element);
    }
    updateStatistics();
    filterTasks();
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

function changeTodoStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);
}

function deleteTodo(element) {
    listElement.removeChild(element);
}

function onInputKeydown(event) {
    if (event.keyCode !== 13) {
        return;
    }

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }

    var todoName = inputElement.value.trim();

    if (todoName.length === 0 || checkIfTodoAlreadyExists(todoName)) {
        return;
    }

    var todo = createNewTodo(todoName);
    insertTodoElement(addTodoFromTemplate(todo));
    inputElement.value = '';
    updateStatistics();
    filterTasks();
}

function checkIfTodoAlreadyExists(todoName) {
    var todoElements = listElement.querySelectorAll('.task__name');
    var namesList = Array.prototype.map.call(todoElements, function(element) {
        return element.textContent;
    });
    return namesList.indexOf(todoName) > -1;
}

function createNewTodo(name) {
    return {
        name: name,
        status: 'todo'
    }
}

todoList
    .map(addTodoFromTemplate)
    .forEach(insertTodoElement);
updateStatistics();

listElement.addEventListener('click', onListClick);

var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

// Задача:
// исправьте багу с добавлением insertBefore в пустой массив
// создайте статистику
//
function insertTodoElement(elem) {
    if (listElement.children) {
        listElement.insertBefore(elem, listElement.firstElementChild);
    } else {
        listElement.appendChild(elem);
    }
}

function updateStatistics(){
    var tasks_count_all = document.querySelectorAll(".task").length;
    var tasks_count_done = document.querySelectorAll(".task.task_done").length;
    var statisticTotalNode = document.querySelector(".statistic__total");
    var statisticDoneNode = document.querySelector(".statistic__done");
    var statisticLeftNode = document.querySelector(".statistic__left");
    statisticTotalNode.textContent = tasks_count_all;
    statisticDoneNode.textContent = tasks_count_done;
    statisticLeftNode.textContent = tasks_count_all - tasks_count_done;
}


function onFiltorClick(event){
    var filter = event.target;
    var new_filter_name = filter.getAttribute("data-filter");
    var new_filter_state = filterStates[new_filter_name];
    if (new_filter_state === undefined){
        return;
    }
    markSelectedFilter(new_filter_name);
    filterTasks();
}

function markSelectedFilter(new_filter_state) {
    var filters = document.querySelectorAll(".filters__item");
    filters.forEach(function (filter) {
        filter.classList.toggle("filters__item_selected", filter.getAttribute("data-filter") === new_filter_state);
    })
}
function filterTasks(){
    var filter = document.querySelector(".filters__item_selected");
    var filter_state = filterStates[filter.getAttribute("data-filter")];
    switch (filter_state){
        case "all":
            addClassHiddenToTasks(function (task) {
                return false;
            });
            break;
        case "done":
            addClassHiddenToTasks(function (task) {
                return task.classList.contains("task_todo");
            });
            break;
        case "todo":
            addClassHiddenToTasks(function (task) {
                return task.classList.contains("task_done");
            });
            break;
    }
}

function addClassHiddenToTasks(condition){
    var tasks = document.querySelectorAll(".task");
    tasks.forEach(function (task) {
        task.classList.toggle('hidden', condition(task));
    });
}
document.querySelector(".filters").addEventListener("click", onFiltorClick);