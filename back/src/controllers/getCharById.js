const axios = require("axios");

const URL = "https://be-a-rym.up.railway.app/api"
const KEY = "dac1f7ac8c54.6d7aadaf056f93592c47";


const getCharById = (req, res) => {
    const {id} = req.params;

    axios
        .get(`${URL}/character/${id}?key=${KEY}`)
        .then((response) => {
            const { id, name, species, image, gender } = response.data;
            res.status(200).json({ name, species, image, gender});
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        })
}

module.exports = getCharById;