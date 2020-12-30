/** @format */

'use strict';

{
  //要素の取得
  const todoList = document.getElementById('todo-list');
  const taskInput = document.getElementById('taskInput');

  const btnAdd = document.getElementById('btnAdd');
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
    todoLi.id = 'todo-li';
    const newId = document.createElement('span');
    newId.classList.add('num-id');
    const newComment = document.createElement('span');
    newComment.classList.add('todo-comment');
    const btnStatus = document.createElement('button');
    btnStatus.innerText = '作業中';
    btnStatus.onclick = checkStatus;
    const btnDelete = document.createElement('button');
    btnDelete.innerText = '削除';
    btnDelete.id = 'btn-del';
    btnDelete.onclick = removeTodo;

    if (taskInput.value === '') {
      return;
    }

    function todoAdd() {
      for (let i = 0; i < newTodo.length; i++) {
        while (todoLi.lastChild) {
          todoLi.removeChild(todoLi.lastChild);
        }

        newId.textContent = `${i - 1}`;
        newComment.textContent = `${taskInput.value}`;
      }
      todoLi.appendChild(newId);
      todoLi.appendChild(newComment);
      todoLi.appendChild(btnStatus);
      todoLi.appendChild(btnDelete);
      todoList.appendChild(todoLi);
    }

    newTodo.push({ id: newId, comment: taskInput.value });

    todoAdd();
    taskInput.value = '';
  }
  //リストから削除する関数
  function removeTodo(e) {
    let delItem = e.target;
    let delTodo = delItem.parentElement.remove();

    newTodo.splice(delTodo, 1);

    //IDの振り直しの関数
    re_num();
  }
  function re_num() {
    const todo_li = document.querySelectorAll('#todo-li');
    const _numId = document.querySelectorAll('.num-id');
    for (let i = 0; i < todo_li.length; ++i) {
      _numId[i].textContent = `${i}`;
    }
  }

  function checkStatus(e) {
    let targetBtn = e.target;
    const _btnSts = document.getElementById('btn-working');
    if (targetBtn.innerText === '作業中') {
      targetBtn.innerText = '完了';
    } else {
      targetBtn.innerText = '作業中';
    }
  }
}
