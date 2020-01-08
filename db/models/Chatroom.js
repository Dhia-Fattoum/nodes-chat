const con = require("../db");

const chatroomsScheema = `CREATE TABLE IF NOT EXISTS chatroom(
    roomname VARCHAR(255) UNIQUE NOT NULL

    
);`;
con.query(chatroomsScheema, (err, data) => {
  if (err) console.error(err);
  else console.log("Created Chatroom Table");
});

function createChat(room) {
  return con.query(`INSERT into chatroom(roomname) VALUES ($1)`, [room]);
}

function deleteChat(room) {
  return con.query(` DELETE FROM chatroom WHERE roomname = '${room}'`);
}
deleteChat("lobby");

function updateroom(oldname, newname) {
  return con.query(
    `UPDATE chatroom SET roomname = '${newname}' WHERE roomname = '${oldname}'`
  );
}
updateroom("lobby");
module.exports.create = createChat;
module.exports.delete = deleteChat;
module.exports.update = updateroom;
