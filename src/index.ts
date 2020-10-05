


import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use( router );

//no es nesesario pero te mostrara los mensajes
//MySQL.instance;

server.start(()=>{
console.log('servidor corriendo en el puerto 3000');

});

/*
tsc --init
npm i @types/express --save-dev

*/