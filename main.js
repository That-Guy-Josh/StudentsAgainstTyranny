document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav ul li a");
    const tabContents = document.querySelectorAll(".tab-content");

    // Function to switch between tabs
    function switchTab(e) {
        // Remove active class from all tabs and content sections
        tabs.forEach(tab => tab.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        const targetTab = e.target.getAttribute("data-tab");
        e.target.classList.add("active");
        document.getElementById(targetTab).classList.add("active");
    }

    // Event listener for tab navigation
    tabs.forEach(tab => {
        tab.addEventListener("click", switchTab);
    });

    // Set default active tab to "Home"
    document.querySelector("[data-tab='home']").classList.add("active");
    document.getElementById("home").classList.add("active");

    // Optional: Add more animations or transitions to enhance the UX, if necessary
});
