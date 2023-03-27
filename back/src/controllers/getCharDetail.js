const axios = require("axios")

const URL = "https://be-a-rym.up.railway.app/api"
const KEY = "dac1f7ac8c54.6d7aadaf056f93592c47";

const successH = (response,res) => {
    const {name, gender, status, origin, species, image} = response.data;
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify({name, gender, status, origin, species, image}));
};

const errorH = (error, res) => {
    res.writeHead(500,{"Content-Type":"application/json"});
        res.end(error.message);
};


const getCharDetail = (res, id) => {

    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response)=>successH(response,res))
    .catch((error)=> errorH(error,res));
    

};

module.exports = getCharDetail;





