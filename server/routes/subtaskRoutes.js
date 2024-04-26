const express = require("express");
const router = express.Router();
const { pool } = require("../db/connection");

router.get("/:id/subtasks", verifyToken, async (req, res) => {
    try{
        const taskId = req.params.id;

        const subtasks = await pool.query(
            "SELECT * FROM subtasks WHERE task_id = $1",
            [taskId]
        );

        if(subtasks.rows.length === 0){
            res.json({ message: "No subtasks created"})
        }

        res.json(subtasks.rows)

    } catch (error){
        console.log(error)
    }
})

router.post("/:id/subtasks", verifyToken, async (req, res) => {
    try{
        const { title, description, completed } = req.body;

        const taskId = req.params.id;

        const newSubtask = await pool.query(
            "INSERT INTO subtasks(task_id, title, description, completed) VALUES  ($1, $2, $3, $4) RETURNING *",
            [taskId, title, description, completed]
        )
        console.log(newSubtask.rows[0])

        res.json({ message: "Subtask successfully created", subtask: newSubtask.rows[0]})


    } catch(error){
        console.log(error)
    }
})

router.put("/:id/subtasks/:subtaskId", verifyToken, async (req, res) => {
    try{
        const { title, description, completed } = req.body;

        const taskId = req.params.id;
        const subtaskId = req.params.subtaskId;

        const updatedSubtask = await pool.query(
            "UPDATE subtasks SET title = $1, description = $2, completed = $3 WHERE id = $4 AND task_id = $5 RETURNING *",
            [title, description, completed, subtaskId, taskId]
        )
       
        if(updatedSubtask.rows.length === 0){
            return res.json({ message: "subtask not found"})
        }

        res.json({ message: "Subtask updated", subtask: updatedSubtask.rows[0]})

    } catch(error){
        console.log(error)
    }
})

router.delete("/:id/subtasks/:subtaskId", verifyToken, async (req, res) => {
    try{
        const taskId = req.params.id;
        const subtaskId = req.params.subtaskId;

        const deletedSubtask = await pool.query(
            "DELETE FROM subtasks WHERE id = $1 AND task_id = $2 RETURNING *",
            [subtaskId, taskId]
        );
       
        if(deletedSubtask.rows.length === 0){
            return res.json({ message: "subtask not found"})
        }

        res.json({ message: "Subtask deleted", subtask: deletedSubtask.rows[0] });

    } catch(error){
        console.log(error)
    }
})


module.exports = router;