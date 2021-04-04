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

    async mounted () {
        const needData = await localStorage.getItem('needDoList')
        const competeData = await localStorage.getItem('completeList')
        
        if (needData || competeData) {
            this.needDoList = JSON.parse(needData)
            this.completeList = JSON.parse(competeData)
        }
        console.log(needData)
        console.log(competeData)
    
    },

    methods: {

        addNewTodo() {
            ++this.id
            if (this.inputValue !== '') {
                this.needDoList.push({
                    title: this.inputValue,
                    checked: false,
                    id: this.id
                });
                localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
                this.inputValue = ''
            }
            
        },
        
        removeNeedTodo(index) {
            this.needDoList.splice(index, 1)
            localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
        },
        removeDoneTodo(index) {
            this.completeList.splice(index, 1)
            localStorage.setItem('completeList', JSON.stringify(this.completeList))
        },
        
        clearAllTodo(){
            this.needDoList = []
            this.completeList = []
            localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
            localStorage.setItem('completeList', JSON.stringify(this.completeList))
        },

        
        doCheck(type, index) {
            if (type === true) {
                const comleteTodo = this.needDoList.splice(index, 1)
                this.completeList.push(...comleteTodo)
                
            } else {
                const noComleteTodo = this.completeList.splice(index, 1)
                this.needDoList.push(...noComleteTodo)
            }
            localStorage.setItem('completeList', JSON.stringify(this.completeList))
            localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
        }
    }
}



Vue.createApp(App).mount('#app')