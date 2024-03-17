document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        const dates = document.getElementById('dates').value
        const times = document.getElementById('times').value
        const nomCours = document.getElementById('nomCours').value
        const typeCours = document.getElementById('typeCours').value
        const nomProf = document.getElementById('nomProf').value
        const nomSalle = document.getElementById('nomSalle').value



        const empData = {
            dates :dates,
            times :times,
            nomCours: nomCours,
            typeCours: typeCours,
            nomProf: nomProf,
            nomSalle: nomSalle
        }
        console.log(empData);
         
        fetch("http://localhost:5000/user/admin",{
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empData)
            
        })
        // .then((response) => {
        //     response.json()
        //     .then ((empData) => {
        //         console.log(empData)
        //     })
        // } )
        
        // .catch(error =>{
        //     console.log("Erreur lors de l'envoi des données au serveur:", error);
        // })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête.');
            }
            
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            } else {
                throw new TypeError('La réponse n\'est pas au format JSON.');
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Erreur :", error);
        });


    })
})



/* const dates = document.getElementById('dates')
const times = document.getElementById('times')
const nomCours = document.getElementById('nomCours')
const typeCours = document.getElementById('typeCours')
const nomProf = document.getElementById('nomProf')
const nomSalle = document.getElementById('nomSalle')

const formElt = document.querySelector("form");


let empTemps = []
fetch("http://localhost:5000/user/timeTable")
.then(response => {
    response.json()
    .then(data => {
        console.log(data);
       
    })
})
.catch((error) => console.log(error)) */