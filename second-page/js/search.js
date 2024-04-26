
const btnSearch = document.querySelector("#btn-search")
const result = document.querySelector("#result")

btnSearch.addEventListener("click", () => {
  const search = document.querySelector("#search").value
  
  result.innerHTML = `<img class="resultado" src="https://source.unsplash.com/800x400/?${search}">`
})


