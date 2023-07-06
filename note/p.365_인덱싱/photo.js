const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* 스키마로 자료형 제한 */
const PhotoSchema = new Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
})

module.exports = mongoose.model('Photo1', PhotoSchema, 'Photo1')
