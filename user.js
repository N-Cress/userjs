

async function main() {
    let userID = localStorage.getItem("id");
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

    console.log(await fetch('https://jsonplaceholder.typicode.com/posts?userId=0'))
    console.log(convertPosts);
}

function onSearchChange() {
    
}

main();