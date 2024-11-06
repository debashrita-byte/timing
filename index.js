<script>
    let totalTime = 30 * 60; // 30 minutes in seconds
    const timerDisplay = document.getElementById('timerDisplay');

    // Function to start the countdown timer
    const countdown = setInterval(() => {
        totalTime--;
        const minutes = Math.floor(totalTime / 60); // Convert to minutes
        const seconds = totalTime % 60; // Remainder is seconds
        timerDisplay.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format time display

        if (totalTime <= 0) {
            clearInterval(countdown); // Stop the timer when it reaches 0
            timerDisplay.textContent = "Time's up!";
            // You can trigger any other game-over logic here or redirect to a different page
        }
    }, 1000); // Update the timer every 1 second
</script>
