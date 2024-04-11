$(document).ready(function() {
    // Fonction pour ajouter une tâche à la liste
    $("#mon-formulaire").submit(function(event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

        // Récupérer les valeurs des champs
        var tache = $("#tache").val().trim();
        var dateEcheance = $("#date-echeance").val();
        var priorite = $("#case-cocher").is(":checked") ? "Prioritaire" : "Normale";

        // Vérifier si la tâche n'est pas vide
        if (tache !== "") {
            // Construire le contenu de la tâche sous forme de tableau
            var contenuTache = "<tr class='fade-in'>";
            contenuTache += "<td>" + tache + "</td>";
            contenuTache += "<td> " + dateEcheance + "</td>";
            contenuTache += "<td>" + priorite + "</td>";
            contenuTache += "<td><button class='supprimer'>Supprimer</button></td>";
            contenuTache += "</tr>";

            // Ajouter la tâche à la liste
            $(".ligne-tab").append(contenuTache);

            // Réinitialiser les champs du formulaire
            $("#tache").val("");
            $("#date-echeance").val("");
            $("#case-cocher").prop("checked", false);
        } else {
            alert("Veuillez entrer une tâche !");
        }
    });

    // Fonction pour supprimer une tâche de la liste
    $(".ligne-tab").on("click", ".supprimer", function() {
        var parentRow = $(this).closest('tr');
        parentRow.addClass('fade-out');
        setTimeout(function() {
            parentRow.remove();
        }, 500)// Attendre la fin de l'animation avant de supprimer la ligne;
    });
});
