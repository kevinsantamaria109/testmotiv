var express = require("express");
var route = express.Router();


route.get("/", (req, response)=> {
    console.log("Page d'acceuil demandée");
    response.end("Page d'acceuil demandée");
})

route.post("/test", (req, response)=> {
    console.log("demande recu avec methode post sur l'url /test");
    response.end("bonjour Client post");
})
//Gèrer l'erreur 404
route.use((req,response,suite) =>{
    const error = new Error("page not find");
    error.status= 404;
    suite(error);// envoie à la route du bas  avec "error" generée
})
//Gèrer toutes les erreurs
route.use((req,response) =>{
    //erreur  500 -> serveur
    response.status(error.status || 500);
    response.end(error.message);
})

module.exports = route;