class Projects {
    constructor() {
        this.projects = []
        this.adapter = new projectsAdapter()
        this.initBindings()
        this.initEventListeners()
        this.fetchProjects()
    }

    initBindings() {
        this.projectsContainer = document.querySelector(".projectsContainer")
        this.newProjectForm = document.querySelector(".newProjectForm")
        this.newProjectTitle = document.querySelector("#projectTitle")
        this.projectsList = document.querySelector(".projectsList")
    }

    initEventListeners() {
        this.newProjectForm.addEventListener("submit", this.createProject.bind(this))
    }

    fetchProjects() {
        this.adapter.getProjects()
        .then(projects => {
            projects.data.forEach(project => this.projects.push(new Project(project)))
        })
        .then(() => this.render())
    }

    createProject(e) {
        e.preventDefault()
        const value = this.newProjectTitle.value
        this.adapter.createProject(value)
        .then(project => {
            this.projects.push(new Project(project.data))
            this.render()
        })
    }

    render() {
        this.projectsList.innerHTML = ""
        for (const project of this.projects) {
            const projectLi = document.createElement("li")
            projectLi.innerText = project.title
            this.projectsList.appendChild(projectLi)
        }
    }
}