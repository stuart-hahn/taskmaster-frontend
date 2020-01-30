class Projects {
    constructor() {
        this.projects = []
        this.adapter = new projectsAdapter()
    }

    fetchProjects() {
        this.adapter.getProjects()
        .then(projects => projects.data.forEach(project => {
            this.projects.push(new Project(project)))
        });
    }
}