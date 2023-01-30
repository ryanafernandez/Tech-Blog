const blogPostEl = $('.blogpost');
const titleInput = $('#post-title');
const contentInput = $('#post-content');
const updateBtn = $('#create-btn');

updateBtn.on('click', async (event) => {
    event.preventDefault();

    const id = blogPostEl.attr('id');
    const title = $.trim(titleInput.val());
    const content = $.trim(contentInput.val());

    if (title && content) {
        const response = await fetch(`/api/blogposts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.redirected) {
            document.location.replace(response.url);
        } else if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert(response.statusText);
        }
    }
});