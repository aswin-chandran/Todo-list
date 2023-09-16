

let completedTasks = 0;

document.getElementById('todo-list').addEventListener('click', function () 
{
  


    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => 
            {
            const todoListBody = document.getElementById('todo-list-body');
            todoListBody.innerHTML = '';
            data.forEach(todo => 
                {
                const row = document.createElement('tr');
                const no = document.createElement('td')
                const titleColumn = document.createElement('td');
                const completedColumn = document.createElement('td');

                const completedCheckbox = document.createElement('input');
                completedCheckbox.type = 'checkbox';
                completedCheckbox.checked = todo.completed;
                if (todo.completed) 
                {
                    completedCheckbox.disabled = true;
                }
                completedCheckbox.addEventListener('change', function () 
                {
                    todo.completed = this.checked;
                    if (this.checked) 
                    
                    {
                        completedTasks++;
                    } else 
                    {
                        completedTasks--;
                    }

                    checkCompletedTasks(completedTasks).then(congratulateUser);
                });

                
                titleColumn.textContent = todo.title;
                no.textContent= todo.id;
                completedColumn.appendChild(completedCheckbox);
                row.appendChild(no);
                row.appendChild(titleColumn);
                row.appendChild(completedColumn);
                todoListBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


function checkCompletedTasks(completedTasks) 
{
    return new Promise((resolve) => 
    {
        if (completedTasks === 5) 
        {
            resolve(true);
        } else 
        {
            resolve(false);
        }
    });
}


function congratulateUser(isCompleted) 
{
    if (isCompleted)
    {
    
        alert('Congrats Task Completed');
    }
}