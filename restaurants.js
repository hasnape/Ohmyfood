// Fonction pour basculer l'état "liked"
function toggleLike(element) {
    element.classList.toggle('liked');
}

// Ajouter un écouteur d'événement pour les clics après que le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les éléments avec la classe "like"
    const likeButtons = document.querySelectorAll('.like');

    // Ajouter un écouteur d'événement pour chaque bouton
    likeButtons.forEach(button => {
        button.addEventListener('click', () => toggleLike(button));
    });
});

