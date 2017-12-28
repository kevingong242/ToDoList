//ToDo object
var toDoList = {
    todos: [], //list
    //adds tasks to the list
    addToDos: function(toDoItem){
        this.todos.push({
            todoText: toDoItem, //task name
            completed: false //whether the task is completed or not
        });
    },
    //removes a specific task in the list
    deleteToDos: function(position){
        this.todos.splice(position, 1);
    },
    //modify a task name
    changeToDos: function(position, newText){
        this.todos[position].todoText = newText;
    },
    //check whether a task is complete or not
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    //toggles all task to be completed unless all task are already completed, in that case it all becomes uncomplete
    toggleAll: function(){
        var counter = 0;
        for(var i =0; i < this.todos.length; i++){
            if(this.todos[i].completed === true){
                counter++;
            }
        }
        if(counter === this.todos.length){
            for(var i=0; i<this.todos.length; i++){
                this.todos[i].completed = false;
            }
        }
        else{
            for(var i=0; i<this.todos.length; i++){
                this.todos[i].completed = true;
            }
        }       
    }
};

//object to allow for onclick events
var handlers = {
    addToDos: function(){
        var itemToAdd = document.getElementById('addToDoTextInputs');
        toDoList.addToDos(itemToAdd.value);
        itemToAdd.value = '';
        view.displayToDos();
    },
    deleteToDo: function(){
        var position = document.getElementById('removePosition');
        toDoList.deleteToDos(position.valueAsNumber);
        position.value = '';
        view.displayToDos();
    },
    changeToDo: function(){
        var position = document.getElementById('changePosition');
        var changeText = document.getElementById('changeText');
        toDoList.changeToDos(position.valueAsNumber, changeText.value);
        position.value = '';
        changeText.value = '';
        view.displayToDos();
    },
    toggleCompleted: function(){
        var position = document.getElementById('toggleCompletedPosition');
        toDoList.toggleCompleted(position.valueAsNumber);
        position.value = '';
        view.displayToDos();
    },
    toggleAll: function(){
        toDoList.toggleAll();
        view.displayToDos();
    }
};

//object that manipulates the tasks displayed on screen
var view = {
    displayToDos: function(){
        var toDoUl = document.querySelector('ul');
        toDoUl.innerHTML = '';
        for(var i = 0; i < toDoList.todos.length; i++){
            var toDoLi = document.createElement('li');
            var toDoWithCompletion = '';
            if(toDoList.todos[i].completed === true){
                toDoWithCompletion = "(x)" + toDoList.todos[i].todoText;
            }else{
                toDoWithCompletion = "( )" + toDoList.todos[i].todoText;
            }
            toDoLi.textContent = toDoWithCompletion;
            toDoUl.appendChild(toDoLi);
        }
    }
};