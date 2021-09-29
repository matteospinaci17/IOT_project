# IOT_final_project

# Instructions for VP Dibris Parking project test  
  
Software needed:  
- Node.JS  
- Node-red  
- MySQL  
- Mosquitto  
- Php  
  
Packages and nodes for Node-red  
- MySQL  
- MQTT  
- plate-recognizer node  
- Node-RED dashboard  
  
# Steps:  
Launch Node-RED (http://localhost:1880/) and 
connect to Node-RED dashboard (http://localhost:1880/ui)  
  
Run middleware.js and do this GET request by adding these commands to this path: 
http://localhost:3000   
- /createdb : create database parking in MySQL;  
- /createcars : create empty table cars;  
- /createusers : create empty table Users;  
- /insertusers : insert values in Users table;  
- /droptable : if you want to delete table cars;  
- /dropdb : if you want to delete database parking;  
- /deleteall : if you want to delete all values from cars;  
- /showcars: to obtain all the values of cars in JSON form.  
  
Move to Node-RED and use these three different inject nodes:  
- Setup Flow: define size of parking and truncate table cars;  
- Car detected enter: insert a car in the parking;  
- Car detected leave: simulate car exit.  
  
Switch to Node-RED dashboard to watch in real-time the evolution of the parking.  
  
Connect to MySQL in order to see the two different tables in database parking.  
  
Moreover, if you run a php server in the same directory of the .php files  
this command: php -S localhost:4000 you can make http request to the database.
  More informations about this project be found in this video presentation  
https://drive.google.com/file/d/12pL41AbxzLZoF11Tgh2k7numcWg9tYEl/view?usp=sharing
