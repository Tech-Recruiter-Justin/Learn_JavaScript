const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("CONNECTION OPEN")
    })
    .catch(err =>{
        console.log("ERROR")
        console.log(err)
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);

const newMovie = (title, year, score, rating) => {
    const temp = new Movie({title: title, year: year, score: score, rating: rating})
    temp.save()
    .then(data => {
        console.log("MOVIE ADDED")
        console.log(data)
    })
    .catch(err =>{
        console.log("ERROR!")
        console.log(err)
    })
}