const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('.\database1\webtech.db', (err) => {
if (err) {
console.error(err.message);
}
console.log('Successfully connected to webtech database.');

});

db.run('CREATE TABLE IF NOT EXISTS students (studentId VARCHAR(20) NOT NULL, studentName VARCHAR(20) NOT NULL,programGroup VARCHAR(20) );', (err) => {
if (err) {
console.log('ERROR!', err)
}
else {
console.log('students table created!!')
}
})

db.run("INSERT INTO students (studentId,studentName,programGroup) VALUES (100,'Manpreet','CPCT');", (err) => {
if (err) {
console.log('ERROR!', err)
}
else {
console.log('Successfully inserted data into students table!!')
}
})

db.all("SELECT studentId || ' - ' || studentName || ' - ' || programGroup FROM students;", [], (err, rows) => {
if (err) {
throw err;
}
rows.forEach((row) => {
console.log(row.emp);
});
});

db.run('CREATE TABLE IF NOT EXISTS classes (classId VARCHAR(20) NOT NULL, className VARCHAR(20) NOT NULL,room VARCHAR(20) NOT NULL, datesession VARCHAR(20) NOT NULL);', (err) => {
if (err) {
console.log('ERROR!', err)
}
else {
console.log('classes table created!!')
}
})

db.run("INSERT INTO classes (classId,className,room,datesession) VALUES ('C1','java','B230','THU');", (err) => {
if (err) {
console.log('ERROR!', err)
}
else {
console.log('Successfully inserted data into classes table!!')
}
})

db.all("SELECT classId || ' - ' || className || ' - ' || room || ' - ' || datesession FROM classes;", [], (err, rows) => {
if (err) {
throw err;
}
rows.forEach((row) => {
console.log(row.emp);
});
});

db.run('CREATE TABLE IF NOT EXISTS enrollment (enrollmentId VARCHAR(20) NOT NULL, studentId VARCHAR(20) NOT NULL, classId VARCHAR(20) NOT NULL);', (err) => {
if (err) {
console.log('ERROR!', err)
}
else {
console.log('enrollment table created!!')
}
})

db.run("INSERT INTO enrollment (enrollmentId,studentId,classId,) VALUES ('E1,'100','C1');", (err) => {
if (err) {
console.log('ERROR!', err)
}
else {
console.log('Successfully inserted data into enrollment table!!')
}
})

db.all("SELECT enrollmentId || ' - ' || studentId || ' - ' || classId FROM enrollment;", [], (err, rows) => {
if (err) {
throw err;
}
rows.forEach((row) => {
console.log(row.emp);
});
});

db.close();