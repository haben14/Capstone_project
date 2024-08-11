const express = require('express');
const mariadb = require('mariadb');
const { Sequelize } = require('sequelize')
const sequelize = require('./config')
const User = require('./models/User');
const Bodytype_calories = require('./models/Bodytype_calories');
const Workout = require('./models/Workout');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;
app.use(express.json());
const SECRET_KEY ='code1234';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.listen(port, ()=>{
    console.log('Server is running');


   // sequelize.sync({ force: true}).then(async()=> {
    //    console.log('Database & tables creates!');
   // })
})

app.post('/register', async(req, res) => {
    const{Firstname, Lastname, email, username, password} = req.body;
    const newUser =await User.create({Firstname, Lastname, email, username, password});
    res.status(201).json(newUser);

})

app.post('/login', async(req, res) => {
    const{ username, password} = req.body;

    const user = await User.findOne({where: {username}});

    if(!user){
        return res.status(400).json({erro: 'invalid username or password'});
    }

    
    
    if(password !== user.password){
            return res.status(400).json({erro: 'invalid username or password'});
    }
    
    const token = jwt.sign({username: user.username}, SECRET_KEY, {expiresIn:'1h'});
        res.status(200).json({token, message: 'login sucessful'});


    })

    app.get('/caloric_output', async (req, res) => { // Define route handler for GET requests to '/caloric_output'
      try {
        const { bodytype, sex } = req.query; // Extract 'bodytype' and 'sex' from the query parameters
    
        // Find the matching record based on bodytype and sex
        const result = await Bodytype_calories.findOne({
          where: {
              Bodytypes: bodytype,
              Sexs: sex,
          },
        });
    
        if (result) { // If a matching record is found
          res.status(200).json({ caloric_output: result.Caloric_output }); // Send a 200 OK response with the caloric output
        } else { // If no matching record is found
          res.status(404).json({ message: 'Record not found' }); // Send a 404 Not Found response
        }
      } catch (error) { // If an error occurs
        console.error('Error retrieving caloric output:', error); // Log the error
        res.status(500).json({ message: 'Internal server error' }); // Send a 500 Internal Server Error response
      }
    });
    



    app.get('/Excercise', async (req, res) => {
      try {
        const { Bodytypes, Sexs, Week_day } = req.query;
    
        const result = await Workout.findOne({
          where: {
            Bodytypes: Bodytypes,
            Sexs: Sexs,
            Week_day: Week_day,
          },
        });
    
        if (!Bodytypes || !Sexs || !Week_day) {
          return res.status(400).json({ message: 'All parameters must be provided' });
        }       
        if (result) {
          res.status(200).json({ excercise: result.Excercise });
        } else {
          res.status(404).json({ message: 'Record not found' });
        }
      } catch (error) {
        console.error('Error retrieving exercise:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
      