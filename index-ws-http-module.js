const { write } = require('fs');
const http = require('http');

http.createServer
((request, response) =>
    {
        console.log(request);
        
        /*
        const user = 
        {
            id: 123,
            name: 'Fernando'
        }
        response.write(JSON.stringify(user)); // {'Content-Type': 'application/json'}
        */


        response.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv');
        response.writeHead(200, {'Content-Type': 'application/csv'});
        response.write('id,name\n123,DSN\n456,Marta');

        response.end();
    }
).listen(3000);
