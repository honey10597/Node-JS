const http = require("http")

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log(req, "URL")
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>This is my first server</h1> <p> chak deeee </p>")
})

server.listen(port, () => {
    console.log(`Server is running on post ${port}`)
})

