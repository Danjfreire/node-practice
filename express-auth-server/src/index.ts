import app from './server'

const PORT = process.env.port || 3000;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});