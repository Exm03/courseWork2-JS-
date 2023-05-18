class Task{
    constructor(taskName, taskDescription, taskPriority){
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskPriority = taskPriority;
        this.taskDate = new Date(Date.now());
        this.taskStatus = "new";

    }

    getTask(){
        return `${this.taskName}: ${this.taskDescription} \n Дата создания задачи: ${this.taskDate} \n Приоритет: ${this.taskPriority} \n Статус: ${this.taskStatus}`
    }
}






const tasksList = []

while (true) {
    let task = prompt ('Введите команду\n Используйте !help для получения информации связанной с работой команд');

    if (task === "end") {
        break;


    }

    if (task === 'print') {
        tasksList.forEach((el, i) => {
            console.log(`${i} ${el.getTask()}`);
        });
        continue;
    }

    if (task.includes('print: priority: high')) {
        tasksList.forEach(function (el, i) {
            if (el.taskPriority.includes('high')){
                console.log(`${i} ${el.getTask()}`)
            }
        })
    }

    if (task.includes('print: priority: low')){
         tasksList.forEach(function (el, i) {
            if (el.taskPriority.includes('low')){
                console.log(`${i} ${el.getTask()}`)
            }
        })
    }

    if (task.includes('print: status: new')){
        tasksList.forEach(function (el, i) {
            if (el.taskStatus === 'new'){
                console.log(`${i} ${el.getTask()}`)
            }
        })
        continue;
    }

    if (task.includes('print: status: done')){
        tasksList.forEach(function (el, i) {
            if (el.taskStatus === 'done'){
                console.log(`${i} ${el.getTask()}`)
            }
        })
        continue;
    }

    if (task.includes('print: task:')) {
        let i = task.replace(/[^+\d]/g, '');
            console.log(`${i} ${tasksList.at(i).getTask()}`);
        continue;
    }

    if (task.includes('status: ')){
        i = task.replace(/[^+\d]/g, '');
        tasksList[i].taskStatus = task.replace(/[status: \d]/g, '');
    }

    if (task.includes('delete:')) {
        i = task.replace(/[^+\d]/g, '');
        tasksList.splice(i, 1)
    }

    if (task.includes('search: start:')){
        tasksList.forEach(function (el, i) {
            let search = task.replace('search: start:', '');
            if ( el.taskName.substring(0, search.length) == search){
                console.log(`${i} ${el.getTask()}`)
            }
        })
    }

    if (task.includes('search: full:')){
        tasksList.forEach(function (el, i) {
            let search = task.replace('search: full: ', '');
            if ( el.taskName.indexOf(search) > -1 ){
                console.log(`${i} ${el.getTask()}`)
            }
        })
    }

    if (task.includes('!help')){
        alert (`Список команд:
        \n- end — закончить работу программы.
        \n- add:<Имя задачи>, <Описание задачи>, <Приоритет:high/low> — команда add добавляет новую задачу в конец списка задач.
        \n- print — выводит в консоль список всех задач.
        \n- print: task: <index> — выводит в консоль конкретную задачу по индексу.
        \n- print: priority: <high/low> — выводит в консоль все задачи с указанным приоритетом: high или low.
        \n - print: status: <new/done> — выводит в консоль задачи с указанным статусом: new или done.
        \n- status: <index>: <new/done> — команда status изменяет статус задачи в зависимости от переданного значения, где index — это номер задачи, статус которой мы изменяем.
        \n- delete: <index> — удаляет задачу с указанным индексом из списка.
        \n- search: <start/full>: <str> — вывести в консоль только те значения, которые соответствуют началу названия или встречаются в любом месте названия.`)
    }

    if (task.includes('add:')) {
        let userTask = task.replace('add:', '' ).split(',');
        tasksList.map(el => el.taskPriority.trim(),)
        tasksList.push(new Task(userTask[0], userTask[1], userTask[2], userTask[3], userTask[4]));
        tasksList.forEach(function (el) {
            if (!el.taskDescription) {
                el.taskDescription = "Описание не добавлено";
                el.taskPriority = 'high';
            }
            if (!el.taskPriority) {
                el.taskPriority = 'high';
            }
            if (el.taskName == ''){
                tasksList.pop();
            }
         })
    }
}
