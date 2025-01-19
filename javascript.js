
// Fetch a new fact when the button is clicked
document.getElementById("fetch-fact-btn").addEventListener("click", fetchFact);

// Function to fetch a fact from the API
async function fetchFact() {
  const factBox = document.getElementById("fact-box");
  factBox.textContent = "Loading...";

  try {
    const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const data = await response.json();
    factBox.textContent = data.text;
  } catch (error) {
    factBox.textContent = "Sorry, we couldn't fetch a fact. Please try again.";
    console.error("Error fetching fact:", error);
  }
}
