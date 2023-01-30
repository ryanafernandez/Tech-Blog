const deleteBtn = $('#delete-btn');
const blogPostEl = $('.blogpost');

deleteBtn.on('click', async (event) => {
    event.preventDefault();
    
    const id = blogPostEl.attr('id');

    if (id) {
        const response = await fetch(`/api/blogposts/${id}`, {
            method: 'DELETE'
        });

        if (response.redirected) {
            document.location.replace(response.url);
        } else if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
});