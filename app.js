/** @format */

'use strict';

{
  //要素の取得
  const todoList = document.getElementById('todo-list');
  const taskInput = document.getElementById('taskInput');
  //追加ボタンの取得
  const btnAdd = document.getElementById('btnAdd');
  btnAdd.addEventListener('click', addList);
  //ラジオボタンの取得
  const allTask = document.getElementById('allTask');
  allTask.onclick = radioSwitchAll;
  const workingTask = document.getElementById('workingTask');
  workingTask.onclick = radioSwitchWork;
  const completeTask = document.getElementById('completeTask');
  completeTask.onclick = radioSwitchComp;

  //配列
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
    todoLi.className = 'working';
    // const todoDiv = document.createElement('div');
    // todoDiv.className = 'working';
    const newId = document.createElement('span');
    newId.classList.add('num-id');
    const newComment = document.createElement('span');
    newComment.classList.add('todo-comment');
    const btnStatus = document.createElement('button');
    btnStatus.innerText = '作業中';
    // btnStatus.className = 'working';
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
      // todoLi.appendChild(todoDiv);
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

  //ボタンの切り替えの関数
  function checkStatus(e) {
    let targetBtn = e.target;
    if (targetBtn.parentElement.className === 'working') {
      targetBtn.innerText = '完了';

      targetBtn.parentElement.classList.add('complete');
      targetBtn.parentElement.classList.remove('working');
    } else {
      targetBtn.innerText = '作業中';

      targetBtn.parentElement.classList.add('working');
      targetBtn.parentElement.classList.remove('complete');
    }
  }

  //ラジオボタンによる切り替えの関数
  //すべて
  function radioSwitchAll() {}

  //作業中
  function radioSwitchWork() {}

  //完了
  function radioSwitchComp() {}
}
