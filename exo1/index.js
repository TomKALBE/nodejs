require('dotenv').config();
const mavariable = process.env['PORT'];
typeof mavariable === "undefined" ? console.log("Je suis en PROD") : console.log("Je suis en DEV");
