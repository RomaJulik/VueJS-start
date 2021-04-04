const App = {
    data() {
        return {
            needDoList: [],
            completeList: [],
            inputValue: '',
            counter: 0,
            appTitle: 'TooToDo',
            placeholderString: "Введите дело которое нужно сделать...",
            noTodo: 'Место для ваших задач',
            id: 0,
        }
    },
    methods: {

        addNewTodo() {
            this.id = ++this.id
            if (this.inputValue !== '') {
                this.needDoList.push({
                    title: this.inputValue,
                    checked: false,
                    id: this.id
                });
                this.inputValue = ''
                console.log(this.needDoList);
                console.log(this.completeList);
            }

        },

        removeTodo(index) {
            this.needDoList.splice(index, 1)
            this.completeList.splice(index, 1)
        },

        doCheck(type, index) {
            console.log(type, index);
            if (type === true) {
                const comleteTodo = this.needDoList.splice(index, 1)
                this.completeList.push(...comleteTodo)
            } else {
                const noComleteTodo = this.completeList.splice(index, 1)
                this.needDoList.push(...noComleteTodo)
            }
        }
    }
}



Vue.createApp(App).mount('#app')