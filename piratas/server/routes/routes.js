
const authenticate = require('../config/authenticate');
const { register, login, logout, getAll, getUser} = require('../controllers/user.controller');
const { createNewPirate, findAllPirates, findOnePirate, changeFeatures, deletePirate} = require('../controllers/pirate.controller')

module.exports = app =>{

    app.post("/api/register", register);
    app.post("/api/login", login);
    app.post("/api/logout", logout);
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", authenticate, getAll);
    app.get('/api/user/:id', authenticate, getUser);

    //Rutas piratas
    app.post("/api/pirate/new",createNewPirate);
    app.get("/api/pirates",findAllPirates);
    app.get("/api/pirate/:id",findOnePirate);
    app.post("/api/pirate/changefeatures/:feature/:id",changeFeatures);
    app.delete("/api/pirate/delete/:id",deletePirate);

}