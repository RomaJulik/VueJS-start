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
        }
    },

    async mounted() {
        const needData = await localStorage.getItem('needDoList')
        const competeData = await localStorage.getItem('completeList')

        if (needData || competeData) {
            this.needDoList = JSON.parse(needData)
            this.completeList = JSON.parse(competeData)
        }
    },

    methods: {

        addNewTodo() {
            if (this.inputValue !== '') {
                this.needDoList.push({
                    title: this.inputValue,
                    checked: false,
                    id: Math.random()
                });
                localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
                this.inputValue = ''
            }
        },

        changeStatus() {
            let doneTodo = this.needDoList.filter(todo => {
                if (todo.checked === true) {
                    this.completeList.push(todo)
                } else {
                    return todo
                }
            })
            this.needDoList = doneTodo

            let needTodo = this.completeList.filter(todo => {
                if (todo.checked === false) {
                    this.needDoList.push(todo)
                } else {
                    return todo
                }
            })
            this.completeList = needTodo

            localStorage.setItem('completeList', JSON.stringify(this.completeList))
            localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
        },

        remove(index, store) {
            this[store].splice(index, 1)
            localStorage.setItem([store], JSON.stringify(this[store]))
        },

        clearAllTodo() {
            this.needDoList = []
            this.completeList = []
            localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
            localStorage.setItem('completeList', JSON.stringify(this.completeList))
        },
    }
}



Vue.createApp(App).mount('#app')