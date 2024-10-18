import fs from 'fs';

//Leer un archivo de manera asíncrona

fs.readFile('./data/example.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log('Contenido del archivo:', data);
});

//Escribir un nuevo archivo

fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err)=>{
    if(err) throw err;

});
//Renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err)=>{
    if (err) throw err;
    console.log('Archivo renombrado');
});