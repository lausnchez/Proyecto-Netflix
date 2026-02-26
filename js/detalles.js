const serie = {
    "descripcion": "Drama histórico ambientado en el Japón feudal.",
    "titulo": "Shogun",
    "año": 2024,
    "genero": "Drama",
    "tiempo": 60,
    "temporadas": [
        {
            "numero": 1,
            "capitulos": [
                {
                    "numero": 1,
                    "duracion": 60,
                    "descripcion": "Un navegante inglés llega a Japón y cambia el equilibrio político."
                },
                {
                    "numero": 2,
                    "duracion": 58,
                    "descripcion": "Las tensiones entre los daimyos aumentan mientras el extranjero aprende la cultura japonesa."
                },
                {
                    "numero": 3,
                    "duracion": 62,
                    "descripcion": "Se forjan alianzas estratégicas en medio de la amenaza de guerra civil."
                },
                {
                    "numero": 4,
                    "duracion": 59,
                    "descripcion": "Una traición inesperada altera los planes del señor feudal."
                },
                {
                    "numero": 5,
                    "duracion": 61,
                    "descripcion": "El conflicto armado estalla y pone a prueba la lealtad de los samuráis."
                },
                {
                    "numero": 6,
                    "duracion": 63,
                    "descripcion": "El destino del poder en Japón se decide en una confrontación definitiva."
                }
            ]
        }
    ]
};

const peli = {
    "descripcion": "Shrek y Fiona viajan al reino de Muy Muy Lejano para conocer a los padres de ella.",
    "titulo": "Shrek 2",
    "año": 2004,
    "duracion": 93,
    "genero": "Animación",
    "imagen": ""
};

document.getElementById("titulo").textContent = serie.titulo;
document.getElementById("descripcion").textContent = serie.descripcion;
document.getElementById("detalles").textContent = `${serie.genero} - ${serie.año} - ${serie.tiempo} mins`;
document.getElementById("temporadas").textContent = `${serie.temporadas.length} Temporadas`;

// Imprimir capitulos
const container_capitulos = document.querySelector("#contenedor_general_capitulos");
let temporada = serie.temporadas[0];
temporada.capitulos.forEach(capitulo =>{
    let capDiv = document.createElement("div");
    capDiv.classList.add("container_capitulos_serie");
    capDiv.innerHTML = `
        <div class="mini_episodio">
            <i class="bi bi-camera-reels"></i>
        </div>
        <div class="info_episodio">
            <h4>Capítulo ${capitulo.numero}</h4>
            <span>${capitulo.duracion} mins</span>
            <p>${capitulo.descripcion}</p>
            <a href="reproduccionPelicula.html">Reproducir</a>
        </div>
    `;
    container_capitulos.appendChild(capDiv);
});