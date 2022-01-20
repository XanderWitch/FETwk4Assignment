class Trigger {
    constructor(date, description, symptoms) {
        this.date = date;
        this.description = description;
        this.symptoms = symptoms;
        this.triggers = [];
    }

    addTrigger(trigger) {
        this.triggers.push(trigger);
    }

}

class UI {

    //Add new trigger item to table
    static addTriggerToList(trigger) {
        const list = document.querySelector('#trigger-list');
        const row = document.createElement('tr');

        //define what is included in the new row
        row.innerHTML = `
            <td>${trigger.date}</td>
            <td>${trigger.description}</td>
            <td>${trigger.symptoms}</td>
            <td><button type="button" class="btn btn-danger remove">Remove Trigger</button></td>`

        //add the row with the defined function
        list.appendChild(row);
    }

    //Clear form fields after submission
    static clearFields() {
        document.querySelector('#new-trigger-date').value = '';
        document.querySelector('#new-trigger-description').value = '';
        document.querySelector('#new-symptoms').value = '';
    }

    //delete a trigger
    static deleteTrigger(element) {
        if (element.classList.contains('remove')) {
            element.parentElement.parentElement.remove();
        }
    }
}

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

//Event: Add a Trigger
document.querySelector('#trigger-form').addEventListener('submit', (e) => {
    //Prevent actual submit
    e.preventDefault();

    //Get form values
    const date = document.querySelector('#new-trigger-date').value;
    const description = document.querySelector('#new-trigger-description').value;
    const symptoms = document.querySelector('#new-symptoms').value;

    //Instantiate new Trigger
    const trigger = new Trigger(date, description, symptoms);

    //Add trigger to table
    UI.addTriggerToList(trigger);

    //Clear form fields
    UI.clearFields();
})

//Event: Delete a Trigger
//Grab element
document.querySelector('#trigger-list').addEventListener('click', (e) => {
    console.log('#trigger-list');
    //Delete element
    UI.deleteTrigger(e.target);

});

