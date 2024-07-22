const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let servers = [{
  id: uuidv4(),
  users: []
}];

// Function to find or create a server with available slots
const findOrCreateServer = () => {
  let server = servers.find(s => s.users.length < 10);
  if (!server) {
    server = { id: uuidv4(), users: [] };
    servers.push(server);
  }
  return server;
};

// Endpoint to register a user
app.post('/register', (req, res) => {
  const { username } = req.body;
  
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const server = findOrCreateServer();
  server.users.push(username);

  res.json({ serverId: server.id, username });
});

// Endpoint to get the list of servers
app.get('/servers', (req, res) => {
  res.json(servers);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
