const DOM = (function() {

  const projectsList = document.getElementById('projectsList');

  const toDosView = document.getElementById('toDosView');
  const toDosList = document.getElementById('toDosList');

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
  function renderToDos(project, toDoClickHandler) {
    const title = document.createElement('h2');
    const addToDoButton = document.createElement('a');
    const addToDoButtonContainer = document.createElement('div');
    
    title.classList.add('mb-3', 'px-5');
    title.innerText = project.title;

    addToDoButton.href = '#';
    addToDoButton.title = 'Add new TODO';
    addToDoButton.classList.add('h3');
    addToDoButton.innerText = '+';

    addToDoButtonContainer.classList.add('text-center');
    addToDoButtonContainer.append(addToDoButton)

    toDosView.innerHTML = '';
    toDosView.append(title);
    toDosView.append(toDosList);
    toDosView.append(addToDoButtonContainer);

    project.toDos.forEach(toDo => {
      addToDo(toDo, toDoClickHandler);
    });
  }

  return {
    renderProjects,
    addProject,
    removeProject,
    setActiveProject,
    renderToDos,
  }

})();

export default DOM;