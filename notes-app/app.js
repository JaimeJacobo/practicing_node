

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note of the book',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(builder){
    console.log('Title: ' + builder.title + '\nBody: ' + builder.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  handler: function(){
    console.log('Removing the note')
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'Showing the list',
  handler: function(){
    console.log('Showing the list')
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Reading the list',
  handler: function(){
    console.log('Reading the list')
  }
})

yargs.parse()