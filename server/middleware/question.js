

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
export const questions = new Array(10).fill(question);

export const questionsMiddleware = (req, res, next) =>{
  req.questions = questions
  next();
}

export const questionMiddleware = (req, res, next)=>{
  const {id} = req.params
  req.question =  questions.find(({_id}) => _id === +id)
  next();
}

