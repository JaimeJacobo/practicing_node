const chalk = require('chalk');

const fs = require('fs')

const getNotes = ()=>{
  return 'Your notes...'
};

const addNote = (title, body) =>{
  const data = loadNotes();
  dataLength = data.length + 1;

  const duplicateNotes = data.filter((eachData)=>{
    return eachData.title === title
  })

  if(duplicateNotes.length === 0){
    data.push({
      id: dataLength,
      title: title,
      body: body
    })

    updateNotes(data)
  } else {
    console.log(chalk.bgRed('Note title taken'))
  }
};

const loadNotes = () =>{
  //If the JSON file already exists, use it
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
    //If the JSON file does not exist, return an empty array
  } catch (error){
    console.log(chalk.red('The JSON file did not exist, but it is now created.'))
    return []
  }
}

const updateNotes = (notes) =>{
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}