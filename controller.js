const tweeter = Tweeter()
const renderer = Renderer()
const elements = {
    postInput: $("#container>input"),
    posts: $("#posts")
}

const createPost = function(postText) {
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
}

const post = function() {
    const postText = elements.postInput.val()
    if (postText !== "") {
        createPost(postText)
        elements.postInput.val("")
    }
}

const deletePost = function() {
    const postID = $(this).closest(".post").data().id
    tweeter.removePostById(postID)
    renderer.renderPosts(tweeter.getPosts())
}

elements.posts.on("click", ".delete", deletePost)

const addComment = function() {
    const commentText = $(this).closest(".add-comment").find("input").val()
    if (commentText !== "") {
        const postID = $(this).closest(".post").data().id
        tweeter.addComment(commentText, postID)
        renderer.renderPosts(tweeter.getPosts())
    }
}

elements.posts.on("click", ".comment", addComment)

const deleteComment = function() {
    const postID = $(this).closest(".post").data().id
    const commentID = $(this).closest(".comments").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
}

elements.posts.on("click", ".delete-comment", deleteComment)