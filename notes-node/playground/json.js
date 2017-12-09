/*
var obj = {
    name: 'Jason',
    yob: 1976
};
var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);*/
/*
var personString = '{"name": "Jason","age": 41}';
var person = JSON.parse(personString);
var personJsonObj = JSON.stringify(person);
console.log(personString, typeof person, person, personJsonObj);*/

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note, note.title, originalNote);