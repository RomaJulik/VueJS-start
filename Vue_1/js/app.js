const App = {
    data() {
        return {
            todoList: ['One', 'Two', 'Three'],
            counter: 0,
            appTitle: 'TooToDo',
            placeholderString: "Введите дело которое нужно сделать...",
            inputValue: '',
            noTodo: 'Место для ваших задач'
        }
    },
    methods: {
        
        addNewTodo() {
            if (this.inputValue !== '') {
                this.todoList.push(this.inputValue)
                this.inputValue = ''
            }

        },
        removeTodo(index) {
            this.todoList.splice(index, 1)
            console.log('removeTod', this.todoList);
        }
    }
}



Vue.createApp(App).mount('#app')