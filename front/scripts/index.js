console.log(tempData);
const elementos = document.getElementById("tarjetas");
tempData.forEach(movie=>{
const cartas = document.createElement("div");
infomovie.classlit.add("infomovie");
const poster = document.createElement("img");
poster.src = movie.poster;
poster.alt = movie.title;
const title = document.createElement("h2");
movietitle.texcontent = movietitle;


cartas.appendChild(poster);
cartas.appendChild(title);
elementos.appendChild(cartas);
});