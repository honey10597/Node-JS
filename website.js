const http = require("http")

const fs = require("fs")

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    // console.log(req, "URL")

    // res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    // res.end("<h1>This is my first server</h1> <p> chak deeee </p>")

    if (req.url == "/") {
        res.statusCode = 200
        res.end("<h1>This is my first server</h1> <p> chak deeee 200 code </p>")
    } else if (req.url == "/about") {
        res.statusCode = 200
        res.end("<h1>This is my first server</h1> <p> chak deeee 200 code </p>")
    } else if (req.url == "/hello") {
        res.statusCode = 200
        const data = fs.readFileSync("index.html")
        res.end(data.toString())
    } else {
        res.statusCode = 404
        res.end("<h1>Page not foundr</h1> ")
    }

})

server.listen(port, () => {
    console.log(`Server is running on post ${port}`)
})