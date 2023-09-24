export const featuredProjects = [
    {
        name: "Prompt GPT",
        description: "A app for sharing the best Chat-GPT prompts. The app is built using React and Next.js and I utilized next-auth to authenticate users. I used MongoDB and CRUD operation to create, read, update, and delete from the database. Lastly, I used Tailwind CSS to style the app.",
        image: "prompt-gpt.png",
        link: "https://prompt-gpt-cq4.vercel.app/",
        github: "https://github.com/M4DF1R3/prompt-gpt",
        techStack: ["React", "TypeScript", "MongoDB", "Next.js", "TailwindCSS"],
    },
    {
        name: "CIFAR-10 CNN",
        description: "I created a TensorFlow CNN model with a strong 88% validation accuracy for image classification based on the CIFAR-10 dataset. I optimized the model and prevented overfitting using data normalization, data augmentation, and dropout.",
        image: "tensorflow.png",
        link: "https://colab.research.google.com/drive/1HjhKMIfhluU632alPclaVytBIC3u7lnA?usp=sharing",
        github: "",
        techStack: ["TensorFlow 2.0", "Python", "NumPy", "Matplotlib"],
    },
    {
        name: "Game Discovery Website",
        description: "A Game Discovery App that lets you filter for games based on genre, platform, search and you can also sort by relevance, popularity, and more. I utilized the RAWG API and Axios and hooks to fetch a list of games filtered. I focused on making the code is modular and reusable. This project helped my solidfy my understanding of React, hooks, and props.",
        image: "game-discovery.png",
        link: "https://game-discovery-cq4.vercel.app/",
        github: "https://github.com/M4DF1R3/game-discovery-app",
        techStack: ["React", "TypeScript", "Axios", "Chakra UI"],
    },
]

export const projects = [
    {
        name: "Navigation System",
        description: "I worked independently on a Navigation System that required me to implement Dijkstra’s algorithm, data parsing, and the in and out pipe communication to the pygame plotter. I created a C++ class called digraph.cpp and implemented Dijkstra's algorithm to determine the least cost path between two points on the map. Through my implementation of unordered maps and a min heap, my algorithm achieved an efficient time complexity.",
        image: "nav-system.png",
        link: "",
        github: "https://github.com/M4DF1R3/Navigation-System-CPP-Python",
        techStack: ["C++", "Python", "Pygame"],
    },
    {
        name: "Budget Website",
        description:"I created a budget website that allows users to track their expenses. User can login and add/remove/edit expenses and create/delete/edit budgets. I used MySQL to store the user's data and login info and I used PHP to handle the backend.",
        image: "budget.png",
        link: "",
        github: "https://github.com/M4DF1R3/Budget-App-PHP",
        techStack: ["Php", "MySQL", "CSS"],
      },
      {
        name: "Particle Reaction Simulator",
        description: "I collaborated with 4 other members at the 2023 HackED hackathon to produce a working model within 24 hours. We successfully simulated 3D elastic collisions between hundreds of particles and reacted to form a new particle utilizing Three.js. In addition, we added macroscopic properties such as temperature which can affect the velocity of each particle and the reaction speed.",
        image: "particle.png",
        link: "",
        github: "https://github.com/M4DF1R3/large-hackron-collider",
        techStack: ["Three.js", "JavaScript", "HTML", "CSS"],
      },
];