document.getElementById('openData').addEventListener('click',function(){
    document.getElementById('datos').classList.toggle('open-data');
})

document.getElementById('btnClose').addEventListener('click',function(){
    document.getElementById('datos').classList.toggle('open-data');
});
document.getElementById('editar').addEventListener('click',function(){
    const inputs = document.querySelectorAll('.formulario input');
    inputs.forEach(input=>{
        if(input.readOnly == true) input.readOnly = false;
    })
    document.getElementById('update').style.display = 'flex';
})


document.getElementById('envios').addEventListener('submit',function(e){
    e.preventDefault();

    const contenedor = document.getElementById('mensajes');
    
    const texto = document.createElement('div');
    texto.classList.add('texto');
    texto.classList.add('focus');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    const strong = document.createElement('strong');
    const span = document.createElement('span');

    span.innerText = ` ${new Date().toLocaleString()}`;
    strong.innerText = 'Jesus Vacca: ';

    p2.append(
        strong,span
    );

    const box = document.getElementById('box').value;

    p1.innerText = `${box}`;

    texto.append(p1,p2);
    contenedor.append(
        texto
    );
    contenedor.scrollTop = contenedor.scrollHeight;
    document.getElementById('box').value = '';

})