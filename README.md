install dependencies using npm i
Create database testdb, create with username: new_user  password: Passion_123 in mysql
Run project using node src/server.js, connect with the database and port is listening on 3000 
Table excelImporters will be created in testdb database

upload excel using postman 
post method route 'http://localhost:3000/api/excel/upload'
postman: Inside body> formdata> key should be file & value should be templateShedule.xlsx.
After uploading file records with all the required fields will be saved to the table.

saved records can be verified with GET method 'http://localhost:3000/api/excel/employees'
via postman.

Uploaded excel files will appear in resources/static/assets/uploads folder