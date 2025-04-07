let currentBanner = 0;
const images = document.querySelectorAll('.banner2 img');
const totalBanners = images.length;

function showBanner(index){
    images.forEach((img,i)=>{
        img.classList.toggle('active',i===index);
    })
}
function nextBanner(){
    currentBanner = (currentBanner +1) % totalBanners;
    showBanner(currentBanner);
}
showBanner(currentBanner);
setInterval(nextBanner, 3000);
