document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('form').addEventListener('submit', function (e){
        e.preventDefault();
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const state = document.getElementById('state').value;
        const filiere = document.getElementById('filiere').value;
        const adresse = document.getElementById('adresse').value;
        const password = document.getElementById('password').value ;



        const Formdata = {
            nom: nom, 
            prenom: prenom,
            email: email,
            state: state,
            filiere: filiere,
            adresse: adresse,
            password: password
        }
            console.log(Formdata)
        fetch("http://localhost:5000/user/inscription",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Formdata)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = "connexion.html";
        })
        .catch(error =>{
            console.log("Erreur lors de l'envoi des données au serveur:", error);
        })
    })
})