const app = require('./app')
const port = 3000

// looks by default in /views rather than /.src/views
app.set('views', __dirname + '/views')

app.listen(port, () => {
    console.log(`Local app listening on port ${port}`)
})
