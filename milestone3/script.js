(function () {
    // Get references to the form and display area
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    // Handle form submission
    if (form) {
        form.addEventListener('submit', function (event) {
            var _a, _b, _c, _d;
            event.preventDefault(); // prevent page reload
            // Collect input values
            var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
            var phone = ((_b = document.getElementById('phone')) === null || _b === void 0 ? void 0 : _b.value) || '';
            var email = ((_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) || '';
            var address = ((_d = document.getElementById('address')) === null || _d === void 0 ? void 0 : _d.value) || '';
            // Collect all education entries
            var educationEntries = document.querySelectorAll('.education-entry');
            var educationHTML = '<ul>';
            educationEntries.forEach(function (entry) {
                var _a, _b, _c;
                var degree = ((_a = entry.querySelector('input[name="degree"]')) === null || _a === void 0 ? void 0 : _a.value) || '';
                var university = ((_b = entry.querySelector('input[name="university"]')) === null || _b === void 0 ? void 0 : _b.value) || '';
                var year = ((_c = entry.querySelector('input[name="year"]')) === null || _c === void 0 ? void 0 : _c.value) || '';
                educationHTML += "<li>".concat(degree, ", ").concat(university, " (").concat(year, ")</li>");
            });
            educationHTML += '</ul>';
            // Collect all experience entries
            var experienceEntries = document.querySelectorAll('.experience-entry');
            var experienceHTML = '<ul>';
            experienceEntries.forEach(function (entry) {
                var _a, _b, _c;
                var jobTitle = ((_a = entry.querySelector('input[name="job-title"]')) === null || _a === void 0 ? void 0 : _a.value) || '';
                var company = ((_b = entry.querySelector('input[name="company"]')) === null || _b === void 0 ? void 0 : _b.value) || '';
                var duration = ((_c = entry.querySelector('input[name="duration"]')) === null || _c === void 0 ? void 0 : _c.value) || '';
                experienceHTML += "<li>".concat(jobTitle, " at ").concat(company, " (").concat(duration, ")</li>");
            });
            experienceHTML += '</ul>';
            // Collect all skills
            var skillsEntries = document.querySelectorAll('.skills-entry');
            var skillsHTML = '<ul>';
            skillsEntries.forEach(function (entry) {
                var _a;
                var skill = ((_a = entry.querySelector('input[name="skill"]')) === null || _a === void 0 ? void 0 : _a.value) || '';
                skillsHTML += "<li>".concat(skill, "</li>");
            });
            skillsHTML += '</ul>';
            // Generate the resume content dynamically
            var resumeHTML = "\n            <h2><b>Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Address:</b> ").concat(address, "</p>\n\n            <h3>Education</h3>\n            ").concat(educationHTML, "\n\n            <h3>Experience</h3>\n            ").concat(experienceHTML, "\n\n            <h3>Skills</h3>\n            ").concat(skillsHTML, "\n            ");
            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
            else {
                console.error('The resume display element is missing.');
            }
        });
    }
    // Handle adding more education
    var addEducationButton = document.getElementById('add-education');
    var educationFieldsContainer = document.getElementById('education-fields');
    if (addEducationButton && educationFieldsContainer) {
        addEducationButton.addEventListener('click', function () {
            var newEducationEntry = document.createElement('div');
            newEducationEntry.classList.add('education-entry');
            newEducationEntry.innerHTML = "\n                <label>Degree:</label>\n                <input type=\"text\" name=\"degree\" placeholder=\"Enter your degree\" required>\n                \n                <label>University/Institute:</label>\n                <input type=\"text\" name=\"university\" placeholder=\"Enter your university/institute\" required>\n                \n                <label>Year:</label>\n                <input type=\"text\" name=\"year\" placeholder=\"Enter the year of graduation\" required>\n            ";
            educationFieldsContainer.appendChild(newEducationEntry);
        });
    }
    // Handle adding more experience
    var addExperienceButton = document.getElementById('add-experience');
    var experienceFieldsContainer = document.getElementById('experience-fields');
    if (addExperienceButton && experienceFieldsContainer) {
        addExperienceButton.addEventListener('click', function () {
            var newExperienceEntry = document.createElement('div');
            newExperienceEntry.classList.add('experience-entry');
            newExperienceEntry.innerHTML = "\n                <label>Job Title:</label>\n                <input type=\"text\" name=\"job-title\" placeholder=\"Enter your job title\" required>\n                \n                <label>Company:</label>\n                <input type=\"text\" name=\"company\" placeholder=\"Enter your company\" required>\n                \n                <label>Duration:</label>\n                <input type=\"text\" name=\"duration\" placeholder=\"Enter the duration\" required>\n            ";
            experienceFieldsContainer.appendChild(newExperienceEntry);
        });
    }
    // Handle adding more skills
    var addSkillButton = document.getElementById('add-skill');
    var skillsFieldsContainer = document.getElementById('skills-fields');
    if (addSkillButton && skillsFieldsContainer) {
        addSkillButton.addEventListener('click', function () {
            var newSkillEntry = document.createElement('div');
            newSkillEntry.classList.add('skills-entry');
            newSkillEntry.innerHTML = "\n                <label>Skill:</label>\n                <input type=\"text\" name=\"skill\" placeholder=\"Enter a skill\" required>\n            ";
            skillsFieldsContainer.appendChild(newSkillEntry);
        });
    }
})();
