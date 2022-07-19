import Project from './project.js';

// filler projects and items for testing
const t = new Project('Tester1');
t.addItem('test11', 'test disc', '11/18/2022', 'test notes');
t.addItem('test12', 'test disc', '11/18/2022', 'test notes');
t.addItem('test13', 'test disc', '11/18/2022', 'test notes');
t.addItem('test14', 'test disc', '11/18/2022', 'test notes');

const e = new Project('Tester2');
e.addItem('test21', 'test disc', '11/18/2022', 'test notes');
e.addItem('test22', 'test disc', '11/18/2022', 'test notes');
e.addItem('test23', 'test disc', '11/18/2022', 'test notes');
e.addItem('test24', 'test disc', '11/18/2022', 'test notes');

const s = new Project('Tester3');
s.addItem('test31', 'test disc', '11/18/2022', 'test notes');
s.addItem('test32', 'test disc', '11/18/2022', 'test notes');
s.addItem('test33', 'test disc', '11/18/2022', 'test notes');
s.addItem('test34', 'test disc', '11/18/2022', 'test notes');

const k = new Project('Tester4');
k.addItem('test41', 'test disc', '11/18/2022', 'test notes');
k.addItem('test42', 'test disc', '11/18/2022', 'test notes');
k.addItem('test43', 'test disc', '11/18/2022', 'test notes');
k.addItem('test44', 'test disc', '11/18/2022', 'test notes');

const projects = [t, e, s, k];
let currentProject;

const pcont = document.querySelector('.projects-container');

const displayProjects = function () {
  const main = document.querySelector('.main');
  projects.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'project';
    div.id = i;
    div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;

    div.addEventListener('click', () => {
      main.innerHTML = '';
      currentProject = projects[i];
      displayItems(currentProject);
    });

    pcont.append(div);
  });

  const delProjectBtns = document.querySelectorAll('.project span');
  delProjectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      projects.splice(e.target.parentNode.id, 1);
      pcont.innerHTML = '';
      displayProjects();
    });
  });
};

const displayItems = function (p) {
  p.items.forEach((item, i) => {
    const main = document.querySelector('.main');
    const divItem = document.createElement('div');
    divItem.className = 'item';
    divItem.innerHTML = `<input type="checkbox" id="mark"/><h3 id="title">${item.title}</h3>
  <p id="disc">${item.discription}</p>
  <p id="due-date">${item.due}</p>
  <button class="item-del" id="${i}">delete</button>`;

    main.append(divItem);
  });

  const delItemBtns = document.querySelectorAll('item-del');
  console.log(delItemBtns);
};

displayProjects();
