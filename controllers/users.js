const { users } = require('../data/index.js')
const counter = users.length;

const listUser = (req, res) => {
    return res.json(users)
 }

 const showUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.filter(user => user.id === Number(id));
    console.log(foundUser)
    //  if(foundUser.length === 0){
    //      return res.send("User does not exist.")
    //  }
    if(foundUser.length === 0){
        return res.status(400).json({msg: 'User does not exist.'})
      }
    const obs = parseInt(req.params.id - 1)
    console.log('boom')
    res.json(users[obs])

}

const createUser = (req, res) => {
    console.log(req.body)
    const newUser = {
        "id": req.body.id,
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "address": {
          "street": req.body.address.street,
          "suite": req.body.address.suite,
          "city": req.body.address.city,
          "zipcode": req.body.address.zipcode,
          "geo": {
            "lat": req.body.address.geo.lat,
            "lng": req.body.address.geo.lng
          }
        },
        "phone": req.body.phone,
        "website": req.body.website,
        "company": {
          "name": req.body.company.name,
          "catchPhrase": req.body.company.catchPhrase,
          "bs": req.body.company.bs
        }
      }

      if(!newUser.name){
        return res.status(400).json({msg: 'Please enter name.'})
      }
      
      users.push(newUser);
      res.json(users);
      console.log(req.body)
}

const deleteUser = (req, res) => {
    // const part = parseInt(users.params.id)
    const id = req.params.id;
    const foundUser = users.filter(user => user.id === Number(id));
    console.log(foundUser)
    //  if(foundUser.length === 0){
    //      return res.send("User does not exist.")
    //  }
    if(foundUser.length === 0){
        return res.status(400).json({msg: 'User does not exist.'})
      }
    console.log(req.params.id)
    users[req.params.id - 1].status = "Inactive"
    res.send("deleted")
  }

const updateUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.filter(user => user.id === Number(id));
    console.log(foundUser)
    //  if(foundUser.length === 0){
    //      return res.send("User does not exist.")
    //  }
    if(foundUser.length === 0){
        return res.status(400).json({msg: 'User does not exist.'})
      }


    const update = {
        "id": req.body.id,
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "address": {
          "street": req.body.address.street,
          "suite": req.body.address.suite,
          "city": req.body.address.city,
          "zipcode": req.body.address.zipcode,
          "geo": {
            "lat": req.body.address.geo.lat,
            "lng": req.body.address.geo.lng
          }
        },
        "phone": req.body.phone,
        "website": req.body.website,
        "company": {
          "name": req.body.company.name,
          "catchPhrase": req.body.company.catchPhrase,
          "bs": req.body.company.bs
        }
      }

    users[req.params.id - 1] = update
    if(!update.name){
        return res.status(400).json({msg: 'Please enter name.'})
      }
    res.send(users[req.params.id - 1])
}

module.exports = { listUser, showUser, createUser, updateUser, deleteUser }