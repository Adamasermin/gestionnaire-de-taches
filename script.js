$(document).ready(function() {
    // Charger les tâches du Local Storage à l'initialisation
    function chargerTaches() {
        var taches = JSON.parse(localStorage.getItem("taches")) || [];
        taches.forEach(function(tache) {
            ajouterTache(tache);
        });
    }

    // Fonction pour ajouter une tâche à la liste
    function ajouterTache(tache) {
        var contenuTache = "<tr class='fade-in'>";
        contenuTache += "<td>" + tache.nom + "</td>";
        contenuTache += "<td> " + tache.dateEcheance + "</td>";
        contenuTache += "<td>" + tache.priorite + "</td>";
        contenuTache += "<td><button class='supprimer'>Supprimer</button></td>";
        contenuTache += "</tr>";

        $(".ligne-tab").append(contenuTache);
    }

    // Fonction pour sauvegarder les tâches dans le Local Storage
    function sauvegarderTaches(taches) {
        localStorage.setItem("taches", JSON.stringify(taches));
    }

    // Evenement declenchant l'ajout d'une tâche à la liste
    $("#mon-formulaire").submit(function(event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

        // Récupérer les valeurs des champs
        var tacheNom = $("#tache").val().trim();
        var dateEcheance = $("#date-echeance").val();
        var priorite = $("#case-cocher").is(":checked") ? "Prioritaire" : "Normale";

        if (tacheNom === "") {
            alert("Veuillez entrer une tâche");
            return;
        }

        // Créer un objet tâche
        var nouvelleTache = {
            nom: tacheNom,
            dateEcheance: dateEcheance,
            priorite: priorite
        };

        // Ajouter la tâche au tableau de Local Storage
        var taches = JSON.parse(localStorage.getItem("taches")) || [];
        taches.push(nouvelleTache);

        // Ajouter visuellement la tâche
        ajouterTache(nouvelleTache);

        // Sauvegarder les tâches mises à jour
        sauvegarderTaches(taches);

        // Réinitialiser les champs du formulaire
        $("#tache").val("");
        $("#date-echeance").val("");
        $("#case-cocher").prop("checked", false);
    });

    // Fonction pour supprimer une tâche de la liste
    $(".ligne-tab").on("click", ".supprimer", function() {
        var parentRow = $(this).closest('tr');
        var index = parentRow.index(); // Récupérer l'index de la tâche à supprimer
        
        // Supprimer visuellement avec un effet
        parentRow.addClass('fade-out');
        setTimeout(function() {
            parentRow.remove();
        }, 500);

        // Supprimer la tâche du Local Storage
        var taches = JSON.parse(localStorage.getItem("taches")) || [];
        taches.splice(index, 1); // Retirer la tâche de la liste
        sauvegarderTaches(taches); // Mettre à jour le Local Storage
    });

    // Charger les tâches du Local Storage au démarrage
    chargerTaches();
});
