const Tweeter = function() {
    let _postIdCounter = 0
    let _commentIdCounter = 0
    const _posts = posts

    const getPosts = () => _posts

    const addPost = function(postText) {
        _postIdCounter++
        const post = { text: postText, id: "p" + _postIdCounter, comments: [] }
        _posts.push(post)
    }

    const removePost = function(postID) {
        for (const i in _posts) {
            if (_posts[i].id === postID) {
                _posts.splice(i, 1)
            }
        }
    }

    const addComment = function(commentText, postId) {
        _commentIdCounter++
        const comment = { id: "c" + _commentIdCounter, text: commentText }
        for (const post of _posts) {
            if (post.id === postId) {
                post.comments.push(comment)
            }
        }
    }

    const removeComment = function(postID, commentID) {
        for (const post of _posts) {
            if (post.id === postID) {
                for (const i in post.comments) {
                    if (post.comments[i].id === commentID) {
                        post.comments.splice(i, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}