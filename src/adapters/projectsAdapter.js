class projectsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/projects"
    }

    getProjects() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createProject(value) {
        console.log("creating...")
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
            body: JSON.stringify(value)
        })
    }
}