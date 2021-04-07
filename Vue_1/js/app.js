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

      /* let doneTodo = this.needDoList.map((todo,index) => {
        if (todo.checked === true){
          this.completeList.push(todo)
          return todo
        }
        this.needDoList.splice(index, 1)
      })
      
      let needTodo = this.completeList.map((todo,index) => {
        if (todo.checked === false){
          this.needDoList.push(todo)
          return todo
        }
        this.completeList.splice(index, 1)
      })
      
      console.log('doneTodo: ' + doneTodo);
      console.log('doneTodo: ' + doneTodo);
      
      this.needDoList = doneTodo
      this.completeList = needTodo
      
      console.log('this.needDoList: ' + this.needDoList);
      console.log('this.completeList: ' + this.completeList); */


      this.needDoList.forEach((todo, index) => {
        if (todo.checked === true) {
          this.completeList.push(todo)
          this.needDoList.splice(index, 1)
        }
      })
      this.completeList.forEach((item, index) => {
        if (item.checked === false) {
          this.needDoList.push(item)
          this.completeList.splice(index, 1)
        }
      })
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


    /*  doCheck(type, index) {
         if (type === true) {
             const comleteTodo = this.needDoList.splice(index, 1)
             this.completeList.push(...comleteTodo)

         } else {
             const noComleteTodo = this.completeList.splice(index, 1)
             this.needDoList.push(...noComleteTodo)
         }
         localStorage.setItem('completeList', JSON.stringify(this.completeList))
         localStorage.setItem('needDoList', JSON.stringify(this.needDoList))
     } */
  }
}



Vue.createApp(App).mount('#app')