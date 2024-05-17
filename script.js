let projects = [];

function createProject() {
    const projectNameInput = document.getElementById('projectName');
    const projectName = projectNameInput.value.trim();

    if (projectName === '') {
        alert('Please enter a project name');
        return;
    }

    const project = {
        id: Date.now(),
        name: projectName
    };

    projects.push(project);
    displayProjects();
    projectNameInput.value = '';
}

function displayProjects() {
    const projectsList = document.getElementById('projects');
    projectsList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        li.className = 'project-item';
        li.innerHTML = `
            <strong>${project.name}</strong>
            <button onclick="viewProject(${project.id})">View</button>
            <button onclick="deleteProject(${project.id})">Delete</button>
        `;
        projectsList.appendChild(li);
    });
}

function viewProject(id) {
    const project = projects.find(p => p.id === id);
    if (project) {
        
        
    }
}

function deleteProject(id) {
    projects = projects.filter(project => project.id !== id);
    displayProjects();
}
