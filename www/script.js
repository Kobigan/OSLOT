// Cette partie affiche la navbar lorsque la souris s'approche du haut de la page

document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.querySelector('nav'); // Sélection de la barre de navigation

    document.addEventListener('mousemove', function(e) {
        // Vérifier si la largeur de l'écran est supérieure à 768px avant d'exécuter le code
        if (window.matchMedia("(min-width: 1001px)").matches) {
            // Vérifier si la souris est près du haut de la page
            if (e.clientY <= 100) {
                // Si oui, afficher la navbar
                navbar.style.top = "0";
            } else {
                // Sinon, vous pouvez choisir de masquer la navbar ou de ne rien faire
                // Exemple pour masquer : navbar.style.top = "-100px";
                // Assurez-vous que cette action ne gêne pas l'interaction utilisateur
            }
        }
    });
});

// Cette partie cache la navbar lorsqu'on scroll en bas

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    // Vérifier si la largeur de l'écran est supérieure à 768px avant d'exécuter le code
    if (window.matchMedia("(min-width: 1001px)").matches) {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-60px"; // Ajustez cette valeur selon la hauteur de votre navbar
        }
        prevScrollpos = currentScrollPos;
    }
}
