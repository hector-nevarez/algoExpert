const PORT = process.env.PORT || 3000;
const app = require('./app');

const init = () => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
}

init()