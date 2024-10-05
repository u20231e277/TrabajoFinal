/*document.querySelector("form").submit((e)=>{
    e.preventDefault();
    console.log("Llegue");
    
})
*/
const guardar = () => {
    const usuario = document.getElementById("exampleInputEmail1").value
    const pass = document.getElementById("exampleInputPassword1").value
    console.log(usuario, pass)
    localStorage.setItem("Usuario", usuario)
    localStorage.setItem("Pass", pass)
}
