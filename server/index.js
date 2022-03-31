const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'shewhopraises',
  database: 'merry_meal_charity',
})

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
)
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// Login
app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.execute(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err })
      }
      if (result.length > 0) {
        res.send(result)
      } else
        ({
          message: 'Wrong username/password comination!',
        })
    }
  )
})

// Get Method
app.get('/members/get', (req, res) => {
  const sqlGet = 'SELECT* FROM members'
  db.query(sqlGet, (error, result) => {
    res.send(result)
  })
})

app.get('/caregiver/get', (req, res) => {
  const sqlGet = 'SELECT* FROM caregiver'
  db.query(sqlGet, (error, result) => {
    res.send(result)
  })
})

app.get('/delivery_partner/get', (req, res) => {
  const sqlGet = 'SELECT* FROM delivery_partner'
  db.query(sqlGet, (error, result) => {
    res.send(result)
  })
})

app.get('/donors/get', (req, res) => {
  const sqlGet = 'SELECT* FROM donors'
  db.query(sqlGet, (error, result) => {
    res.send(result)
  })
})

app.get('/volunteers/get', (req, res) => {
  const sqlGet = 'SELECT* FROM volunteers'
  db.query(sqlGet, (error, result) => {
    res.send(result)
  })
})

// Post Method for Members
app.post('/members/post', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    contact_number,
    dob,
    disability,
    disease_type,
    gender,
    location,
    street_address,
    city,
    state,
    zip_code,
    country,
  } = req.body
  const sqlInsert =
    'INSERT INTO members (first_name, last_name, email, contact_number, dob, disability, disease_type, gender, location, street_address, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  db.query(
    sqlInsert,
    [
      first_name,
      last_name,
      email,
      contact_number,
      dob,
      disability,
      disease_type,
      gender,
      location,
      street_address,
      city,
      state,
      zip_code,
      country,
    ],
    (error, result) => {
      if (error) {
        console.log(error)
      }
    }
  )
})

// Post Method for donation
app.post('/donors/post', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    contact_number,
    country,
    donation_amout,
  } = req.body
  const sqlInsert =
    'INSERT INTO donors (first_name, last_name, email, contact_number, country, donation_amout) VALUES (?, ?, ?, ?, ?, ?)'
  db.query(
    sqlInsert,
    [first_name, last_name, email, contact_number, country, donation_amout],
    (error, result) => {
      if (error) {
        console.log(error)
      }
    }
  )
})

// Post Method for volunteers
app.post('/volunteers/post', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    contact_number,
    dob,
    gender,
    employment_status,
    availability_for_part_time_workers,
    volunteer_role,
    reasons_for_getting_involved,
    street_address,
    city,
    state,
    zip_code,
    country,
  } = req.body
  const sqlInsert =
    'INSERT INTO volunteers (first_name, last_name, email, contact_number, dob, gender, employment_status , availability_for_part_time_workers,volunteer_role,reasons_for_getting_involved, street_address, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)'
  db.query(
    sqlInsert,
    [
      first_name,
      last_name,
      email,
      contact_number,
      dob,
      gender,
      employment_status,
      availability_for_part_time_workers,
      volunteer_role,
      reasons_for_getting_involved,
      street_address,
      city,
      state,
      zip_code,
      country,
    ],
    (error, result) => {
      if (error) {
        console.log(error)
      }
    }
  )
})

// app.get('/', (req, res) => {
//   const sqlInsert =
//     "INSERT INTO members (members_id, first_name, last_name, email, contact_number, dob, disability, disease_type, gender, location, street_address, city, state, zip_code, country) VALUES (0, 'John', 'Doe', 'john@gmail.com', '123456789', '2008-7-04', 'OKU', 'diabetes', 'Male', 'Penang', 'Jelutong', 'Penang', 'Penang', 13700, 'Malaysia');"
//   db.query(sqlInsert, (error, result) => {
//     console.log('error', error)
//     console.log('result', result)
//     res.send('Test')
//   })
// })

app.listen(3001, () => {
  console.log('running on port 3001')
})
