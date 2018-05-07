// require and instantiate express
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

const url = 'https://jsonplaceholder.typicode.com/posts'
const ans = [
  {
   description:"I am a Freelance Full Stack Web Developer and Automation Tester having skills in all phases of web Development,software Testing ,Creating Responsive Websites-application,integrating them and finally, deploying fully functional websites"
  },
  {
  tech:"Learn as much as can"
  },
  {
  techStack:"Nodejs Expressjs,Angular,Mongo and PostgreSQL"
  },
  {
   hobbies:"Reading Writing Novels,Playing hard core Games"
  }
]
const ques = [
  {
  q:"Tell me a little bit about yourself?"
  },
  {
  q:"What excites you about technology? "
  },
  {
  q:"What is your preferred technology stack?"
  },
  {
  q:"What are your favorite hobbies?"
  }
]

request(url, (error, response, body)=> {

const posts = JSON.parse(body)
app.get('/posts', (req, res) => {
  res.render('index', {posts})

})

app.get('/post/:id', (req, res) => {
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]
  res.render('item', {
    title: post.title,
    body: post.body
  })
})
});   
app.get('/aboutme', (req, res) => {
  res.render('aboutme', { ans ,ques,que:{} });
});
app.post('/aboutme', (req, res) => {
res.render('aboutme', { 
     ans,ques,
  que:req.body.Questions
   });
})
app.listen(8080)
console.log('listening on port 8080')
