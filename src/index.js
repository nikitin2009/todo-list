import DOM from './DOM';
import Project from './project';

const App = (function() {

  const state = {
    projects: [],
    currentProject: null,
  };

  function setState() {
    state.projects = [new Project('Default project')];
    state.currentProject = state.projects.first;
  }

  function init() {
    setState();
    DOM.renderProjects(state.projects);
  }

  return {
    init,
  }
})();

App.init();