const app = Vue.createApp({
    data() {
      return {
        task: [],
        title: "",
      };
    },
  
    methods: {
      addTask() {
        const newTask = {
          id: Date.now(),
          title: this.title,
          edit: false,
        };
        if (!newTask.title.trim().length) {
          alert("Please fill the task title");
        } else {
          this.task.push(newTask);
        }
        this.title = "";
      },
      deleteTask(index) {
        this.task.splice(index, 1);
      },
      updateTask(index) {
        this.task[index].title = prompt("Yangi nomini kiriting");
      },
    },
  });
  
  app.mount(document.getElementById("root"));