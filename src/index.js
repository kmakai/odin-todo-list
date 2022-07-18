import Project from "./project.js";

const t = new Project("Tester");
t.addItem("test", "test disc", "11/18/2022", "test notes");
t.addItem("test2", "test disc", "11/18/2022", "test notes");
t.addItem("test3", "test disc", "11/18/2022", "test notes");
t.addItem("test4", "test disc", "11/18/2022", "test notes");
console.log(t);

const projects = [t, t, t, t];
console.log(projects);

const pcont = document.querySelector(".projects-container");

const displayProjects = function () {
  projects.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "project";
    div.id = i;
    div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;

    div.addEventListener("click", () => {
      document.querySelector(".main").innerHTML = "";

      p.items.forEach((item) => {
        const divItem = document.createElement("div");
        divItem.className = "item";
        divItem.innerHTML = `<input type="checkbox" id="mark"/><h3 id="title">${item.title}</h3>
      <p id="disc">${item.discription}</p>
      <p id="due-date">${item.due}</p>`;

        document.querySelector(".main").append(divItem);
      });
    });

    pcont.append(div);
  });
};

displayProjects();
