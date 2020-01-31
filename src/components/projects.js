class Projects {
    constructor() {
        this.projects = []
        this.adapter = new projectsAdapter()
        this.fetchProjects()
    }

    fetchProjects() {
        this.adapter.getProjects()
        .then(projects => {
            projects.data.forEach(project => this.projects.push(new Project(project)))
        })
        .then(() => this.render())
    }

    render() {
        const projectsContainer = document.querySelector(".projectsContainer")
        const projectList = document.createElement("ul")
        projectsContainer.appendChild(projectList)
        for (const project of this.projects) {
            const projectLi = document.createElement("li")
            projectLi.innerText = project.title
            projectList.appendChild(projectLi)
        }
    }
}