// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
    const userData = await fetch("https:jsonplaceholder.typicode.com/users");
    const dataUsable = await userData.json();
    const userListEl = document.querySelector(".user-list");

    userListEl.innerHTML = dataUsable.map((user) => {
        return userHTML(user);
        }).join("");

    console.log(dataUsable);
}

main();

function showUserPosts(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user.html`
};

function userHTML(user)  {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
                <div class="user-card__container">
                    <h3>${user.name}</h3>
                    <p><b>Email:</b> ${user.email} </p>
                    <p><b>Phone:</b> ${user.phone} </p>
                    <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                </div>
            </div>` ;
};