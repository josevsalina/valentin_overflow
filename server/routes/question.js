import express from 'express';
const app = express()

const question = {
    _id: 1,
    title:'¿Cómo reutilizo un componente en Android?',
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

const questions = new Array(10).fill(question);

// /api/questions
app.get('/', (req, res) =>{res.status(200).json(questions)})

app.get('/:id', (req, res) => res.status(200).json(question))

export default app;
