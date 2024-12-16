document.addEventListener("DOMContentLoaded", function() {
    const schoolSelect = document.getElementById("schoolSelect");
    const schoolInfo = document.getElementById("schoolInfo");

    // Event listener for school selection
    schoolSelect.addEventListener("change", function() {
        const selectedSchool = schoolSelect.value;
        if (selectedSchool === "comprehensive") {
            schoolInfo.innerHTML = `
                <h3>Madison Comprehensive High School</h3>
                <p>Madison Comprehensive High School is dedicated to fostering academic excellence and promoting student rights. It offers a wide variety of courses, extracurricular activities, and a commitment to student advocacy.</p>
            `;
        } else if (selectedSchool === "middle") {
            schoolInfo.innerHTML = `
                <h3>Madison Middle School</h3>
                <p>Madison Middle School provides a supportive environment for younger students, focusing on developing their educational and social skills, while promoting student rights and participation in school decisions.</p>
            `;
        }
    });

    // Set default info for the first school
    schoolSelect.dispatchEvent(new Event("change"));
});

