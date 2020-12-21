'use strict';

{
    
    const todoList = document.getElementById('todo-list');
    const btnAdd = document.getElementById('btnAdd');
    const taskInput = document.getElementById('taskInput');
    btnAdd.addEventListener('click', addTodo);
    
    let newTodo = [
        {id:'ID',comment:'コメント',status:'状態'}
    ];

    function title() {
        const todoDiv = document.createElement('div');
        const todoLi = document.createElement('li');
        todoDiv.appendChild(todoLi);
        todoList.appendChild(todoDiv);
    }
    title();
    

    function addTodo() {
        const todoDiv = document.createElement('div');
        const todoLi = document.createElement('li');
        const btnStatus = document.createElement('button');
        btnStatus.innerText = '作業中';
        const btnDelete = document.createElement('button');
        btnDelete.innerText = '削除';
        
        if (taskInput.value === '') {
            return;
        }
        
        let numId;
        function todoAdd() {
            for (let i = 0; i <= todoDiv.length; i++){
                 numId=i;
                 todoLi.appendChild(numId);
                }
            todoLi.textContent = `${numId} ${taskInput.value}`;
            todoLi.appendChild(btnStatus);
            todoLi.appendChild(btnDelete);
            todoDiv.appendChild(todoLi);
            todoList.appendChild(todoDiv);
        }
        
        todoAdd();
        taskInput.value = '';
        
    }

}