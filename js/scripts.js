 // Get the current mode from localStorage (if available)
        const currentMode = localStorage.getItem('mode');

        // Function to toggle between light and dark mode
        function toggleMode() {
            const body = document.body;
            const toggleButton = document.querySelector('.toggle i');

            // Toggle the class on the body to switch modes
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');

            // Toggle the icon to show the correct mode
            if (body.classList.contains('dark-mode')) {
                toggleButton.classList.remove('fa-adjust');
                toggleButton.classList.add('fa-sun');
            } else {
                toggleButton.classList.remove('fa-sun');
                toggleButton.classList.add('fa-adjust');
            }

            // Save the mode preference to localStorage
            const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('mode', mode);
        }

        // On initial load, set the mode based on localStorage or default to light mode
        if (currentMode === 'dark') {
            toggleMode(); // Switch to dark mode if it was last selected
        }

        // Function to show the loader
        function showLoader() {
            document.getElementById('loader').style.display = 'block';
        }

        // Function to hide the loader
        function hideLoader() {
            document.getElementById('loader').style.display = 'none';
        }

        // Simulate loading for demonstration purposes
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(hideLoader, 3000); // Hide the loader after 3 seconds
        });