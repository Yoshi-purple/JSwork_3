/** @format */

'use strict';

{
  //要素の取得
  const todoList = document.getElementById('todo-list');
  const btnAdd = document.getElementById('btnAdd');
  const taskInput = document.getElementById('taskInput');

  btnAdd.addEventListener('click', addList);

  let newTodo = [{ id: 'ID', comment: 'コメント', status: '状態' }];

  //最初の ID コメント　状態の表示
  function listTitle() {
    const id = document.querySelector('.id');
    const comment = document.querySelector('.comment');
    const status = document.querySelector('.status');
    id.textContent = `${newTodo[0].id}`;
    comment.textContent = `${newTodo[0].comment}`;
    status.textContent = `${newTodo[0].status}`;
  }
  listTitle();

  //リストに追加する関数
  function addList() {
    const todoLi = document.createElement('li');
    const newId = document.createElement('span');
    const newComment = document.createElement('span');
    const newStatus = document.createElement('span');

    const btnStatus = document.createElement('button');
    btnStatus.innerText = '作業中';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = '削除';

    if (taskInput.value === '') {
      return;
    }

    function todoAdd() {
      for (let i = 0; i < newTodo.length; i++) {
        newId.textContent = `${i - 1}`;
        newComment.textContent = `${taskInput.value}`;
      }
      todoLi.appendChild(newId);
      todoLi.appendChild(newComment);
      newStatus.appendChild(btnStatus);
      newStatus.appendChild(btnDelete);
      todoLi.appendChild(newStatus);
      todoList.appendChild(todoLi);
    }
    newTodo.push({ comment: taskInput.value });

    todoAdd();
    taskInput.value = '';
  }
}
