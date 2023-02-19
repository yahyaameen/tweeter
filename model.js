const Tweeter = function() {
    let _postIdCounter = 1
    let _commentIdCounter = 1
    const _posts = []
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

    const getPost = function(postId) {
        const postIndex = getPostIndexById(postId)
        const post = _posts[postIndex]
        return post
    }

    const getPosts = () => [..._posts]

    const addPost = function(postText) {
        const post = { text: postText, id: "p" + _postIdCounter, comments: [] }
        _posts.push(post)
        _postIdCounter++
    }

    const removePostById = function(postId) {
        const postIndex = getPostIndexById(postId)
        if (postIndex !== INVALID_INDEX) {
            _posts.splice(postIndex, 1)
        }
    }

    const addComment = function(commentText, postId) {
        const comment = { id: "c" + _commentIdCounter, text: commentText }
        const post = getPost(postId)
        post.comments.push(comment)
        _commentIdCounter++
    }

    const removeComment = function(postId, commentId) {
        const post = getPost(postId)
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
        removePostById: removePostById,
        addComment: addComment,
        removeComment: removeComment
    }
}