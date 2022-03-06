// fetch("https://api.github.com/users/eyoelyil")
//   .then((res) => {
//     console.log(res.json());
//   })
//   .catch(() => {});

const formInput = document.getElementById("form-input");
const clearSearch = document.querySelector("input");

formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  let search = document.querySelector("input").value;
  console.log(search);

  fetch("https://api.github.com/users/" + search)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      document.getElementById(
        "search-result"
      ).innerHTML = `<a target="_blank" href="https://www.github.com/${search}"><img src="${data.avatar_url}"/></a>`;
    });
  clearSearch.value = "";
});
