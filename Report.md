 The Project Report

**Course:** Fundamentals of AIML - Bring Your Own Project (BYOP)
**Project Title:** Hackathon Team Website: A Centralized Hackathon Team Portfolio
**Student Name:** Balaji Pathak
**Specialization:** B.Tech AIML

#### 1. Introduction & Problem Statement
The modern hackathon environment requires highly cross-functional teams to build complex software in short timeframes. Within our team, KaizenCastor, members handle vastly different responsibilities—spanning Artificial Intelligence, Cloud Infrastructure, Data Science, and Web Development. 

**The Problem:** Because our roles are so distinct, our individual contributions often get lost in the overarching team repository. When networking with recruiters, judges, or other developers, there is no single source of truth that effectively showcases *both* what we have achieved collaboratively as a unit, and what each member builds individually in their specific domain.

#### 2. Why It Matters
A team’s digital presence is just as important as the code they write. Without a centralized portfolio, evaluating a team's diverse skill set requires hunting down four different GitHub profiles and piecing together project histories. Hackathon Team Website solves this by providing a unified, professional point of contact. It matters because it transforms fragmented individual efforts into a cohesive, professional agency-style portfolio, vastly improving our visibility and networking capabilities in the tech community.

#### 3. Approach & Solution
To address this, I developed a centralized web application. The core approach was to build a highly responsive, one-page scrolling website that acts as a directory. 
The solution is structured into three main pillars:
1. **The Collective:** A macro-view of the Hackathon team, detailing our hackathon participation history and collective wins.
2. **The Projects:** A gallery of our joint repositories, complete with problem statements and tech stacks.
3. **The Individuals:** Micro-portfolios embedded within the site. This allows a visitor to filter by domain (e.g., viewing AI models developed by Jishnu, cloud architectures deployed by Rajvee, or data pipelines built by Suvradeep) without leaving the page.

#### 4. Key Decisions
* **Choosing Next.js:** I opted for Next.js over vanilla React because of its superior performance and optimized routing capabilities, which are crucial for a media-heavy portfolio site.
* **One-Page Scroll Architecture:** Instead of a multi-page site where users might lose context, I chose a single-page scrolling layout to tell a continuous story from the team level down to the individual level.
* **Deployment on Vercel:** To ensure the portfolio is always up-to-date with our latest hackathon projects, I integrated the GitHub repository with Vercel for continuous deployment. Every push to the main branch automatically updates the live site.

#### 5. Challenges Faced
* **Data Aggregation:** Designing a UI that equally highlighted four vastly different technical domains without cluttering the screen was a significant design challenge.
* **Deployment Troubleshooting:** Setting up the CI/CD pipeline required debugging some initial deployment errors on Vercel related to environment configurations and build commands, which required careful review of the build logs.
* **Version Control Management:** Acting as the primary maintainer of the repository meant strictly managing branches and merges to ensure team members could provide their personal data and project links without causing merge conflicts.

#### 6. What I Learned
Through this BYOP capstone, I bridged the gap between theoretical web development and a real-world utility application. I deepened my understanding of modern frontend frameworks (Next.js), mastered deployment pipelines (Vercel), and improved my project management skills by coordinating the digital representation of a multi-disciplinary team. Most importantly, I learned how to structure UI/UX to solve an information architecture problem.

#### 7. Conclusion
This website is more than just a course project; it is a living, functional tool that our team will continue to use and update as we attend future hackathons. It successfully applies the principles of web development and software engineering to solve a real-world problem of digital identity and team collaboration.

---

**Would you like me to help you draft the specific descriptions for any of the hackathon projects you plan to feature on the website?**