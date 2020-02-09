class ProjectsAdapter {
    constructor() {
        this.projectsUrl = "http://localhost:3000/api/v1/projects"
    }

    getProjects() {
        return fetch(this.projectsUrl).then(res => res.json())
    }

    createProject(projectTitle) {
        const project = {
            title: projectTitle
        }
        return fetch(this.projectsUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ project })
        })
        .then(res => res.json())
    }
    
}