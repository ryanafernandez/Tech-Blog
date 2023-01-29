const createBtn = $('#create-btn');
const titleEl = $('#post-title');
const contentEl = $('#post-content');

createBtn.on('click', async (event) => {
    event.preventDefault();

    const title = $.trim(titleEl.val());
    const content = $.trim(contentEl.val());
    const user_id = createBtn.attr('user-id');
    console.log(user_id);

    if (title && content) {
        const response = await fetch('/api/blogposts', {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
});