import express from 'express';
const app = express()

const currentUser = {
      firstName : "Jose",
      lastName: "Salina",
      email : "josevalentinsp@gmail.com",
      password:"123456"
    };

const question = {
    _id: 1,
    title:'¿Cómo reutilizo un componente en Android jajajaj?',
    description: 'Miren es mi pregunta...',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user : {
      firstName : "Jose",
      lastName:"Salina",
      email : "josevalentinsp@gmail.com",
      password:"123456"
    }
};

function questionMiddleware(req, res, next){
  const {id} = req.params
  req.question =  questions.find(({_id}) => _id === +id)
  next();
}

function userMiddleware(req, res, next){
  req.user = currentUser;
  next();
}

const questions = new Array(10).fill(question);

// GET /api/questions
app.get('/', (req, res) =>{res.status(200).json(questions)})

app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.question)
})

// POST /api/questions/
app.post('/', userMiddleware, (req,res) => {
  const question = req.body
  question._id= + new Date()
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  questions.push(question)
  res.status(200).json(question);
})

app.post('/:id/answer', questionMiddleware, userMiddleware, (req, res) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer) 

})


export default app;
