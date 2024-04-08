$(document).ready(function() {
    
    let taches = JSON.parse(localStorage.getItem('taches')) || [];
    
    //La fonction affichage des taches
    function Affichage() {
        $('.ligne-tab').remove();
        taches.forEach(function(task, index) {
            $('.liste-tache').append(`
                <tr class="ligne-tab ajout" data-index="${index}">
                    <td>${task.name}</td>
                    <td>${task.priority}</td>
                    <td>${task.dueDate}</td>
                    <td><button class="delete ">Supprimer</button></td>
                </tr>
            `);
        });
    }

    // evenement soummettant le formulaire 
    $('#mon-formulaire').submit(function(event) {
        event.preventDefault();
        var taskName = $('#tache').val();
        var dueDate = $('#date-echeance').val();
        var priority = $('#case-cocher').prop('checked') ? 'Prioritaire' : 'Non Prioritaire';
        taches.push({ name: taskName, dueDate: dueDate, priority: priority });
        localStorage.setItem('tasks', JSON.stringify(taches));
        Affichage();
        this.reset();
    });

    // l'evenement delete sur le boutton supprimer
    $('.liste-tache').on('click', '.delete', function() {
        var index = $(this).closest('tr').data('index');
        taches.splice(index, 1);
        localStorage.setItem('taches', JSON.stringify(taches));
        Affichage();
    });

    // Appel de la fonction Affichage en chargeant la page
    Affichage();
});
