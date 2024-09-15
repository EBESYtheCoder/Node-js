let { people } = require('../data.js')

const getPeople = (req, res) => {
  res.status(200).json({ sucess: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ sucess: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })

}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body
  console.log(id, name)

  const person = people.find((person) => person.id === Number(id))
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPerson })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
}