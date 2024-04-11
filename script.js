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
        // Construire le contenu de la tâche
        var contenuTache = "<div class='task-name'>" + tache + "</div>";
        contenuTache += "<div class='task-date'>Date de fin : " + dateEcheance + "</div>";
        contenuTache += "<div class='task-priority'>Priorité : " + priorite + "</div>";
  
        // Construire la structure de la tâche avec le bouton de suppression
        var nouvelleTache = $("<li>").append(contenuTache);
        nouvelleTache.append("<button class='supprimer'>Supprimer</button>");
  
        // Ajouter la tâche à la liste
        $(".ligne-tab").append(nouvelleTache);
  
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
      $(this).parent().remove();
    });
  });
  