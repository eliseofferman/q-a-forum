import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import bcrypt from "bcrypt-nodejs"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(cors())
mongoose.connect("mongodb://localhost/faq-forum", { useMongoClient: true })

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

app.post("/faq", (req, res) => {
  const topic = new Topic(req.body)
  console.log(topic)
  const answer = new Answer(req.body)

  topic.save()
    .then(() => { res.status(201).json({ created: true }) })
    .catch(err => { res.status(400).send(err.message) })

  answer.save()
    .then(() => { res.status(201).json({ created: true }) })
    .catch(err => { res.status(400).send(err.message) })
})

app.listen(8080, () => console.log("FAQ forum listening on port 8080"))
