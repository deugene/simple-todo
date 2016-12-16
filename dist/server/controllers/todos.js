"use strict";
const todo_1 = require('../models/todo');
function action(promise, res, next) {
    promise
        .then(data => res.json({ message: 'success', data: data }))
        .catch(next);
}
exports.todos = {
    getAll(req, res, next) {
        let user_id = req.params.user_id;
        action(todo_1.Todo.find({ user_id: user_id }), res, next);
    },
    getTodo(req, res, next) {
        let id = req.params.id;
        action(todo_1.Todo.findById(id), res, next);
    },
    create(req, res, next) {
        let data = req.body;
        data.added = Date.now();
        let newTodo = new todo_1.Todo(data);
        action(newTodo.save(), res, next);
    },
    update(req, res, next) {
        let id = req.params.id;
        action(todo_1.Todo.findByIdAndUpdate(id, req.body), res, next);
    },
    updateAll(req, res, next) {
        let updatedTodos = req.body.todos;
        let count = 0;
        if (updatedTodos) {
            updatedTodos.forEach(updatedTodo => {
                todo_1.Todo.findByIdAndUpdate(updatedTodo._id, updatedTodo)
                    .then(() => {
                    if (++count === updatedTodos.length) {
                        res.json({ message: 'success', data: updatedTodos });
                    }
                })
                    .catch(next);
            });
        }
    },
    delete(req, res, next) {
        let id = req.params.id;
        action(todo_1.Todo.findByIdAndRemove(id), res, next);
    }
};
//# sourceMappingURL=todos.js.map