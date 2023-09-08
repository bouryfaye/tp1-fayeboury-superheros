const express = require("express");
const app = express();
const path = require('path');
const request = require("request"); /*on a besoin de la librairie Request ici */
const fs = require("fs"); /*on appelle la librairie filesystem fs */
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");


app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", (req, res) => {
    
  async function getData(){

    //J'aurais pu optimiser mon code ici en utilisant une boucle pour éviter les répétitions... 

    const url1 = "https://superheroapi.com/api/" + API_KEY + "/" + 1
    const url2 = "https://superheroapi.com/api/" + API_KEY + "/" + 2
    const url3 = "https://superheroapi.com/api/" + API_KEY + "/" + 3
    const url4 = "https://superheroapi.com/api/" + API_KEY + "/" + 4
    const url5 = "https://superheroapi.com/api/" + API_KEY + "/" + 5
    const url6 = "https://superheroapi.com/api/" + API_KEY + "/" + 6
    const url7 = "https://superheroapi.com/api/" + API_KEY + "/" + 7
    const url8 = "https://superheroapi.com/api/" + API_KEY + "/" + 8
    const url9 = "https://superheroapi.com/api/" + API_KEY + "/" + 9
    const url10 = "https://superheroapi.com/api/" + API_KEY + "/" + 10

    const response1 = await fetch(url1)
    const data1 = await response1.json()
    console.log(data1)

    const response2 = await fetch(url2)
    const data2 = await response2.json()
    console.log(data2)

    const response3 = await fetch(url3)
    const data3 = await response3.json()
    console.log(data3)

    const response4 = await fetch(url4)
    const data4 = await response4.json()
    console.log(data4)

    const response5 = await fetch(url5)
    const data5 = await response5.json()
    console.log(data5)

    const response6 = await fetch(url6)
    const data6 = await response6.json()
    console.log(data6)

    const response7 = await fetch(url7)
    const data7 = await response7.json()
    console.log(data7)

    const response8 = await fetch(url8)
    const data8 = await response8.json()
    console.log(data8)

    const response9 = await fetch(url9)
    const data9 = await response9.json()
    console.log(data9)

    const response10 = await fetch(url10)
    const data10 = await response10.json()
    console.log(data10)

    const mergeData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]

    const mergeDatas = JSON.stringify(mergeData)

    fs.writeFile(__dirname+'/frontend/static/js/views/fusionDonnees.json', mergeDatas, err => { /*on sauvegarde maintenant les données data dans un fichier */
      if(err) throw err;
      console.log('File saved successfully !')
    })

  }

  getData();
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));

})


app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
