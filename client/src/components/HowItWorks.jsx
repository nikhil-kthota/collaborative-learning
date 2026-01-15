import React, { useEffect } from 'react';
import '../styles/HowItWorks.css';

const steps = [
    {
        title: "Sign Up and Create a Group",
        desc: "Create your CoLearn account and set up a new group in seconds. Each group becomes a shared space where members collaborate, learn, and build together."
    },
    {
        title: "Invite Members to Your Group",
        desc: "Invite others by sharing an invite link or by providing the group ID and password. Control who joins your group and manage member access easily."
    },
    {
        title: "Share Files and Resources",
        desc: "Upload documents, notes, and code files directly to the group. All shared resources are instantly accessible to group members."
    },
    {
        title: "Collaborate in Real Time",
        desc: "Edit files and code together with live updates. See changes instantly and work collaboratively as a team."
    },
    {
        title: "Communicate Through Built-In Chat",
        desc: "Use built-in chat to discuss ideas, clarify doubts, and collaborate without leaving the platform."
    },
    {
        title: "Learn with AI Assistance",
        desc: "Select shared files as context and ask the AI assistant questions. Get explanations, summaries, and code help tailored to your group’s content."
    },
    {
        title: "Manage Group Access and Security",
        desc: "Assign roles, manage permissions, and keep your group’s data secure using reliable authentication and storage."
    },
    {
        title: "Learn and Build Together",
        desc: "All collaboration including files, conversations, code, and AI support happens inside your group, making learning more focused and efficient."
    }
];

const HowItWorks = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const steps = document.querySelectorAll('.timeline-step');
        steps.forEach(step => observer.observe(step));
        return () => steps.forEach(step => observer.unobserve(step));
    }, []);

    return (
        <section className="how-it-works-section" id="how-we-work">
            <h2 className="section-title">How CoLearn Works</h2>

            <div className="timeline-container">
                {/* Vertical Line */}
                <div className="timeline-line"></div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`timeline-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}
                    >
                        {/* Circle Indicator */}
                        <div className="step-number">{index + 1}</div>

                        {/* Content Box */}
                        <div className="step-content-box">
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
