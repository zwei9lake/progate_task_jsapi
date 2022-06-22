document.querySelector("#search").addEventListener("click", getAnime);

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getAnime(e) {
  const name = document.querySelector("#searchbar").value;

  fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".detailBox").innerHTML = `
      <div>
        
      </div>
      <div class="animeInfo">
        <h1>${data.data[0].title}</h3>
        <p>Weight: ${data.title}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".detailBox").innerHTML = `
      <h4>Data tidak ditemukan 😞</h4>
      `;
      console.log("Data tidak ditemukan", err);
    });

  e.preventDefault();
}

//  window();
//         function window() {
//           document.querySelector(".pokemonBox").innerHTML = `
//       <h4>Pokemon not found 😞</h4>
//       `;
//         }

//         console.log("Pokemon not found", err);
//       };
//     });
