const profile = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the profile api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all profile

controller.get_all = (req, res) => {
  console.log("-- GET /all --");
  profile.find()
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new profile

controller.get_add = (req, res) => {
    console.log("-- GET /add --");
    res.send('put a new author\'s title in the body and send a post request to this address: { title: "string" }. you\'ll get back the new author\'s entry');
}

controller.post_add = (req, res) => {
    console.log("-- POST /add --");
    const new_title = req.body.title;
    const new_connection = { title: new_title };
    profile.create(new_connection)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


/* ------------------- READ -------------------*/
// GET  "/find/:id"             => View profile Info with id ...


controller.get_id = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- GET /"+connection_id+"/find --");
    const id_object = { _id: connection_id };
    profile.find(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}



/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update profile with id...


controller.get_id_update = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- GET /"+connection_id+"/update --");
    res.send('send a post request to this address a title in the body');
}

controller.post_id_update = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- POST /"+connection_id+"/update --");
    const id_object = { _id: connection_id };
    const title = req.body.title;
    const title_object = { title: title };
    profile.update(id_object, title_object)
      // modify the next line based on your project's needs        
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete profile with id...


controller.get_id_delete = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- GET /"+connection_id+"/delete --");
    res.send('send a post request to this address with an author ID, it will be deleted');
}

controller.post_id_delete = (req, res) => {
    const connection_id = req.params.id;
    console.log("-- POST /"+connection_id+"/delete --");
    const id_object = { _id: connection_id };
    profile.remove(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


module.exports = controller;