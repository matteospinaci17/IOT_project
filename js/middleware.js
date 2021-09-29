const express = require('express');
const app = express();
const mysql=require('mysql2');

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
});

const db = mysql.createConnection({
  host: "localhost",
  user: "davide10",
  password: "dad1998"
});

db.connect((err) => {
	if(err){
		throw err;
	}
	console.log('My sql connected...');
});

//create db
app.get('/createdb',(req,res) => {
	let sql = 'CREATE DATABASE parking';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
		res.send('Database created');
	});
});

//create table cars
app.get('/createcars',(req,res) => {
	let sql = 'CREATE TABLE parking.cars(id int AUTO_INCREMENT, plate VARCHAR(255), time_in VARCHAR(255),time_out VARCHAR(255), park_id int, PRIMARY KEY (id))';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
		res.send('Table cars created');
	});
});

//create table people
app.get('/createusers',(req,res) => {
	let sql = 'CREATE TABLE parking.users(name VARCHAR(255), cognome VARCHAR(255),plate VARCHAR(255),PRIMARY KEY (plate))';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
		res.send('Table users created');
	});
});
//insert values in people
app.get('/insertusers',(req,res) => {
	let sql = 'INSERT INTO parking.users VALUES ("Paolo", "Bianchi", "jfz5187"),("Silvia", "Rossi", "s0k92h"),("Giovanna", "Bianchi", "ab456cd"), ("Andrea", "sanguineti", "sn66xmz"),("Viola", "Devoto", "gb21cww"),("Luca", "Verdi", "284fh8"),("Federico", "Spinaci", "mh13cd0096"),("Matteo", "Cella", "ka64n0099"),("Enrico", "Raffo", "ky70cwt"),("Sara", "Nodejs", "b58bps")';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
		res.send('Values in table users inserted');
	});
});

//delete db
app.get('/dropdb',(req,res) => {
	let sql = 'DROP DATABASE parking ';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
res.send('Database parking dropped');
	});
});

//delete db
app.get('/droptable',(req,res) => {
	let sql = 'DROP TABLE parking.cars ';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
res.send('Table cars dropped');
	});
});

//delete samples in cars
app.get('/deleteall',(req,res) => {
	let sql = 'DELETE FROM parking.cars WHERE id>=0; ';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
res.send('All samples are deleted');
	});
});

//select table
app.get('/showcars',(req,res) => {
	let sql = 'SELECT * FROM parking.cars; ';
	db.query(sql, (err,result) => {
		if(err) throw err;
		console.log(result);
	    res.send(result);
	});
});
