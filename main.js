//PAGE ELEMENTS
let body = document.body;
let tokyo_button = document.getElementById("tokyo_button");
let kitten_button = document.getElementById("kitten_button");
let metal_button = document.getElementById("metal_button");
let h1 = document.getElementsByTagName("h1")[0];
let p = document.getElementsByTagName("p")[0];

//TEXT
let kittenText = "A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days."
let tokyoText = "The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira."
let metalText = "Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States."

//CHANGE THEME LOGIC
const changeTheme = (theme) => {
  console.log("Theme is changed!", theme)
  if (theme === "kittens") {
    body.id = "kittens";
    h1.textContent = "Kittens";
    p.textContent = kittenText;
  }
  if (theme === "tokyo") {
    body.id = "tokyo";
    h1.textContent = "Neo Tokyo";
    p.textContent = tokyoText;
  }
  if (theme === "metal") {
    body.id = "metal";
    h1.textContent = "Heavy Metal";
    p.textContent = metalText;
  }
}

// ADD EVENT LISTENERS TO PAGE
kitten_button.addEventListener("click", () => changeTheme("kittens"));
tokyo_button.addEventListener("click", () => changeTheme("tokyo"));
metal_button.addEventListener("click", () => changeTheme("metal"));
