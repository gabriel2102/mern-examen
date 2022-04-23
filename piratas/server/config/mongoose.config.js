const mongoose = require("mongoose");

mongoose.connect(process.env.DB_LINK, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conectado a Base de datos "+process.env.DB_LINK))
	.catch(err => console.log("Algo salió mal", err));