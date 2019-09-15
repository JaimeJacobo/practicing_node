const chalk = require('chalk');

const fs = require('fs')

const getNotes = ()=>{
  return 'Your notes...'
};

const addNote = (title, body) =>{
  const data = loadNotes();
  dataLength = data.length;

  const filteredArray = data.filter((eachData)=>{
    return eachData.title === title
  })

  if(filteredArray.length === 0){
    data.push({
      position: dataLength,
      title: title,
      body: body
    })

    updateData(data)
  } else {
    console.log(chalk.bgRed('Note title taken'))
  }
};

const removeNote = (title)=>{
  const data = loadNotes();

  let filteredArray = data.filter((eachNote)=>{
    return title === eachNote.title
  });

  if(filteredArray.length !== 0){
    console.log('You want to delete the title with the position number ' + filteredArray[0].position)
    console.log(filteredArray[0].position)
    data.splice(filteredArray[0].position, 1)
    console.log(data)

    updateData(data);

  } else {
    console.log(chalk.bgBlue('There is no note with that title'))
  };
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

const updateData = (newData) =>{
  fs.writeFileSync('notes.json', JSON.stringify(newData))
}

//This modules are being exported as 'notes'
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}