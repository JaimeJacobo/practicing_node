const chalk = require('chalk');

const fs = require('fs')

const getNotes = ()=>{
  return 'Your notes...'
};

const addNote = (title, body) =>{
  const data = loadNotes();

  const duplicateNotes = data.filter((eachData)=>{
    return eachData.title === title
  })

  if(duplicateNotes.length === 0){
    data.push({
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
    return title !== eachNote.title
  });

  if(data.length === filteredArray.length){
    console.log(chalk.bgRed('There is no note with that title'))
  } else {

    updateData(filteredArray);
    console.log(chalk.bgGreen('Note removed succesfully'));
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

const updateData = (newData) =>{
  fs.writeFileSync('notes.json', JSON.stringify(newData))
}

//This modules are being exported as 'notes'
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}