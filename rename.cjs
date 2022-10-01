const fs = require('fs');
const fileName = './static/exercises.json';
const file = require(fileName);

const exes = file.exercises;


let count = 0;

const newExes = {} 
exes.forEach(e => {
    e.id = count++;

    return newExes[e.id] = e;
})


fs.writeFile(fileName, JSON.stringify(newExes, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
	console.log(JSON.stringify(file));
	console.log('writing to ' + fileName);
});
