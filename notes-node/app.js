const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'Show all notes', {
    })
    .command('read', 'Read a new note', {
        title
    })
    .command('remove', 'Remove a new note', {
        title
    })
    .help()
    .argv;

var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(typeof note == 'undefined'){
        console.log('Note was not saved');
    }
    else{
        console.log("Note saved");
        notes.logNote(note);
    }
}
else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read'){
    var noteRead = notes.getNote(argv.title);
    if(noteRead){
        console.log("Note found");
        notes.logNote(noteRead);
    }
    else{
        console.log("Note Not Found");
    }
}
else if(command === 'remove'){
   var message = notes.removeNote(argv.title) ? 'Note was removed' : 'Note not found';
   console.log(message);
}
else{
    console.log('Command not found');
}