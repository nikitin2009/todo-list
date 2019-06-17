const DOM = (function() {

  const projectsList = document.getElementById('projectsList');

  function renderProjects(projects, projectClickHandler, projectRemoveHandler) {
    projectsList.innerHTML = '';
    projects.forEach( project => {
      addProject(project, projectClickHandler, projectRemoveHandler);
    });
    projectsList.children[0].classList.add('active');
  }

  function addProject(project, projectClickHandler, projectRemoveHandler) {
    const a = document.createElement('a');
    const remove = document.createElement('span');

    remove.classList.add('badge', 'badge-danger', 'badge-pill');
    remove.innerHTML = '&times;';
    remove.addEventListener('click', projectRemoveHandler);

    a.href = '#';
    a.dataset.projectId = project.id;
    a.innerText = project.title;
    a.append(remove);
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

  return {
    renderProjects,
    addProject,
    removeProject,
    setActiveProject,
  }

})();

export default DOM;