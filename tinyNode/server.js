var express = require('express'),
	app = express(),
	port = process.env.PORT || 3004,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	path = require('path'),
	multer = require('multer')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/student',
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
		console.log("Connected !!!")
	}).catch(err => {
		console.log(err);
	});

app.use(cors({}))
app.use(express.json());
app.use(express.static('img'))

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, 'img'))
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null, uniqueSuffix + '-' + file.originalname)
	}
})

const upload = multer({ storage: storage }).any()
app.use(upload)


var routes = require('./routes/studentRoute');
routes(app);

app.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);//lang nghe port

console.log('Server started on: ' + port);
