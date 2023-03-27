// const http = require("http");
// const data = require("./utils/data");

// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url} = req;

//     if(url.includes("rickandmorty/character/")){
//         //Acá sacamos el id, que serían los últimos números ingresados luego de la última /
//         const id = url.split("/").at(-1);

//         //Acá le pedimos que busque el objeto dentro de data.js que corresponda al id ingresado
//         const character = data.find((char) => char.id == id);

//         if(character) {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             return res.end(JSON.stringify(character));
//         } else {
//             res.writeHead(404, { "Content-Type": "application/json" });
//             return res.end(JSON.stringify({ error: "Character not found"}));
//         }
        
//     }

// }).listen(3001, "localhost");

const getCharById = require("./controllers/getCharById")
const http = require("http");
const getCharDetail = require("./controllers/getCharDetail")

http.createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin","*");

    const {url} = req;

    if(url.includes("onsearch")){
        const id = url.split("/").at(-1);
        getCharById(res, id);
    }
    if(url.includes("detail")){
        const id = url.split("/").at(-1);
        getCharDetail(res, id);
    }
}).listen(3001, "localhost");
