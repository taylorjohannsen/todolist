let objArray = [];
let x = 0;

class TodoSetup {
    constructor(parent, title, body, priority, id) {
        this.containter = document.createElement('div');
        this.body = body;
        this.parent = parent;
        this.title = title;
        this.priority = priority;
        this.id = id;
        this.init();
    }

    init() {
        this.parent.appendChild(this.containter);
        this.addMainInfo();

    }

    addMainInfo() {
        const testTitle = document.createElement('div');
        testTitle.innerText = this.title;

        const testBody = document.createElement('div');
        testBody.innerText = this.body;

        if (this.priority == true) {
            this.containter.style.backgroundColor = 'green';
        }

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () =>{
            this.containter.remove();
        })

        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.id = x;
        editButton.addEventListener('click', () => {
            editForm.style.display = 'block';
        })

        let editInput = document.querySelector('#editInput');
        editInput.value = 'Submit';
        editInput.addEventListener('click', () => {
        })

        this.containter.appendChild(testTitle);
        this.containter.appendChild(testBody);
        this.containter.appendChild(deleteButton);
        this.containter.appendChild(editButton);

    }


class ProjectSetup {
    constructor(parent, name) {
        this.parent = parent;
        this.child = document.createElement('div');
        this.name = name;
        this.setup();
    }

    setup() {
        this.parent.appendChild(this.child);
        this.child.appendChild(this.mainSetup());
    }

    mainSetup() {
        const nameFragment = document.createDocumentFragment();

        const setupButton = document.createElement('button');
        setupButton.innerText = 'Create New To-Do +';

        setupButton.addEventListener('click', () => {
            let todoTitle = document.getElementById('title').value;
            let checkBox = document.getElementById('checked');
            let isChecked = checkBox.checked;
            let todoBody = document.getElementById('body').value;
            
            objArray.push(new TodoSetup(this.child, todoTitle, todoBody, isChecked, x));

            document.getElementById('title').value = "";
            document.getElementById('body').value = "";
            checkBox.checked = false;
            x++;
        })

        nameFragment.appendChild(setupButton);
        
        return nameFragment;
    }
}



document.querySelector('#Submit').addEventListener('click', () => {
    let projectName = document.querySelector("#newName").value;
    new ProjectSetup(document.querySelector('#projList'), projectName); 
})