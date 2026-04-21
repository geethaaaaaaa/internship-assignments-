// Simulated blog data (like MongoDB documents)
let posts = [];

const postContainer = document.getElementById("posts");

function renderPosts() {
    postContainer.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>${post.author}</strong></p>
            <p>${post.content}</p>
        `;

        postContainer.appendChild(div);
    });
}

function addPost() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!title || !author || !content) {
        alert("All fields are required");
        return;
    }

    // This matches MongoDB schema structure
    const newPost = {
        title,
        author,
        content,
        createdAt: new Date()
    };

    posts.push(newPost);

    renderPosts();

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";
}