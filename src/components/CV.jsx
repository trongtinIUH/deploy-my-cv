import React from 'react';

const CV = () => {
    return (
        <div className="cv-container">
            <header>
                <h1>Trần Trọng Tín</h1>
                <p>Contact Information: your.email@example.com | (123) 456-7890</p>
            </header>
            <section className="education">
                <h2>Education</h2>
                <ul>
                    <li>Bachelor of Science in Computer Science - University Name (Year)</li>
                    <li>Master of Science in Software Engineering - University Name (Year)</li>
                </ul>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>Job Title - Company Name (Year - Year)</li>
                    <li>Job Title - Company Name (Year - Year)</li>
                </ul>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>HTML</li>
                    <li>Node.js</li>
                </ul>
            </section>
            <footer>
                <p>Thank you for viewing my CV!</p>
            </footer>
        </div>
    );
};

export default CV;