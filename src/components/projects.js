class Projects {
    constructor() {
        this.projects = []
        this.adapter = new projectsAdapter()
        this.fetchProjects()
    }

    fetchProjects() {
        this.adapter.getProjects()
        .then(projects => {
            projects.data.forEach(project => this.projects.push(new Projects(project)))
        })
        .then(() => this.render())
    }

    render() {
        
    }
}