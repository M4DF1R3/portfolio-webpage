import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="bg-base-200 pb-8 px-24">
      <h1 className="header text-center font-bold text-6xl pb-8">Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-black">Web Developer | Engineering Students’ Society</div>
            <div className="font-mono italic">Sep 2022 - Apr 2024</div>
            <p className="text-start">
              Drafted and developed modern user interfaces with JavaScript frameworks, HTML, and CSS, which increased audience engagement by 46%.
              Collaborated with the IT team to enhance the ESS website by implementing new functionality and integrating a more streamlined design.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">React Developer | The Fresh Living</div>
            <div className="font-mono italic">May 2023 - Jun 2023</div>
            <p>
              Contracted to deliver a responsive, well-polished website within 2 months.
              I leaveraged React, Next.js, and Tailwindcss to build modular components, improving code maintainability and consistency across the application.
              With multilingual customers, implemented seamless multi-language support utilizing next-intl, enhancing user experience for international audiences.
              Reduced webpage loading time and improved SEO performance using server rendered components.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-black">Software Developer Student | PCL Construction</div>
            <div className="font-mono italic">Jan 2024 - Aug 2024</div>
            <p className="text-start">
              During my time at PCL, I optimized the codebase and introduced new features for the Industrial Project Management (IPM) C# desktop application.
              My contribution included building a multi-threaded, asynchronous reporting system, greatly enhancing the efficiency of batch report exports. I leveraged APIs to
              determine the storage location of specification drawings (on-premise or cloud) for streamlined access and retrieval. Additionally, I developed RESTful APIs
              and refactored backend services to align with the domain model, boosting maintainability. Lastly, I created an automated ML pipeline utilizing image processing
              and TensorFlow, refining a ResNet model to achieve accurate label recognition in technical drawings.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">Undergraduate Research | University of Alberta</div>
            <div className="font-mono italic">Sep - Dec 2024</div>
            <p>
                To enhance drug sensitivity predictions using cancer genomic data, I developed a machine learning pipeline using popular ML libraries from TensorFlow, PyTorch,
                scikit-learn to focused on predictive modeling. Preprocessing and training workflows were implemented using scikit-learn, streamlining data preparation 
                and analysis. Dimensionality reduction techniques and various models, including Elastic Net, Graph Neural Networks (GNN), and Support Vector Machines
                (SVM), were applied to optimize predictive performance. Validation helped identify the most effective approaches for improving
                drug response predictions, contributing to more accurate and insightful genomic-driven treatment strategies. Supervised by PhD Dr. Lei Ma and completed a academic paper.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              // fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-black">Available for 8-month co-op</div>
            <div className="font-mono italic">May 2025 - Dec 2025</div>
            <p>
              As an 4th year student with 7 semesters completed, I'm looking to wrap my degree with experience in software engineering or machine learning.
              I will return to school in January 2026 for my final semester, graduating May 2026.
            </p>
          </div>
          {/* <hr /> */}
        </li>

      </ul>
    </div>
  );
};

export default Experience;
