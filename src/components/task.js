class Task {
    constructor(taskJSON) {
        console.log(taskJSON)
        this.title = taskJSON.attributes.title
        this.projectId = taskJSON.relationships.project.data.id
    }
}