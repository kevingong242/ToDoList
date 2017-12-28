var toDoList = {
    todos: [],
    displayToDos: function(){
        if(this.todos.length === 0){
            console.log("Your list is empty!");
        }
        else{
            console.log("My Todos: ");
            for(var i =0; i < this.todos.length; i++){
                if(this.todos[i].completed === true){
                    console.log("(x) ",this.todos[i].todoText);   
                }
                else{
                    console.log("( ) ",this.todos[i].todoText);
                }
            }
        }
    },
    addToDos: function(toDoItem){
        this.todos.push({
            todoText: toDoItem,
            completed: false
        });
    },
    deleteToDos: function(position){
        this.todos.splice(position, 1);
    },
    changeToDos: function(position, newText){
        this.todos[position].todoText = newText;
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        this.todo.completed = !this.todo.completed;
    },
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
        this.displayToDos();
        
    }
};

var handlers = {
    displayToDos: function(){
      toDoList.displayToDos();
    },
    toggleAll: function(){
        toDoList.toggleAll();
    }
};