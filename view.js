const Renderer = function() {

    const postsElement = $("#posts")

    const createPost = function(post) {
        const postElement = $(`<div data-id=${post.id} class=post>
            <h3 class=post-text>${post.text}</h3>
            <span class=delete>X</span><br>
            <div>
              <input type=text placeholder="add comment">
              <button class=comment>Add Comment</button>
            </div>
            </div>`)
        postsElement.append(postElement)
    }

    const createComment = function(postId, comment) {
        const postCommentElement = $(`<div data-id=${comment.id} class=comments>
            ${comment.text}<span class=delete-comment>X</span></div>`)
        $(`*[data-id="${postId}"]`).append(postCommentElement)
    }

    const renderPosts = function(posts) {
        postsElement.empty()
        for (const post of posts) {
            createPost(post)
            const postId = post.id
            const comments = post.comments
            for (const comment of comments) {
                createComment(postId, comment)
            }
        }
    }

    return {
        renderPosts: renderPosts
    }
}