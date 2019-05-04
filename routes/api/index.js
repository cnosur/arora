const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios");

const APIKEY = "5301a1bf9c54853944bd7c37c58fde18"

// Book routes
router.use("/books", bookRoutes);

router.get("/weather", function (req, res) {
    axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903`)
    .then(response => res.json(response.data))
    .catch(err => res.json("sadness"))
} )


module.exports = router;
