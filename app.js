

class todoSetup {
    constructor(parent, title, body, priority) {
        this.containter = document.createElement('div');
        this.body = body;
        this.parent = parent;
        this.title = title;
        this.priority = priority;
        this.init();
    }

    init() {
        this.parent.appendChild(this.containter);
        this.containter.appendChild(this.addMainInfo());
    }

    addMainInfo() {
        const fragment = document.createDocumentFragment();

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
        editButton.addEventListener('click', () => {
            editForm.style.display = 'block';
        })

        let editInput = document.querySelector('#editInput');
        editInput.value = 'Submit';
        editInput.addEventListener('click', () => {
            testTitle.innerText = document.getElementById('editTitle').value;
            testBody.innerText = document.getElementById('editBody').value;

            editForm.style.display = 'none';
        })

        fragment.appendChild(testTitle);
        fragment.appendChild(testBody);
        fragment.appendChild(editButton);
        fragment.appendChild(deleteButton);

        return fragment;
    }
}

class projectSetup {
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
            
            new todoSetup(this.child, todoTitle, todoBody, isChecked);

            document.getElementById('title').value = "";
            document.getElementById('body').value = "";
            checkBox.checked = false;
        })

        nameFragment.appendChild(setupButton);
        
        return nameFragment;
    }
}



document.querySelector('#Submit').addEventListener('click', () => {
    let projectName = window.prompt('Project Name?');
    new projectSetup(document.querySelector('#projList'), projectName); 
})