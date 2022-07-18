import Project from './project.js';

const t = new Project('Tester');
t.addItem('test', 'test disc', '11/18/2022', 'test notes');
t.addItem('test2', 'test disc', '11/18/2022', 'test notes');
t.addItem('test3', 'test disc', '11/18/2022', 'test notes');
t.addItem('test4', 'test disc', '11/18/2022', 'test notes');
console.log(t);

const projects = [t, t, t, t];
let currentProject;
console.log(projects);

const pcont = document.querySelector('.projects-container');

const displayProjects = function () {
  projects.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'project';
    div.id = i;
    div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;

    div.addEventListener('click', () => {
      document.querySelector('.main').innerHTML = '';
      currentProject = projects[i];

      displayItems(currentProject);

      // const itemDels = document.querySelectorAll('.item-del');
      // itemDels.forEach('click', () => {

      // });
    });

    pcont.append(div);
  });
};

const displayItems = function (p) {
  p.items.forEach((item, i) => {
    const divItem = document.createElement('div');
    divItem.className = 'item';
    divItem.innerHTML = `<input type="checkbox" id="mark"/><h3 id="title">${item.title}</h3>
  <p id="disc">${item.discription}</p>
  <p id="due-date">${item.due}</p>
  <button class="item-del" id="${i}">delete</button>`;

    document.querySelector('.main').append(divItem);
  });
};

displayProjects();

const delProjectBtns = document.querySelectorAll('.project span');
delProjectBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    projects.splice(e.target.parentNode.id, 1);
    pcont.innerHTML = '';
    displayProjects();
  });
});
