function addPost() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (!title || !content) return;

    let postDiv = document.createElement('div');
    postDiv.classList.add('post');

    let postTitle = document.createElement('h2');
    postTitle.textContent = title;

    let postContent = document.createElement('p');
    postContent.textContent = content.length > 60 ? content.substring(0, 60) + '...' : content;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Ta bort';
    deleteBtn.onclick = function() { postDiv.remove(); };

    let commentInput = document.createElement('input');
    commentInput.placeholder = "Lägg till kommentar";

    let commentBtn = document.createElement('button');
    commentBtn.textContent = "Kommentera";

    let commentsDiv = document.createElement('div');
    commentsDiv.classList.add('comments');

    commentBtn.onclick = function() {
        if (commentInput.value) {
            let comment = document.createElement('p');
            comment.textContent = commentInput.value;
            comment.classList.add('comment');

            let deleteCommentBtn = document.createElement('button');
            deleteCommentBtn.textContent = 'Ta bort';
            deleteCommentBtn.onclick = function() { comment.remove(); };

            comment.appendChild(deleteCommentBtn);
            commentsDiv.appendChild(comment);
            commentInput.value = "";
        }
    };

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(deleteBtn);
    postDiv.appendChild(commentInput);
    postDiv.appendChild(commentBtn);
    postDiv.appendChild(commentsDiv);

    document.getElementById('posts').appendChild(postDiv);

    document.getElementById('title').value = "";
    document.getElementById('content').value = "";
}