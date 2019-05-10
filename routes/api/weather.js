const router = require("express").Router();
const axios = require("axios");

const APIKEY = "5301a1bf9c54853944bd7c37c58fde18"

// let TIME = 1557295200
// var fData = []


router.get("/", function (req, res) {
    axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903`)
        .then(response => res.json(response.data))
        .catch(err => res.json("sadness"))
})

// router.get("/forecast", function (req, res) {

//     // if (fData === []) {
    
//     for (var i = 1; i < 8; i++) {
//         axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903,${TIME}`)
//             .then(response => {
//                 fData.push(
//                     { group: i, variable: "00", value: response.data.hourly.data[0].apparentTemperature },
//                     { group: i, variable: "04", value: response.data.hourly.data[4].apparentTemperature },
//                     { group: i, variable: "08", value: response.data.hourly.data[8].apparentTemperature },
//                     { group: i, variable: "12", value: response.data.hourly.data[12].apparentTemperature },
//                     { group: i, variable: "16", value: response.data.hourly.data[16].apparentTemperature },
//                     { group: i, variable: "20", value: response.data.hourly.data[20].apparentTemperature },
//                     { group: i, variable: "24", value: response.data.hourly.data[23].apparentTemperature }
//                 )

//             }
//             )
//         TIME = TIME + 86400;
//             console.log(TIME)
//     }
//     return res.json(fData)
//         .catch(err => res.json("sadness"))
// }  
// // }

// )

router.get("/weather/history", function (req, res) {
    axios.get(`https://api.darksky.net/forecast/${APIKEY}/39.7392,-104.9903`)
        .then(response => res.json(response.data))
        .catch(err => res.json("sadness"))
})

module.exports = router;
