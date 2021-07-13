const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = form['email'].value;
    const password = form['password'].value;
    const sex = form['sex'].value;
    const role = form['role'].value;
    const permissions = document.querySelectorAll("input[type='checkbox']:checked");
    if(permissions.length<2){
        alert('Atleast 2 permissions should be ticked.');
        return;
    }
    if(!checkpass(password)){
        alert('Password should be min 6 character with MIX of Upercase, lowercase, digits');
        return;
    }
    form.style.display ="none";
    document.querySelector('.preview').style.display="flex";
    document.querySelector('#Email').innerHTML= `<h3>Email : </h3> ${email}`;
    document.querySelector('#Password').innerHTML =  `<h3>Password : </h3> ${password}`;
    document.querySelector('#Sex').innerHTML =`<h3>Sex : </h3> ${sex}`;
    document.querySelector('#Role').innerHTML =`<h3>Role : </h3> ${role}`;
    document.querySelector('#Permission').innerHTML = `<h3>Permissions : </h3>`;
    permissions.forEach((perm)=>{
        document.querySelector('#Permission').innerHTML+= ` ${perm.value}`;
    })
    
})

const checkpass = (password)=>{
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/).test(password);
}