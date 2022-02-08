const model = require('../models/studentModel')
const url = 'http://localhost:3004/'
const fs = require('fs')
exports.getStudent = async (req, res, next) => {
	try {
		const getStudent = await model.find()
		res.send({ studentData: getStudent })
	} catch (error) {
		res.send(404, error)
	}
}
exports.addStudent = async (req, res, next) => {
	try {
		const content = req.body.content
		const arrImage = req.body.arrImage
		const addStudent = await model.create({ content: content, arrImage: arrImage })
		res.send({ studentData: addStudent })
	} catch (error) {
		res.send(404, error)
	}
}
exports.addArrImage = async (req, res, next) => {
	try {
		const file = req.files
		const arrImage = []
		for (let i = 0; i < file.length; i++) {
			var imageUrl = url + file[i].filename
			arrImage.push(imageUrl)
		}
		res.send({ arrImage: arrImage })
	} catch (error) {
		res.send(404, error)
	}
}

exports.deleteStudent = async (req, res, next) => {
	try {
		const id = req.params.id
		const deleteStudent = await model.findByIdAndDelete(id)
		const urlImage = deleteStudent.arrImage
		for (let i = 0; i < urlImage.length; i++) {
			if (deleteStudent.content.includes(urlImage[i][0]) === true) {
				console.log(`img/${urlImage[i][0].slice(22)}`);
				fs.unlink(`img/${urlImage[i][0].slice(22)}`, () => { })
			}
		}
		res.send({ studentData: deleteStudent })
	} catch (error) {
		res.send(404, error)
	}
}

exports.updateStudent = async (req, res, next) => {
	try {
		const id = req.params.id
		const content = req.body.content
		const updatedArrImage = req.body.arrImage
		console.log(updatedArrImage, 'lll');
		const updateStudent = await model.findByIdAndUpdate(id, { content: content, arrImage: updatedArrImage });

		// if (updatedArrImage.length === 0) {
		// 	const updateStudent = await model.findByIdAndUpdate(id, { content: content });
		// 	const oldImage = updateStudent.arrImage
		// 	const updatedStudent = await model.findById(id)
		// 	const newContent = updatedStudent.content
		// 	for (let i = 0; i < oldImage.length; i++) {
		// 			if (newContent.includes(oldImage[i][0]) === false) {
		// 				fs.unlink(`img/${oldImage[i][0].slice(22)}`, () => { })
		// 		}

		// 	}
		// } else {
		// 	const updateStudent = await model.findByIdAndUpdate(id, { content: content, arrImage: updatedArrImage });
		// 	const oldImage = updateStudent.arrImage
		// 	const updatedStudent = await model.findById(id)
		// 	const newImage = updatedStudent.arrImage
		// 	for (let i = 0; i < oldImage.length; i++) {
		// 		for (let j = 0; j < newImage.length; j++) {
		// 			if (newImage[j][0].includes(oldImage[i][0]) === true) {
		// 				fs.unlink(`img/${oldImage[i][0].slice(22)}`, () => { })
		// 			}
		// 		}

		// 	}
		// }
		// console.log(updateImage, 'kdskds');
		res.send({ studentData: updateStudent })
	} catch (error) {
		res.send(404, error)
	}
}