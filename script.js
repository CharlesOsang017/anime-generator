const btnEl = document.getElementById('btn')
const animeContainerEl = document.querySelector('.anime-container')
const animeImgEl = document.querySelector('.anime-img')
const animeNameEl = document.querySelector('.anime-name')

const BASEURL = 'https://api.catboys.com/img';

const getAnime = async() =>{
    try {
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...'
        animeNameEl.innerText = 'Updating...'
        const response = await fetch(BASEURL)
        const data = await response.json()
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime'
        animeContainerEl.style.display = 'block'
        animeImgEl.src = data.url
        animeNameEl.innerText = data.artist;
    } catch (error) {
        
    }
}

btnEl.addEventListener('click', getAnime)