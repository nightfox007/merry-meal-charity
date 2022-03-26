const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const mysql = require('mysql2')
// const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'shewhopraises',
  database: 'merry_meal',
})

// app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const sqlInsert =
    "INSERT INTO members (members_id, first_name, last_name, email, contact_number, gender, dob, disease_type, disability, location, street_address, city, state, zip_code, country) VALUES (1, 'John', 'Doe', 'john@gmail.com', '123456789', 'male', '2008-7-04', 'diabetes', 'none', 'location', 'street_address', 'city', 'state', 13700, 'country', );"
  db.query(sqlInsert, (error, result) => {
    console.log('error', error)
    console.log('result', result)
    res.send('Test')
  })
})

app.listen(3001, () => {
  console.log('running on port 3001')
})
