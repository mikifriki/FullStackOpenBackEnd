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


app.get('/info', (req, res) => {
	res.send(`<p>Phonebook has info for${persons.length}</p> ${Date()}`);
});

app.get('/api/persons', (req, res) => {
	res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id);
	const person = persons.find(person => person.id === id)
	if (person) {
		res.json(person);
	}
	res.status(404).end();
});

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id);
	persons = persons.filter(person => person.id !== id);
	res.status(204).end();
})

app.post('/api/persons', (req, res) => {
	const body = req.body
	const newPerson = {
		name: body.name,
		number: body.number,
		id: Math.floor(Math.random() * 101)
	};

	if (persons.some(person => person.name === body.name)) {
		return res.status(400).json({
			error: 'name must be unique'
		})
	}
	if (!body.name) {
		return res.status(400).json({
			error: 'name missing'
		})
	}

	if (!body.number) {
		return res.status(400).json({
			error: 'number missing'
		})
	}
	console.log(persons.some(person => person.name), "outside")
	persons = persons.concat(newPerson)
	res.json(newPerson)
});

const port = 3001
app.listen(port, () => {
	console.log(`Server is running in ${port}`)
});
