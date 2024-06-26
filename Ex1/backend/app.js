require('dotenv').config({path: './.env'})

const express = require('express');
const app = express();

const path =  require('path')

// 1er middleware : ex. d'affichage d'informations dans la console
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs'); // Définition du moteur de rendu 
app.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues

//Version1
// app.get('/',(req, res) => {
//     // demande de rendu EJS
//     sex = req.query.sex
//     nickname = req.query.nickname 
//     res.render('pages/home',{ nickname: nickname,sex: sex}) ; // on donne le chemin dans views, et on omet le .ejs
// });

/*Version 2

app.get('/',(req, res) => {
        // demande de rendu EJS
        const user = {
            sex : req.query['user[sex]'],
            nickname : req.query['user[nickname]']
        }
        
        res.render('pages/home',{ user: user}) ; // on donne le chemin dans views, et on omet le .ejs
    });*/


// 2ème middelware : envoi de la réponse


//const port = process.env.PORT || 3000
/*app.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.01:${port}/`);
})*/

//Exercice 2
//importation de express-ejs-layouts
const expresslayouts = require('express-ejs-layouts')

// Ajout du middleware
app.use(expresslayouts)

//definition du layout par defaut
app.set('layout','../views/layouts/layout')

app.use((req,res)=>{
    res.render('pages/home',{user:'celestin'})
})
const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
module.exports = app;