import cors from "cors";
// load the express library
import express from "express";

// create a server
const app = express();
app.use(cors());
// when someone does GET /products...
app.get("/products", function(request, response) {

  // here is the data we want to send back
  const products = [
    {
        id: 1, 
        name: "Camiseta Mugmal", 
        price: 20,
        imageUrl: "https://imgs.search.brave.com/V2ls6ee7VxT7F6VIFkaqRlwXQRUisSAeBh9haApw6DU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdw/cm94eS5mb3VydGh3/YWxsLmNvbS91LWRU/YzJRYVhCR3UwUjZv/S0pwQ1UtSXFQazd5/TXpHOG9tVGJ3UXI3/TG53L3c6OTAwL3Nt/OjEvZW5jL0tCb3VS/cGVYTGhHQm9wSDAv/Z0lTZXpYdXpQcFBM/SFJhci82SEFMZGVm/UElFWWNHaDZFLzMt/Qi1GQm11azN6NlY1/ZFMvWUQxanRSckdf/c2FpQTFGby9aNFc1/TmpkN09GOHZ0OHRS/L1pUVnV2TzBEYzB1/OXFiNUcvM25sM3BX/d1d2TV9YbU5hZC9P/TDRmcHNmbTREbXpJ/QlNuLzl6emFEalFj/MnNuYnBEcXAvajRL/TmJBQXg0NlRER2Z3/US9ScDFSTFR6V3Fy/TjkyRWN4L0xHazEy/TTY5VWNoMDVTdzcv/cDNvUThEdWRtTW1C/N3llcS9xb21oQ2Yw/U2lqMA"
    },
    {
        id: 2, 
        name: "Taza Mugmal", 
        price: 99,
        imageUrl: "https://imgs.search.brave.com/0cIvZowGThFXSwe-D9qMFcX-qwlcOlGcBeWO5HmH3CQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZXZ3/ZWFyLmNvL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L0FXU19NMS5qcGc_/dj0xNjE0MzA1NTkx/JndpZHRoPTE0NDU"
    },
    {
        id: 3, 
        name: "Steam Deck", 
        price: 399,
        imageUrl: "https://imgs.search.brave.com/Oj0mDhTuqDH011S2sEU1GdDwJO-UiHDmISv0h1Ipajs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzYw/MzRkMWEzYzVmZDNh/MDZkMWEyODY4YjQ5/ZDI1M2NlMmRhZjYx/ZjcvaHViLzIwMjIv/MDIvMjEvNzJlZWIw/NDUtMGViMS00Yjc2/LWI5NDItM2Y5ZTJh/NGM4ZWRhL3N0ZWFt/LWRlY2stbWFpbi5q/cGc_YXV0bz13ZWJw/JndpZHRoPTEyMDA"
    }
  ];

  // send it back as json
  response.json(products);
});

// finally, start the server on port 3001
app.listen(3001, function() {
  console.log("backend running on http://localhost:3001");
});
