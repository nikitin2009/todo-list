const DOM = (function() {

  const projectsList = document.getElementById('projectsList');

  function renderProjects(projects) {
    projectsList.innerHTML = '';
    projects.forEach( project => {
      const a = document.createElement('a');
      const span = document.createElement('span');

      span.classList.add('badge', 'badge-danger', 'badge-pill');
      span.innerHTML = '&times;';

      a.href = '#';
      a.innerText = project.title;
      a.append(span);
      a.classList.add('list-group-item',
                      'list-group-item-action',
                      'list-group-item-secondary',
                      'd-flex',
                      'justify-content-between',
                      'align-items-center');    

      projectsList.append(a);
    });
    projectsList.children[0].classList.add('active');
  }

  return {
    renderProjects,
  }

})();

export default DOM;