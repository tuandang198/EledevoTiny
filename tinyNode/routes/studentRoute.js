const controller = require('../controllers/studentController')

const route = (app) => {
	app.get('/student', controller.getStudent)
	app.post('/student', controller.addStudent)
	app.post('/studentImage', controller.addArrImage)
	app.delete('/student/:id', controller.deleteStudent)
	app.put('/student/:id', controller.updateStudent)
}

module.exports = route