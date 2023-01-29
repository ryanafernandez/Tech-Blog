const blogPostEl = $('.blogpost');
const newCommentEl = $('.new-comment');
const contentEl = $('#comment-content');

newCommentEl.on('submit', async (event) => {
    event.preventDefault();

    const content = contentEl.val();
    const blogpost_id = blogPostEl.attr("blogpost-id");
    const user_id = blogPostEl.attr("user-id");

    if (content) {
        const response = await fetch(`/api/comments/${blogpost_id}`, {
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