const updateBtn = $('#update-btn');
const deleteBtn = $('#delete-btn');

updateBtn.on('click', async (event) => {
    event.preventDefault();

    console.log('clicked update');
});

deleteBtn.on('click', async (event) => {
    event.preventDefault();
    
    console.log('clicked delete');
})