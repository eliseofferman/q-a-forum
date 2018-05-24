import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import bcrypt from "bcrypt-nodejs"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(cors())

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/faq-forum"
mongoose.connect(mongoUrl, { useMongoClient: true })

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Topic = mongoose.model("Topic", {
  name: String,
  headline: String,
  content: String
})

const Answer = mongoose.model("Answer", {
  answer: String,
  topicId: String
})

app.get("/faq", (req, res) => {
  Topic.find().then(newTopic => {
    console.log(newTopic)
    res.json(newTopic)
  })
})

app.get("/answer", (req, res) => {
  Answer.find().then(newAnswer => {
    console.log(newAnswer)
    res.json(newAnswer)
  })
})

app.post("/faq", (req, res) => {
  const topic = new Topic(req.body)
  console.log(topic)

  topic.save()
    .then(() => { res.status(201).json({ created: true }) })
    .catch(err => { res.status(400).send(err.message) })
})

app.post("/answer", (req, res) => {
  const answer = new Answer(req.body)
    console.log(answer)

  answer.save()
    .then(() => { res.status(201).json({ created: true }) })
    .catch(err => { res.status(400).send(err.message) })
})

app.delete("/answer", (req, res) => {
  Answer.remove({ topicId: req.body.topicId }, function(err) {
    if (!err) {
            res.status(200).json({ removed: true })
    }
    else {
            res.status(400).json({ removed: false })
    }
})
})

app.delete("/faq", (req, res) => {
  Topic.remove({ _id: req.body._id }, function(err) {
    if (!err) {
            res.status(200).json({ removed: true })
    }
    else {
            res.status(400).json({ removed: false })
    }
})
})

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log("Forum listening on port 8080!"))
