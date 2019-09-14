const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)





//1. Read the file as buffer info
const dataBuffer = fs.readFileSync('1-json.json');

//2. Convert the buffer info into JSON data(string)
const dataJSON = dataBuffer.toString();

//3. Parse the JSON data
const data = JSON.parse(dataJSON)

//4. I change some value of the JSON file
data.name = 'Lamata'

//5. I stringify the new data and re-write it in the original JSON file
//(Para sobreescribir un JSON file primero tenemos que "stringify it", y luego lo sobreescribimos)
fs.writeFileSync('1-json.json', JSON.stringify(data))



// Instrucciones para coger un .json file y poderlo usar en nuestro js:
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)

//Instrucciones para sobreescribir un .json
// fs.writeFileSync('1-json.json', JSON.stringify(data))
