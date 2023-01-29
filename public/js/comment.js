const blogPostEl = $('.blogpost');
const commentEl = $('.new-comment');
const submitBtn = $('#submit-comment');
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

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
});