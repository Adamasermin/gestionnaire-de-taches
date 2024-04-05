/*$(document).ready(function() {
    $("#mon-formulaire").submit(function(event) {
        event.preventDefault();
  
        let tache = $("#tache").val();
        let date = $("#date-echeance").val();
        let priorite = $("#case-cocher").val();

        $("#valeur-tache").html(tache)
        $("#valeur-date").html(date)
        $("#valeur-priorite").html(priorite)
  
    });
  });*/

  $(document).ready(function() {
    //
    let taches = JSON.parse(localStorage.getItem('taches')) || [];

    // 
    function displayTasks() {
        $('.ligne-tab').remove();
        taches.forEach(function(task, index) {
            $('.liste-tache').append(`
                <tr class="ligne-tab" data-index="${index}">
                    <td>${task.name}</td>
                    <td>${task.priority}</td>
                    <td>${task.dueDate}</td>
                    <td><button class="delete">Supprimer</button></td>
                </tr>
            `);
        });
    }

    // 
    $('#mon-formulaire').submit(function(event) {
        event.preventDefault();
        var taskName = $('#tache').val();
        var dueDate = $('#date-echeance').val();
        var priority = $('#case-cocher').prop('checked') ? 'Prioritaire' : 'Non Prioritaire';
        taches.push({ name: taskName, dueDate: dueDate, priority: priority });
        localStorage.setItem('tasks', JSON.stringify(taches));
        displayTasks();
        this.reset();
    });

    // Delete task
    $('.liste-tache').on('click', '.delete', function() {
        var index = $(this).closest('tr').data('index');
        taches.splice(index, 1);
        localStorage.setItem('taches', JSON.stringify(taches));
        displayTasks();
    });

    // Display tasks on page load
    displayTasks();
});
