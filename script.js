function createPost() {
    // Get form input values
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    var imageUrl = document.getElementById('post-image').value;

    // Create post container
    var postContainer = document.createElement('div');
    postContainer.className = 'post';

    // Add title
    var postTitle = document.createElement('h2');
    postTitle.textContent = title;
    postContainer.appendChild(postTitle);

    // Add image
    if (imageUrl) {
        var postImage = document.createElement('img');
        postImage.src = imageUrl;
        postContainer.appendChild(postImage);
    }

    // Add content
    var postContent = document.createElement('p');
    postContent.textContent = content;
    postContainer.appendChild(postContent);

    // Append post to container
    var container = document.getElementById('posts-container');
    container.appendChild(postContainer);

    // Reset form inputs
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
}

// Add event listener to the form
var postForm = document.getElementById('post-form');
postForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    createPost();
});
