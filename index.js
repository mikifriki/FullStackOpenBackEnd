const express = require('express')
const app = express();
app.use(express.json())

let persons = [
	{
		name: "Arto Hellas",
		number: "040-123456",
		id: 1
	},
	{
		name: "Ada Lovelace",
		number: "39-44-5323523",
		id: 4
	},
	{
		name: "Dan Abramov",
		numbeid: "12-43-2345",
		id: 3
	},
	{
		name: "Mary Poppendiec",
		numbeid: "39-23-6423122",
		id: 4
	}
];


app.get('/', (req, res) => {
	res.send('<h1>Hello</h1>');
});

app.get('/api/persons', (req, res) => {
	res.json(persons);
});

const port = 3001
app.listen(port, () => {
	console.log(`Server is running in ${port}`)
});