// Replace YOUR_DEEPSEEK_API_KEY with your actual key
const API_URL = "https://api.deepseek.com/v1/chat/completions";
const API_KEY = "APIKEY";

const form = document.getElementById("storyForm");
const storyContainer = document.getElementById("storyContainer");
const clearButton = document.getElementById("clearStories");

// Event 1: Submit form (click)
form.addEventListener("submit", function (e) {
    e.preventDefault();
    generateStory();
});

// Event 2: Clear all stories (click)
clearButton.addEventListener("click", function () {
    storyContainer.innerHTML = "";
});

// Event 3: Double-click to favorite a story
storyContainer.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("story-card")) {
        e.target.style.backgroundColor = "#fde68a"; // Mark as favorite
    }
});

// Function to generate story using DeepSeek
async function generateStory() {
    const genre = document.getElementById("genre").value;
    const character = document.getElementById("character").value.trim();
    const setting = document.getElementById("setting").value.trim();

    if (!genre || !character || !setting) {
        alert("Please fill in all fields!");
        return;
    }

    const prompt = `Write a short ${genre} story about ${character} in a ${setting}.`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat", 
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            throw new Error("API request failed!");
        }

        const data = await response.json();
        const storyText = data.choices[0].message.content;

        displayStory(storyText, genre, character);
    } catch (error) {
        console.error(error);
        alert("Failed to generate story. Please try again.");
    }
}

// Function to dynamically create a story card
function displayStory(storyText, genre, character) {
    const storyCard = document.createElement("div");
    storyCard.className = "story-card";
    storyCard.innerHTML = `
        <h3>Genre: ${genre}</h3>
        <h4>Main Character: ${character}</h4>
        <p>${storyText}</p>
        <p><strong>Word Count:</strong> ${storyText.split(" ").length}</p>
    `;
    storyContainer.prepend(storyCard);
}
