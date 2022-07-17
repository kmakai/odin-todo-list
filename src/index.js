import Project from './project.js';

const t = new Project('tester');
t.addItem('test', 'test disc', 'test due', 'test notes');
t.addItem('test2', 'test disc', 'test due', 'test notes');
t.addItem('test3', 'test disc', 'test due', 'test notes');
t.addItem('test4', 'test disc', 'test due', 'test notes');
t.removeItem(1);
console.log(t);

const projects = [t, t, t, t];
console.log(projects);

const pcont = document.querySelector('.projects-container');

projects.forEach((p)=> {
  const div = document.createElement("div");
  div.className = "project"
  div.innerHTML = `<h2>${p.title}</h2><span><i class="fa-regular fa-xmark"></i></span>`;
  pcont.append(div);
})