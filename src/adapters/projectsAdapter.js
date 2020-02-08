class ProjectsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/projects"
    }

    getProjects() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createProject(projectTitle) {
        const project = {
            title: projectTitle
        }
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ project })
        })
    }
    
}