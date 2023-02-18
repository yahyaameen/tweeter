const tweeter = Tweeter()
const renderer = Renderer()
const postInputElement = $("input")
const postsElement = $("#posts")
const getPosts = tweeter.getPosts


const createPost = function(postText) {
    tweeter.addPost(postText)
    renderer.renderPosts(getPosts())
}

const post = function() {
    const postText = postInputElement.val()
    if (postText !== "") {
        createPost(postText)
        postInputElement.val("")
    }
}

const deletePost = function() {
    const postID = $(this).closest(".post").data().id
    tweeter.removePost(postID)
    renderer.renderPosts(getPosts())
}

postsElement.on("click", ".delete", deletePost)

const addComment = function() {
    const commentText = $(this).closest("div").find("input").val()
    if (commentText !== "") {
        const postID = $(this).closest(".post").data().id
        tweeter.addComment(commentText, postID)
        renderer.renderPosts(getPosts())
    }
}

postsElement.on("click", ".comment", addComment)

const deleteComment = function() {
    const postID = $(this).closest(".post").data().id
    const commentID = $(this).closest(".comments").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(getPosts())
}

postsElement.on("click", ".delete-comment", deleteComment)