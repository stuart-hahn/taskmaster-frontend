class Projects {
    constructor() {
        this.projects = []
        this.adapter = new ProjectsAdapter()
        this.fetchProjects()
        this.initBindings()
        this.initEventListeners()
    }

    initBindings() {
        this.projectsList = document.querySelector(".projectsList")
        this.tasksList = document.querySelector(".tasksList")
    }

    initEventListeners() {
        this.projectsList.addEventListener('click', this.displayTasks.bind(this))
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
        projectTitle.innerText = project.attributes.title
        this.tasksList.appendChild(projectTitle)

        project.attributes.tasks.forEach(task => {
            const taskLi = document.createElement('li')
            taskLi.innerText = task.title
            this.tasksList.appendChild(taskLi)
        })

    }
}