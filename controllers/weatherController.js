import { Weather } from "../models/weatherModel.js";

export const getWeather = (req, res) => {
    Weather.findAll()
    .then(weather => {
        res.status(200).send(weather)
    })
    .catch(err => {
        console.log(err)
    })
}

export const addWeather = (req, res) => {
    Weather.create({
        name: req.body.name,
        temp: req.body.temp,
        feels_like: req.body.feels_like,
        description: req.body.description,
        temp_max: req.body.temp_max,
        temp_min: req.body.temp_min,
        humidity: req.body.humidity
    })
    res.status(201).send({
        message: "Created"
    })
    .catch(err => {
        console.log(err)
    })
}