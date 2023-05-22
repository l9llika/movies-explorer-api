const { Schema, model, Types } = require('mongoose');
const validator = require('validator');

const movieSchema = new Schema({
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (url) => validator.isURL(url),
        message: (props) => `${props.value} it is not a valid URL`,
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (url) => validator.isURL(url),
        message: (props) => `${props.value} it is not a valid URL`,
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (url) => validator.isURL(url),
        message: (props) => `${props.value} it is not a valid URL`,
      },
    },
    owner: {
      type: Types.ObjectId,
      required: true,
      ref: 'user',
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  });

  module.exports = model('movie', movieSchema);