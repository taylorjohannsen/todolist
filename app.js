let userID = 0;
let userInput;

class projectRender {
    constructor(title, date, id) {
        this.title = title;
        this.date = date;
        this.id = id;
    }
    renderName() {
        let idElem = document.createElement('div');

        let titleElem = document.createElement('div');
        titleElem.textContent = this.title;
        let dateElem = document.createElement('div');
        dateElem.textContent = this.date;

        let testDelete = document.createElement('button');
        testDelete.innerHTML = "Delete Project";
        testDelete.addEventListener ("click", function() {
            createElement.removeChild(document.getElementById(idElem.id));
        })

        let testEdit = document.createElement('button');
        testEdit.innerHTML = "EDIT";
        testEdit.addEventListener ("click", function() {
            createElement.removeChild(document.getElementById(idElem.id));
        })

        idElem.id = this.id;
        idElem.appendChild(titleElem);
        idElem.appendChild(dateElem);
        idElem.appendChild(testDelete);
        idElem.appendChild(testEdit);

        let createElement = document.getElementById('projList');
        createElement.appendChild(idElem);
        document.getElementById('title').value = '';
        document.getElementById('date').value = '';    
    }    
}

function render() {
    let userTitle = document.getElementById('title').value;
    let userDate = document.getElementById('date').value;
    userInput = new projectRender(userTitle, userDate, userID);
    userInput.renderName();
    userID++;
}
