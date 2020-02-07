class Projects {
    constructor() {
        this.projects = []
        this.tasks = []
        this.adapter = new projectsAdapter()
        this.initBindings()
        this.initEventListeners()
        this.fetchProjects()
        this.fetchTasks()
    }
    
    initBindings() {
        this.projectsContainer = document.querySelector(".projectsContainer")
        this.newProjectForm = document.querySelector(".newProjectForm")
        this.newProjectTitle = document.querySelector("#projectTitle")
        this.projectsList = document.querySelector(".projectsList")
        this.newProjectButton = document.querySelector(".newProjectButton")
    }
    
    initEventListeners() {
        this.newProjectForm.addEventListener("submit", this.createProject.bind(this))
        this.newProjectButton.addEventListener('click', () => {
            this.newProjectButton.classList.toggle('hidden')
            this.newProjectForm.classList.toggle('hidden')
        })
    }
    
    fetchProjects() {
        this.adapter.getProjects()
        .then(projects => {
            projects.data.forEach(project => {
                this.projects.push(new Project(project))
            })
        })
        .then(() => this.render())
    }
    fetchTasks() {
        this.adapter.getProjects()
        .then(projects => {
            projects.included.forEach(task => {
                this.tasks.push(new Task(task))
            })
        })
        console.log(this.tasks)
        // .then(() => this.renderTasks())
    }
    
    createProject(e) {
        e.preventDefault()
        const value = this.newProjectTitle.value
        this.adapter.createProject(value)
        .then(project => {
            this.projects.push(new Project(project))
            this.render()
        })
        this.newProjectButton.classList.toggle('hidden')
        this.newProjectForm.classList.toggle('hidden')
    }
    
    render() {
        this.projectsList.innerHTML = ""
        for (const project of this.projects) {
            const projectLi = document.createElement("li")
            projectLi.innerText = `${project.title}`
            this.projectsList.appendChild(projectLi)
        }
    }
}