window.addEventListener("load", function(event) {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.billboard.com/charts/latin-songs')}`)
        .then(response => {
            if (response.ok) return response.json()
            throw new Error('Network response was not ok.')
        })
        .then(data => document.getElementById('Billboard-Data').innerHTML = data.contents);
    setTimeout(function(){
        putData();
    }, 5000);
});
function putData() {
    for (let i = 0; i <= 9; i++) {
        try {document.getElementsByClassName('music-charts__title')[i].innerHTML = document.getElementsByClassName('chart-list-item__title-text')[i].innerText;} catch (error) {}
        try {document.getElementsByClassName('music-charts__subtitle')[i].innerHTML = document.getElementsByClassName('chart-list-item__artist')[i].childNodes[1].innerText;} catch (error) {}
        try {document.getElementsByClassName('music-charts__subtitle')[i].innerHTML = document.getElementsByClassName('chart-list-item__artist')[i].innerText;} catch (error) {}
        try {document.getElementsByClassName('trend__icon')[i].childNodes[1].src = document.getElementsByClassName('chart-list-item__trend-icon')[i].childNodes[1].src;} catch (error) {}
        try {document.getElementsByClassName('music-charts__image')[i].childNodes[1].src = document.getElementsByClassName('chart-list-item__image-wrapper')[i].childNodes[3].dataset.src.replaceAll("53", "344");} catch (error) {}
        try {document.getElementsByClassName('music-charts__image')[i].childNodes[1].src = document.getElementsByClassName('chart-list-item__image-wrapper')[i].childNodes[5].dataset.src.replaceAll("53", "344");} catch (error) {}
    }
    $('#Billboard-Data').remove();
    $('iframe').remove();
    console.clear();
}
