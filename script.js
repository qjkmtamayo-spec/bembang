// Wait for the DOM to load before attaching events
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const introForm = document.getElementById('introForm');
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const hobbiesInput = document.getElementById('hobbiesInput');
    const bioInput = document.getElementById('bioInput');
    const introCard = document.getElementById('introCard');
    const introName = document.getElementById('introName');
    const introDetails = document.getElementById('introDetails');
    const resetBtn = document.getElementById('resetBtn');

    // Function to generate and display the self-introduction
    function generateIntroduction() {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const hobbies = hobbiesInput.value.trim();
        const bio = bioInput.value.trim();

        // Basic validation: Ensure name and age are provided
        if (name === '' || age === '') {
            alert('Please fill in at least your name and age.');
            return;
        }

        // Update the intro card content
        introName.textContent = Hello, I'm ${name}!;
        introDetails.innerHTML = `
            <strong>Age:</strong> ${age}<br>
            <strong>Hobbies:</strong> ${hobbies || 'Not specified'}<br>
            <strong>About Me:</strong> ${bio || 'No bio provided.'}
        `;

        // Show the intro card with animation
        introCard.classList.add('show');
    }

    // Event listener for form submission (prevents default and calls generateIntroduction)
    introForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        generateIntroduction();
    });

    // Event listener for reset button (clears inputs and hides intro card)
    resetBtn.addEventListener('click', function() {
        introForm.reset(); // Clear all form inputs
        introCard.classList.remove('show'); // Hide the intro card
    });
});