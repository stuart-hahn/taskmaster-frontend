class Projects {
    constructor() {
        this.projects = []
        this.adapter = new ProjectsAdapter()
        this.fetchProjects()
        this.initBindings()
        this.initEventListeners()
    }

    initBindings() {
        this.projectsList = document.querySelector(".projects-list")
        this.tasksList = document.querySelector(".tasks-list")
        this.newProjectForm = document.querySelector(".new-project-form")
        this.newProjectButton = document.querySelector(".new-project-button")
        this.returnHome = document.querySelector("#return-home")
    }

    initEventListeners() {
        this.projectsList.addEventListener('click', this.displayTasks.bind(this))
        this.newProjectForm.addEventListener("submit", this.createProject.bind(this))
        this.newProjectButton.addEventListener('click', () => {
            this.newProjectForm.classList.toggle('hidden')
        })
        this.returnHome.addEventListener('click', this.render.bind(this))
    }

    createProject(e) {
        e.preventDefault()
        const projectTitle = this.newProjectForm.querySelector('#project-title').value
        this.adapter.createProject(projectTitle)
            .then(project => {
                console.log(project)
            })
    }

    fetchProjects() {
        this.adapter.getProjects()
        .then(projects => {
            projects.data.forEach(project => this.projects.push(project))
        })
        .then(() => this.render())
    }

    render() {
        this.projectsList.innerHTML = ""
        this.tasksList.innerHTML = ""
        const projectsHeader = document.createElement('h2')
        projectsHeader.classList.add('section-header')
        projectsHeader.innerText = "All Projects"
        this.projectsList.appendChild(projectsHeader)

        this.projects.forEach(project => {
            const projectLi = document.createElement('li')
            projectLi.id = project.id
            projectLi.innerText = project.attributes.title
            this.projectsList.appendChild(projectLi)
        })
    }

    displayTasks(e) {
        const project = this.projects.find( ({ id }) => id === e.target.id )

        this.projectsList.innerHTML = ""
        const projectTitle = document.createElement('h2')
        projectTitle.classList.add('section-header')
        projectTitle.innerText = project.attributes.title
        this.tasksList.appendChild(projectTitle)
        
        project.attributes.tasks.forEach(task => {
            const taskLi = document.createElement('li')
            taskLi.innerText = task.title
            this.tasksList.appendChild(taskLi)
        })
    }
}