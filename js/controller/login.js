

document.getElementById('formLogin').addEventListener('submit',function(event){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(
        (username != null && username != '') &
        (password != null && password != '')
    ){
        alert('eso es')
    }else alert('Debes llenar todos los datos')

})