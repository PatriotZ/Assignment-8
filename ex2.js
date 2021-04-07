const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();

  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {

      const pictureElement = document.createElement("img");
      pictureElement.src = user.avatar_url;
      pictureElement.style.height = "175px";
      pictureElement.style.width = "175px";
      const nameElement = document.createElement("div");
      nameElement.textContent = user.name;
      nameElement.style.fontSize = "25px";
      const websiteElement = document.createElement("a");
      websiteElement.href = user.blog;
      websiteElement.textContent = websiteElement.href;
      const createdDate =document.createElement("a");
      createdDate.href = user.created_at;
      createdDate.textContent= createdDate.href;
      const infosElement = document.getElementById("infos");
      infosElement.innerHTML = ""; 
      infosElement.appendChild(pictureElement);
      infosElement.appendChild(nameElement);
      infosElement.appendChild(websiteElement);
      infosElement.appendChild(createdDate);
    })


    .catch(err => {
      console.error(err.message);
    });
});