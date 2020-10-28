const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    // Query Params
    // without destructuring 
    // const query = request.query;
    // console.log(query); //output example: { title: 'React', owner: 'Diego' }
    const {title, owner} = request.query;
    console.log(title);
    console.log(owner);
    
    return response.json([
        'Projeto 1',    
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    // Request Body
    // Not destructured
    //const body = request.body;
    //console.log(body); //output example: { title: 'Aplicativo React', owner: 'Luiz Felizardo' }
    const {title, owner} = request.body;
    // REMINDER: return undefined, if not set to JSON with app.use(express.json());.
    console.log(title);
    console.log(owner);
    
    return response.json([
        'Projeto 1',    
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id', (request, response) => {
    // Route Params
    // No destructuring 
    // const params = request.params;
    // console.log(params); //output example: { id: '1' }
    const {id} = request.params;
    console.log(id);
    
    return response.json([
        'Projeto 4',    
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!')
});