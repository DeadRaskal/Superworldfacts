// Function to generate a random cool fact
function generateRandomFact() {
    const coolFacts = [
        "The Great Wall of China is over 13,000 miles long!",
        "The Amazon Rainforest produces 20% of the world's oxygen supply.",
        "Mount Everest, the tallest mountain in the world, is still growing at a rate of about 0.16 inches (4mm) per year.",
        // Add more cool facts here
    ];
    const randomIndex = Math.floor(Math.random() * coolFacts.length);
    return coolFacts[randomIndex];
}

// Function to display a cool fact
function displayCoolFact() {
    const factList = document.getElementById('fact-list');
    const fact = generateRandomFact();
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    factList.appendChild(listItem);
}

// YouTube API setup
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        height: '360',
        width: '640',
        videoId: 'YOUR_YOUTUBE_VIDEO_ID',
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Callback function when the player is ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Google AdSense setup
function initializeAds() {
    (adsbygoogle = window.adsbygoogle || []).push({});
}

// Call functions to display a cool fact and initialize ads when the page loads
window.onload = function() {
    displayCoolFact();
    initializeAds();
};
