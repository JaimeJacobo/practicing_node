

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//Notes is an object that has the info of notes.js
const notes = require('./notes.js');

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
  handler: function(answers){
    notes.addNote(answers.title, answers.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(answers){
    notes.removeNote(answers.title)
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