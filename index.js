const server = require('./api/server');

const port = process.env.PORT;

server.get('/', (req, res) =>{
    res.status(200).json({ message: "server is running" });
});

server.listen(port, () => {
    console.log(`\n *** server listening on port ${port} *** \n`);
});