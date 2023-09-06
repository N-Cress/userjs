

async function main() {
    let userID = (localStorage.getItem("id"));
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
    const convertPosts =await posts.json();
    const userTarget = document.querySelector(".post-list")

    userTarget.innerHTML = convertPosts.map((post) => {
        return `<div class="post">
                    <div class="post__title">
                        ${post.title}
                    </div>
                    <p class="post__body">
                        ${post.body}
                    </p>
                </div>`;
    }).join("");
}

async function onSearchChange(event) {
    const userID = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
    const convertPosts =await posts.json();
    const userTarget = document.querySelector(".post-list")

    userTarget.innerHTML = convertPosts.map((post) => {
        return `<div class="post">
                    <div class="post__title">
                        ${post.title}
                    </div>
                    <p class="post__body">
                        ${post.body}
                    </p>
                </div>`;
    }).join("");
}


main();