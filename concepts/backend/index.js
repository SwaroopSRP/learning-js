import express from "express";

const port = 9300;
const app = express();
app.use(express.json());

const tasksArr = [];

app.get("/", (req, res) => {
    res.status(200).send("You're accessing Min ToDo Backend...");
    console.log("Attempt to access server detected.");
});

app.post("/add", (req, res) => {
    const newTask = { id: tasksArr.length, text: req.body.taskText, isCompleted: false };
    tasksArr.push(newTask);

    res.status(201).send(`Created a new task #${newTask.id}.`);
    console.log(`Task #${newTask.id} has been created.`);
});

app.put("/edit/:id", (req, res) => {
    const targetTaskId = parseInt(req.params.id);
    const targetTask = tasksArr[targetTaskId];
    if (!targetTask) {
        res.status(404).send(`Task #${targetTaskId} not found.`);
        return;
    }

    targetTask.text = req.body.newText;
    targetTask.isCompleted = false;
    res.status(200).send(`Task #${targetTaskId} edited successfully.`);
    console.log(`Task #${targetTaskId} has been edited.`);
});

app.patch("/toggle/:id", (req, res) => {
    const targetTaskId = parseInt(req.params.id);
    const targetTask = tasksArr[targetTaskId];
    if (!targetTask) {
        res.status(404).send(`Task #${targetTaskId} not found.`);
        return;
    }

    targetTask.isCompleted = !targetTask.isCompleted;

    res.status(200).send(`Task #${targetTaskId}'s completion status has been toggled.`);
    console.log(`Task #${targetTaskId}'s completion status has been toggled.`);
});

app.delete("/delete", (req, res) => {
    tasksArr.length = 0;

    res.status(200).send(`All tasks have been removed.`);
    console.log(`Tasks array has been cleared.`);
})

app.delete("/delete/:id", (req, res) => {
    const targetTaskId = parseInt(req.params.id);
    const targetTask = tasksArr[targetTaskId];

    if (!targetTask) {
        res.status(404).send(`Task #${targetTaskId} not found.`);
        return;
    }

    tasksArr.splice(targetTaskId, 1);

    res.status(200).send(`Task #${targetTaskId} has been deleted successfully.`);
    console.log(`Task #${targetTaskId} has been deleted.`);
});

app.get("/view", (req, res) => {
    res.status(200).send(tasksArr);
});

app.get("/view/:id", (req, res) => {
    const targetTaskId = parseInt(req.params.id);
    const targetTask = tasksArr[targetTaskId];

    if (!targetTask) {
        res.status(404).send(`Task #${targetTaskId} not found.`);
        return;
    }

    res.status(200).send(targetTask);
});

app.listen(port, () => {
    console.log(`Server up and running at http://localhost:${port}/`);
});
