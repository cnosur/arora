const router = require("express").Router();
const weatherRoutes= require("./weather")
const colorRoutes= require("./colors")
// const axios = require("axios");

// const APIKEY = "5301a1bf9c54853944bd7c37c58fde18" 

// router.get("/weather", function (req, res) {
//     axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903`)
//     .then(response => res.json(response.data))
//     .catch(err => res.json("sadness"))
// } )

// router.get("/weather/forecast", function (req, res) {
//     axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903`)
//     .then(response => 
//         {   var array = [];
//             let todaysTemp = response.data.currently.apparentTemperature 
//             array.push(
//                 {group: todaysTemp, variable: "00", value: null},
//                 {group: todaysTemp, variable: "04", value: null},
//                 {group: todaysTemp, variable: "08", value: null},
//                 {group: todaysTemp, variable: "12", value: null},
//                 {group: todaysTemp, variable: "16", value: null},
//                 {group: todaysTemp, variable: "20", value: null},
//                 {group: todaysTemp, variable: "24", value: null}
//                 )
//          return res.json(array)})
//     .catch(err => res.json("sadness"))
// } )

// router.get("/weather/history", function (req, res) {
//     axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903`)
//     .then(response => res.json(response.data))
//     .catch(err => res.json("sadness"))
// } )

router.use("/weather", weatherRoutes);

router.use("/colors", colorRoutes);

module.exports = router;
