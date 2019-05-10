const mongoose = require ("mongoose");
const db = require ("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/colors"
);

// colorTheme: { type: Array, required: true },
// date: { type: Date, default: Date.now }
const colorSeed = [
  {
    name: "Blue, Orange, Red",
    artist: "Mark Rothko",
    colorTheme: ["#04315B", "#013692", "#E75A00", "#E72401", "#b1190c"],
    imageURL: "https://pbs.twimg.com/media/Dn8f6x7XUAA9368.jpg:large",
    colorURL: "",
    date: new Date(Date.now())
  },
  {
    name: "Woman with a Head of Roses",
    artist: "Salvador Dali",
    colorTheme: ["#2a3972", "#3e6662", "#4E8D85", "#D88D0E", "#832615"],
    imageURL: "https://imgc.artprintimages.com/img/print/salvador-dal-woman-with-a-head-of-roses_u-l-ers060.jpg?src=gp&w=300&h=300",
    colorURL: "",
    date: new Date(Date.now())
  }
  ,

  {
    name: "Andromeda",
    artist: "Damien Hirst",
    colorTheme: ["#7A1F65", "#1D71AD", "#139394", "#D86296", "#CB0F10"],
    imageURL: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=400&height=291&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FyyHplmnqAhgkTFjcCVnj0g%2Flarge.jpg",
    colorURL: "",
    date: new Date(Date.now())
  }

  ,

  {
    name: "Haystacks Sunsets",
    artist: "Claude Monet",
    colorTheme: ["#1F4F91", "#84A68B", "#DAA281", "#F7BE64", "#C24C2E"],
    imageURL: "https://media.architecturaldigest.com/photos/5c8baea24da8c8001afebff7/3:4/w_1757,h_2343,c_limit/10067%20Monet,%20Meules.jpg",
    colorURL: "",
    date: new Date(Date.now())
  }
  ,
  {
    name: "The Banquet",
    artist: "Rene Margritte",
    colorTheme: ["#232e6b", "#194047", "#3c5943", "#BE501D", "#882721"],
    imageURL: "https://www.renemagritte.org/images/paintings/the-banquet.jpg",
    colorURL: "",
    date: new Date(Date.now())
  },
  {
    name: "Blue Room",
    artist: "Henri Matisse",
    colorTheme: ["#0F1D5A", "#17328B", "#66B8EA", "#EFAA1F", "#9C1B06"],
    imageURL: "https://i.pinimg.com/originals/8f/e5/59/8fe5595993927befa23a70a9d3ece51b.jpg",
    colorURL: "",
    date: new Date(Date.now())
  },
  {
    name: "Boy and Dog in a Johnnypump",
    artist: "Jean Michel Basquiat",
    colorTheme: ["#37568C", "#5A8C5B", "#F1DD64", "#EC7811", "#B11C04"],
    imageURL: "https://d2jv9003bew7ag.cloudfront.net/uploads/Jean-Michel-Basquiat-Boy-and-Dog-in-a-Johnnypump.-1982.jpg",
    colorURL: "",
    date: new Date(Date.now())
  },
  {
    name: "The Swan No. 17",
    artist: "Hilma af Klint",
    colorTheme: ["#E5DED4", "#4D89BD", "#EEC472", "#C5523D", "#2B292A"],
    imageURL: "https://i.imgur.com/lPdDO6T.jpg",
    colorURL: "",
    date: new Date(Date.now())
  },
  {
    name: "Crows over a Cornfield",
    artist: "Vincent VanGough",
    colorTheme: ["#284253", "#4d7186", "#f4a720", "#ef8c12", "#e0542e"],
    imageURL: "https://imgc.artprintimages.com/img/print/wheatfield-with-crows-c-1890_u-l-f25nmp0.jpg?h=550&w=550",
    colorURL: "",
    date: new Date(Date.now())
  },  {
    name: "deKooning diVinci",
    artist: "William deKooning",
    colorTheme: ["#C64277","#E36172", "#FC8669", "#FDA860", "#ffd756"],
    imageURL: "https://assets.saatchiart.com/saatchi/890003/art/3509161/2579048-NCUMXDHW-6.jpg",
    colorURL: "",
    date: new Date(Date.now())
  },
  {
    name: "Abstraktes Bild",
    artist: "Gerhard Richter",
    colorTheme: ["#015383", "#018E9F", "#198112", "#FECA64", "#B3171A"],
    imageURL: "https://news.artnet.com/app/news-upload/2017/01/image-2-750x550.jpg",
    colorURL: "",
    date: new Date(Date.now())
  }

];

db.Color
  .remove({})
  .then(() => db.Color.collection.insertMany(colorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
