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
      
      <div class= "my-3">
        <img
          src="${data.data[0].images.jpg.image_url}"
          alt="Pokemon name"
          class="img-fluid mx-auto d-block my-3"
        />
        
        <div class="card w-75" style="margin:0 auto;">
          <div class="card-body shadow bg-body rounded">
            <h1>${data.data[0].title}</h1>
            <p class = "small">${data.data[0].genres[0].name}, ${data.data[0].genres[1].name}</p>
            <p style="text-indent: 50px;">${data.data[0].synopsis}</p>
            <a href="${data.data[0].url}" class="btn btn-primary">Visit Official Site</a>
          </div>
        </div>
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
