function TaskScheduler(taskName, priority = "Medium") {
    return { task: taskName, priority: priority };
}

let myTask = TaskScheduler("Write report");
document.write("Task: " + myTask.task + "<br>");
document.write("Priority: " + myTask.priority + "<br>");

console.log(myTask);

setTimeout(function() {
    document.write("Reminder: Complete your task soon!<br>");
}, 3000);

let taskCounts = {
    pending: 5,
    completed: 3
};

document.write("Pending tasks: " + taskCounts.pending + "<br>");
document.write("Completed tasks: " + taskCounts.completed + "<br>")