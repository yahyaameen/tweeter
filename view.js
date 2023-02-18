const Renderer = function() {

    const createPost = function(post) {
        const postElement = $(`<div data-id=${post.id} class=post>
            <h3 class=post-text>${post.text}</h3>
            <span class=delete>X</span><br>
            <div>
              <input type=text placeholder="add comment">
              <button class=comment>Add Comment</button>
            </div>
            </div>`)
        $("#posts").append(postElement)
    }

    const createComment = function(post, comment) {
        const postCommentElement = $(`<div data-id=${comment.id} class=comments>${comment.text}<span class=delete-comment>X</span></div>`)
        $(`*[data-id="${post.id}"]`).append(postCommentElement)
    }

    const renderPosts = function(posts) {
        $("#posts").empty()
        for (const post of posts) {
            createPost(post)
            const comments = post.comments
            for (const comment of comments) {
                createComment(post, comment)
            }
        }
    }

    return {
        renderPosts: renderPosts
    }
}