const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	content:{
		type: String
	},
	arrImage:{
		type: Array
	}
})

const model = new mongoose.model('Student', studentSchema)

module.exports = model