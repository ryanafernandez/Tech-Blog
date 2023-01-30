const blogPostEl = $('.blogpost');
const commentEl = $('.create-body');
const submitBtn = $('#create-btn');
const contentEl = $('#comment-content');

submitBtn.on('click', async (event) => {
    event.preventDefault();

    const content = contentEl.val();
    const blogpost_id = blogPostEl.attr("blogpost-id");
    // The logged in user's id
    const user_id = commentEl.attr("logged_in_user");

    if (content) {
        const response = await fetch(`/api/comments/`, {
            method: 'POST',
            body: JSON.stringify({ content, blogpost_id, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.redirected) {
            document.location.replace(response.url);
        } else if (response.ok) {
            document.location.replace(`/api/blogposts/${blogpost_id}`);
        } else {
            alert(response.statusText);
        }
    }
});