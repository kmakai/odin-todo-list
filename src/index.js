import Project from './project.js';

const t = new Project('Tester');
t.addItem('test', 'test disc', 'test due', 'test notes');
t.addItem('test2', 'test disc', 'test due', 'test notes');
t.addItem('test3', 'test disc', 'test due', 'test notes');
t.addItem('test4', 'test disc', 'test due', 'test notes');
t.removeItem(1);
console.log(t);

const projects = [t, t, t, t];
console.log(projects);

const pcont = document.querySelector('.projects-container');

projects.forEach((p) => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;

  div.addEventListener('click', () => {
    document.querySelector('.main').innerHTML = '';
    p.items.forEach((item) => {
      const divItem = document.createElement('div');
      divItem.className = 'item';
      divItem.innerHTML = `<h3 id="title>${item.title}</h3>
  <p id="disc">${item.description}</p>
  <p id="due-date">${item.due}</p>
  <p id="notes">${item.notes}</p>`;
      
      document.querySelector('.main').append(divItem);
    });
  });
  pcont.append(div);
});
