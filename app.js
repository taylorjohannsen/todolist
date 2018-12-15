class toDo {
    constructor(title, desription, date, priority) {
        this.title = title;
        this.desription = desription;
        this.date = date;
        this.priority = priority;
    }
}

class projectRender {
    constructor(projectName) {
        this.projectName = projectName;
    }

    renderName() {
        document.getElementById('projName').innerHTML = this.projectName;
        let elenName = document.getElementById('projList');
        let createElement = document.createElement('div');
        createElement.innerText = this.projectName;
        elenName.appendChild(createElement);
    }
    deleteName() {
        elenName.removeChild(createElement);
    }
}

