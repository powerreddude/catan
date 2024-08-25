/******************************************************************************
 * Project: Catan
 * File:    app.js
 * Author:  Donnis Moore
 * Created: 2024-08-24
 * Purpose: Launches server for Catan API.
 * 
 * Copyright © 2024 Donnis Moore. All rights reserved.
 * 
 * License: This project is licensed under the MIT License.
 *          See the LICENSE file in the project root for more information.
 * 
 * Version: 1.0.0
 * 
 * History: File created with express and websocket.
 ******************************************************************************/

//imports
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

//initalize
const app = express();
const server = createServer(app);
const io = new Server(server);

//configuration
const port = 5000;

//start

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

io.on('connection', (socket) => {
    console.log('connection');
})

server.listen(port, () => {
    console.log(`Catan API running on http://localhost:${port} please visit http://localhost:3000 for frontend.`);
})