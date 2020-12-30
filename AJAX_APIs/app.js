const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("Searching...");
    const userInput = form.elements.query.value
    if (userInput === "")
    {
        console.log("Please input the search keyword!")
        return false;
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
    let showNum = res.data.length;
    createNewImg(res.data, showNum);
})

const createNewImg = (shows, showNum) => {
    try {
        for (let i = 0; i < showNum - 1; i++) {
            if (shows[i].show.image.medium === null){
                console.log("No image.")
            }
            const img = document.createElement('IMG');
            img.src = shows[i].show.image.medium;
            document.body.append(img);
        }
    }
    catch {
        console.log("No show found.");
        return false;
    }   
}