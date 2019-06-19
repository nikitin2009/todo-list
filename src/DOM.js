import {format, isPast} from 'date-fns';

const DOM = (function() {

  const projectsList = document.getElementById('projectsList');

  const toDosView = document.getElementById('toDosView');
  const toDosList = document.getElementById('toDosList');

  const singleToDoView = document.getElementById('singleToDoView');

  function emptyScreen() {
    toDosView.innerHTML = '';
    singleToDoView.innerHTML = '';
  }

  //================ Projects
  function renderProjects(projects, projectClickHandler, projectRemoveHandler) {
    projectsList.innerHTML = '';
    projects.forEach( project => {
      addProject(project, projectClickHandler, projectRemoveHandler);
    });
    projectsList.children[0].classList.add('active');
  }

  function addProject(project, projectClickHandler, projectRemoveHandler) {
    const a = document.createElement('a');
    const removeButton = document.createElement('span');

    removeButton.classList.add('badge', 'badge-danger', 'badge-pill');
    removeButton.innerHTML = '&times;';
    removeButton.title = 'Remove the project';
    removeButton.addEventListener('click', projectRemoveHandler);

    a.href = '#';
    a.dataset.projectId = project.id;
    a.innerText = project.title;
    a.append(removeButton);
    a.classList.add('list-group-item',
                    'list-group-item-action',
                    'list-group-item-secondary',
                    'd-flex',
                    'justify-content-between',
                    'align-items-center');
    a.addEventListener('click', projectClickHandler)
    projectsList.append(a);
    return a;
  }

  function removeProject(projectElement) {
    projectElement.remove();
  }

  function setActiveProject(projectElement) {
    const currentActive = projectElement.parentElement.querySelector('.active');
    if (currentActive) currentActive.classList.remove('active');
    projectElement.classList.add('active');
  }

  //=================== ToDos
  function renderToDos(project, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers) {
    const title = document.createElement('h2');
    const addToDoButton = document.createElement('a');
    const addToDoButtonContainer = document.createElement('div');
    
    title.classList.add('mb-3', 'px-5');
    title.innerText = project.title;

    addToDoButton.href = '#';
    addToDoButton.title = 'Add new TODO';
    addToDoButton.classList.add('h3');
    addToDoButton.innerText = '+';
    addToDoButton.addEventListener('click', addToDoClickHandler);

    addToDoButtonContainer.classList.add('text-center');
    addToDoButtonContainer.append(addToDoButton)

    toDosView.innerHTML = '';
    toDosList.innerHTML = '';
    toDosView.append(title);
    toDosView.append(toDosList);
    toDosView.append(addToDoButtonContainer);

    project.toDos.forEach(toDo => {
      addToDo(toDo, toDoClickHandler);
    });

    if (project.toDos.length === 0) {
      singleToDoView.innerHTML = '';
      return null;
    } else {
      let toDoElement = toDosList.children[0];
      toDoElement.classList.add('active');
      setActiveToDo(project.toDos[0], singleToDoClickHandlers)
    }
  }

  function addToDo(toDo, toDoClickHandler) {
    const a = document.createElement('a');
    const priority = document.createElement('span');
    const title = document.createElement('span');
    const date = document.createElement('span');
    const priorityBadgeClass = getPriorityBadgeClass(toDo.priority);

    priority.classList.add('badge', `badge-${ priorityBadgeClass }`);
    priority.innerHTML = '&nbsp;';
    priority.title = `Priority: ${ toDo.priority }`;

    title.classList.add('title', 'flex-fill', 'mx-2');
    title.innerHTML = toDo.title;

    date.innerHTML = toDo.dueDate ? `(due on ${ format(toDo.dueDate, 'DD/MM/YYYY') })` : '';
    date.classList.add('small', 'due-date');
    if (isPast(toDo.dueDate)) {
      date.classList.add('text-danger', 'font-weight-bold');
    }

    a.href = '#';
    a.dataset.toDoId = toDo.id;
    a.append(priority);
    a.append(title);
    a.append(date);
    a.classList.add('list-group-item',
                    'list-group-item-action',
                    'd-flex',
                    'justify-content-between',
                    'align-items-center');
    if (toDo.completed) {
      a.classList.add('completed');
    }
    a.addEventListener('click', toDoClickHandler)
    toDosList.append(a);
  }

  function setActiveToDo(toDoObject, singleToDoClickHandlers) {
    const toDoElement = toDosList.querySelector(`[data-to-do-id="${toDoObject.id}"]`);
    const currentActive = toDoElement.parentElement.querySelector('.active');
    if (currentActive) currentActive.classList.remove('active');
    toDoElement.classList.add('active');

    renderSingleToDo(toDoObject, singleToDoClickHandlers);
  }

  function getPriorityBadgeClass(priority) {
    let className = '';
    switch (priority) {
      case 'regular':
        className = 'success';
        break;
      case 'high':
        className = 'danger';
        break;
      case 'low':
        className = 'secondary';      
    }
    return className;
  }

  function renderSingleToDo(toDo, singleToDoClickHandlers) {
    const completeButton = document.createElement('button');
    const completeButtonContainer = document.createElement('div');
    const form = document.createElement('form');
    const deleteButton = document.createElement('button');
    const updateButton = document.createElement('button');
    const formButtonsContainer = document.createElement('div');
    const dateValidationRegEx = '^\\d{2}/\\d{2}/\\d{4}$';

    const priority = {
      low: toDo.priority == 'low',
      regular: toDo.priority == 'regular',
      high: toDo.priority == 'high'
    }

    completeButton.classList.add('btn');
    if (toDo.completed) {
      completeButton.classList.add('btn-secondary');
      completeButton.innerHTML = 'Restore';
    } else {
      completeButton.classList.add('btn-success');
      completeButton.innerHTML = 'Complete &#10003;';
    }
    completeButton.addEventListener('click', singleToDoClickHandlers.completeButtonHandler);

    completeButtonContainer.classList.add('text-right', 'mb-3');
    completeButtonContainer.append(completeButton);

    form.innerHTML = `
      <div class="form-group">
        <label class="sr-only" for="title">Title</label>
        <input type="text" class="form-control form-control-lg" id="title" name="title" value="${toDo.title}" required placeholder="Title">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea class="form-control" id="description" name="description" rows="5">${toDo.description}</textarea>
      </div>
      <div class="form-group">
        <label for="dueDate">Due on (dd/mm/yyyy or  empty for no date):</label>
        <input type="text" class="form-control form-control-sm" id="dueDate" name="dueDate"
          value="${ toDo.dueDate ? format(toDo.dueDate, 'DD/MM/YYYY') : '' }"
          pattern="${ dateValidationRegEx }">
      </div>

      <div class="form-group">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="priority" id="low" value="low"
            ${priority.low ? 'checked' : ''}>
          <label class="form-check-label" for="low">
            <span class="badge badge-secondary">&nbsp;</span>
            Low
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="priority" id="regular" value="regular"
            ${priority.regular ? 'checked' : ''}>
          <label class="form-check-label" for="regular">
            <span class="badge badge-success">&nbsp;</span>
            Regular
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="priority" id="high" value="high"
            ${priority.high ? 'checked' : ''}>
          <label class="form-check-label" for="high">
            <span class="badge badge-danger">&nbsp;</span>
            High
          </label>
        </div>
      </div>
    `;

    deleteButton.classList.add('btn', 'btn-danger', 'float-left');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', singleToDoClickHandlers.deleteButtonHandler);
    updateButton.classList.add('btn', 'btn-warning', 'mr-2');
    updateButton.innerHTML = 'Update';
    updateButton.type = 'submit';

    formButtonsContainer.classList.add('form-group', 'text-right');
    formButtonsContainer.append(updateButton);
    formButtonsContainer.append(deleteButton);

    form.append(formButtonsContainer);
    form.addEventListener('submit', singleToDoClickHandlers.editFormSubmitHandler);

    singleToDoView.innerHTML = '';
    singleToDoView.append(completeButtonContainer);
    singleToDoView.append(form);
  }

  return {
    renderProjects,
    addProject,
    removeProject,
    setActiveProject,
    renderToDos,
    setActiveToDo,
    renderSingleToDo,
    emptyScreen
  }

})();

export default DOM;