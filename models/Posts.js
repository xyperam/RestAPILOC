const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    nama:{ 
    type: String,
    require: true,
},

negara:{
    type: String,
    required: true,
},

barang:{
    type: String,
    required: true,
},

pembayaran:{
    type: String,
    required: true,
},

status:{
    type: String,
    default: String('Lunas'),

},

date:{
    type: Date,
    default: Date.now,
}
});

module.exports = mongoose.model('Post',PostSchema);