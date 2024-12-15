(() => { 
    // Get references to the form and display area
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

    // Handle form submission
    if (form) {
        form.addEventListener('submit', (event: Event) => {
            event.preventDefault(); // prevent page reload

            // Collect input values
            const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
            const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
            const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
            const address = (document.getElementById('address') as HTMLInputElement)?.value || '';

            // Collect all education entries
            const educationEntries = document.querySelectorAll('.education-entry');
            let educationHTML = '<ul>';
            educationEntries.forEach((entry) => {
                const degree = (entry.querySelector('input[name="degree"]') as HTMLInputElement)?.value || '';
                const university = (entry.querySelector('input[name="university"]') as HTMLInputElement)?.value || '';
                const year = (entry.querySelector('input[name="year"]') as HTMLInputElement)?.value || '';
                educationHTML += `<li>${degree}, ${university} (${year})</li>`;
            });
            educationHTML += '</ul>';

            // Collect all experience entries
            const experienceEntries = document.querySelectorAll('.experience-entry');
            let experienceHTML = '<ul>';
            experienceEntries.forEach((entry) => {
                const jobTitle = (entry.querySelector('input[name="job-title"]') as HTMLInputElement)?.value || '';
                const company = (entry.querySelector('input[name="company"]') as HTMLInputElement)?.value || '';
                const duration = (entry.querySelector('input[name="duration"]') as HTMLInputElement)?.value || '';
                experienceHTML += `<li>${jobTitle} at ${company} (${duration})</li>`;
            });
            experienceHTML += '</ul>';

            // Collect all skills
            const skillsEntries = document.querySelectorAll('.skills-entry');
            let skillsHTML = '<ul>';
            skillsEntries.forEach((entry) => {
                const skill = (entry.querySelector('input[name="skill"]') as HTMLInputElement)?.value || '';
                skillsHTML += `<li>${skill}</li>`;
            });
            skillsHTML += '</ul>';

            // Generate the resume content dynamically
            const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b><span contenteditable="true">${name}</span></p>
            <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
            <p><b>Email:</b><span contenteditable="true">${email}</span></p>
            <p><b>Address:</b><span contenteditable="true">${address}</span></p>

            <h3>Education</h3>
           <p contenteditable="true">${educationHTML}</p>

            <h3>Experience</h3>
           <p contenteditable="true">${experienceHTML}</p>

            <h3>Skills</h3>
           <p contenteditable="true">${skillsHTML}</p>
            `;

            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {
                console.error('The resume display element is missing.');
            }
        });
    }

    // Handle adding more education
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement | null;
    const educationFieldsContainer = document.getElementById('education-fields') as HTMLDivElement | null;
    if (addEducationButton && educationFieldsContainer) {
        addEducationButton.addEventListener('click', () => {
            const newEducationEntry = document.createElement('div');
            newEducationEntry.classList.add('education-entry');
            newEducationEntry.innerHTML = `
                <label>Degree:</label>
                <input type="text" name="degree" placeholder="Enter your degree" required>
                
                <label>University/Institute:</label>
                <input type="text" name="university" placeholder="Enter your university/institute" required>
                
                <label>Year:</label>
                <input type="text" name="year" placeholder="Enter the year of graduation" required>
            `;
            educationFieldsContainer.appendChild(newEducationEntry);
        });
    }

    // Handle adding more experience
    const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement | null;
    const experienceFieldsContainer = document.getElementById('experience-fields') as HTMLDivElement | null;
    if (addExperienceButton && experienceFieldsContainer) {
        addExperienceButton.addEventListener('click', () => {
            const newExperienceEntry = document.createElement('div');
            newExperienceEntry.classList.add('experience-entry');
            newExperienceEntry.innerHTML = `
                <label>Job Title:</label>
                <input type="text" name="job-title" placeholder="Enter your job title" required>
                
                <label>Company:</label>
                <input type="text" name="company" placeholder="Enter your company" required>
                
                <label>Duration:</label>
                <input type="text" name="duration" placeholder="Enter the duration" required>
            `;
            experienceFieldsContainer.appendChild(newExperienceEntry);
        });
    }

    // Handle adding more skills
    const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement | null;
    const skillsFieldsContainer = document.getElementById('skills-fields') as HTMLDivElement | null;
    if (addSkillButton && skillsFieldsContainer) {
        addSkillButton.addEventListener('click', () => {
            const newSkillEntry = document.createElement('div');
            newSkillEntry.classList.add('skills-entry');
            newSkillEntry.innerHTML = `
                <label>Skill:</label>
                <input type="text" name="skill" placeholder="Enter a skill" required>
            `;
            skillsFieldsContainer.appendChild(newSkillEntry);
        });
    }
})();
