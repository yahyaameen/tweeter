const tweeter = Tweeter()
const renderer = Renderer()



const createPost = function(postText) {
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
}

const post = function() {
    const postText = $("input").val()
    if (postText !== "") {
        createPost(postText)
        $("#input").val("")
    }
}

const deletePost = function() {
    const postID = $(this).closest(".post").data().id
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
}

$("#posts").on("click", ".delete", deletePost)

const addComment = function() {
    const commentText = $(this).closest("div").find("input").val()
    if (commentText !== "") {
        const postID = $(this).closest(".post").data().id
        tweeter.addComment(commentText, postID)
        renderer.renderPosts(tweeter.getPosts())
    }
}

$("#posts").on("click", ".comment", addComment)

const deleteComment = function() {
    const postID = $(this).closest(".post").data().id
    const commentID = $(this).closest(".comments").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
}

$("#posts").on("click", ".delete-comment", deleteComment)