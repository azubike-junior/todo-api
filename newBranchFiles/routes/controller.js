const data = require('../data')

const getTodos = (req, res) => {
     return res.status(200).json(data)
}

const getTodoById = (req, res) => {
    let found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        return res.status(200).json(found)
    } else {
        return res.sendStatus(404)
    }
}

const createTodo = (req, res) => {
     let itemId = data.map(item => item.id)
     let itemOrd = data.map(item => item.order)

     let newId = itemId.length > 0 ? Math.max.apply(Math, itemId) + 1 : 1;
     let newOrd = itemOrd.length > 0 ? Math.max.apply(Math, itemOrd) + 1 : 1;

     let newItem = {
         id: newId,
         title: req.body.title,
         order: newOrd,
         completed: false,
         createdOn: new Date()
     }

     data.push(newItem)

     return res.status(200).json(data)
}

const updateTodo = (req, res) => {
    const {
        id,
        title,
        order,
        completed
    } = req.body
    let found = data.find(item => item.id === id)

    if (found) {
        let updated = {
            id: found.id,
            title: title,
            order: order,
            completed: completed,
            createdOn: new Date()
        };

        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1, updated)

        return res.sendStatus(204)
    } else {
        return res.sendStatus(404)
    }
}

const deleteTodo = (req, res) =>{
    let found = data.find(item => item.id === parseInt(req.params.id))
    if (found) {
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1)

        return res.sendStatus(204)
    } else {
        return res.sendStatus(404)
    }
}

module.exports = {getTodos, getTodoById, createTodo, updateTodo, deleteTodo}

