const Tweeter = function() {
    let _postIdCounter = 0
    let _commentIdCounter = 0
    const _posts = posts
    const INVALID_INDEX = -1

    const getPostIndexById = function(postId) {
        for (const i in _posts) {
            const post = _posts[i]
            if (post.id === postId) {
                return i
            }
        }
        return INVALID_INDEX
    }

    const getPosts = () => _posts

    const addPost = function(postText) {
        _postIdCounter++
        const post = { text: postText, id: "p" + _postIdCounter, comments: [] }
        _posts.push(post)
    }

    const removePost = function(postId) {
        const postIndex = getPostIndexById(postId)
        if (postIndex !== INVALID_INDEX) {
            _posts.splice(postIndex, 1)
        }
    }

    const addComment = function(commentText, postId) {
        _commentIdCounter++
        const comment = { id: "c" + _commentIdCounter, text: commentText }
        const postIndex = getPostIndexById(postId)
        const post = _posts[postIndex]
        post.comments.push(comment)
    }

    const removeComment = function(postId, commentId) {
        const postIndex = getPostIndexById(postId)
        const post = _posts[postIndex]
        const postComments = post.comments
        for (const i in postComments) {
            const postComment = postComments[i]
            if (postComment.id === commentId) {
                postComments.splice(i, 1)
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