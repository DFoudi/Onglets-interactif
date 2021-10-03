const onglets = Array.from(document.querySelectorAll('.onglets'));
const contenus = Array.from(document.querySelectorAll('.contenus'));

onglets.forEach(onglet => {

    onglet.addEventListener('click', (e) => {

        for(let i = 0; i < onglets.length; i++) {

            //e.target qui donne l'index de ce sur quoi on a cliqué, à savoir ici un des trois onglets.

            if(onglets[i] === e.target){

                // ClassList qui permet d'ajouter des méthodes à nos class exemple : add(), remove(), toggle()
                //add() qui ajoute cette classe la ou l'on clique
                onglets[i].classList.add('active-onglets');
            } else {
                //Remove() Supprime cette classe lorsque l'on clique ailleurs
                onglets[i].classList.remove('active-onglets');
            }
        }

        //Permet de voir l'index de l'onglet ou l'on clique dans la console.
        console.log(onglets.indexOf(e.target));


        for(let i = 0; i < contenus.length; i++) {

            //e.target qui donne l'index de ce sur quoi on a cliqué, à savoir ici le contenu d'un des trois onglets.
            
            if(i === onglets.indexOf(e.target)) {

                // ClassList qui permet d'ajouter des méthodes à nos class exemple : add(), remove(), toggle()
                //add() qui ajoute cette classe la ou l'on clique, le contenu de l'onglet ou on a cliqué
                contenus[i].classList.add('active-contenu');
            } else {
                //Remove() Supprime cette classe lorsque l'on clique ailleurs pour afficher le suivant contenu d'un autre onglet ou on a cliqué
                contenus[i].classList.remove('active-contenu');
            }
        }


    })

})