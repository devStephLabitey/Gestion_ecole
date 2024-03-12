document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupération des valeur d input
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        console.log(email, password);
        // Création d objet avec les valeur d input
        const Formdata = {
           email: email,
           password: password
        };

        // Envoi des données au backend pour l'authentification
        fetch("http://localhost:5000/user/connexion", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Formdata) 
        })
        .then(response => {
            if (response.ok) {
                console.log(response.Formdata);
                console.log("ok");
                // La requête a réussi
                // Rediriger l'utilisateur vers l accueil
                window.location.href = 'acceuil.html';
                
            } else {
                
                console.error("Échec de l'authentification");
                /* alert("Mauvaise combinaison utilisateur ou mot de passe") */
            }
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});