import { WebSocketServer } from 'ws';
import { User } from './User';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  let user = new User(ws);

  ws.on('close', () =>{
    user?.destroy();
  })
});