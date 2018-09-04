const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/AuthorJim'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => console.log('mongo 连接成功'))

const models = {
    blog: {
        title: String,
        author: String,
        body: String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number
        }
    },
    user: {
        user: { type: String, require: true },
        id: { type: Number, require: true }
    }
}

for (const m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: name => mongoose.model(name)
}
