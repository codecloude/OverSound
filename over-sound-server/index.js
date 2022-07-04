const express = require('express')
//const cors = require('cors')
const app = express()
const port = 3001;

require('./routes')(app);

// app.use(cors())

// app.get('/', (req, res) => {
//     res.download('./audio/RnB185bpmAm.wav')
//     res.download('./audio/lofi117bpmKeyB.wav')
//     res.download('./audio/happypartoflife.mp3')
// })

app.listen(port, () => {
    console.log('work on ' + port);
})