export const featuredProjects = [
  {
    name: "Blog Website",
    description: "I developed a full-stack blog website using Angular for the frontend with ASP.NET and SQL Server for the backend, delivering a responsive and user-friendly interface. I implemented RESTful APIs with a DTO and repository pattern, creating an efficient abstraction layer for seamless data management while decoupling domain objects from the schema, resulting in a maintainable and scalable application.",
    image: "bloggo.png",
    link: "https://prompt-gpt-cq4.vercel.app/",
    github: "https://github.com/M4DF1R3/prompt-gpt",
    techStack: ["Angular", "ASP.NET", "SQL Server", "TypeScript", "TailwindCSS"],
  },
  {
    name: "Genetic Algorithms Asteroids Bot",
    description: "I built an bot to play the Kessler Game (Asteroids) using PyGAD, applying genetic algorithms for evolutionary optimization. I fine-tuned performance through mutation, crossover, and fitness-based selection in a simulated testing environment, winning 1st place in a class competition.",
    image: "KesslerGame.png",
    link: "",
    github: "https://github.com/M4DF1R3/KesslerGameFuzzy",
    techStack: ["Python", "PyGAD", "Scikit-fuzzy"],
  },
//   {
//     name: "CIFAR-10 CNN",
//     description: "I created a TensorFlow CNN model with a strong 88% validation accuracy for image classification based on the CIFAR-10 dataset. I optimized the model and prevented overfitting using data normalization, data augmentation, and dropout.",
//     image: "cifar-10.jpg",
//     link: "https://colab.research.google.com/drive/1HjhKMIfhluU632alPclaVytBIC3u7lnA?usp=sharing",
//     github: "",
//     techStack: ["TensorFlow 2.0", "Python", "NumPy", "Matplotlib"],
//   },
  {
    name: "Game Discovery Website",
    description: "A Game Discovery App that lets you filter for games based on genre, platform, search and you can also sort by relevance, popularity, and more. I utilized the RAWG API and Axios and hooks to fetch a list of filtered games. I focused on making the code is modular and reusable. This project helped my solidfy my understanding of hooks, props, and APIs.",
    image: "game-discovery.png",
    link: "https://game-discovery-cq4.vercel.app/",
    github: "https://github.com/M4DF1R3/game-discovery-app",
    techStack: ["React", "TypeScript", "Axios", "Chakra UI"],
  },
]

export const projects = [
  {
    name: "Prompt GPT",
    description: "The ultimate app for discovering and sharing the most creative and powerful ChatGPT prompts! Built with React and Next.js, Prompt GPT offers a seamless and dynamic user experience. I've integrated next-auth to provide secure and intuitive user authentication, making sure each user can easily create their own account and join the community. The app is powered by a robust MongoDB database, enabling full CRUD operations to create, read, update, and delete your favorite prompts.",
    image: "prompt-gpt.png",
    link: "https://prompt-gpt-cq4.vercel.app/",
    github: "https://github.com/M4DF1R3/prompt-gpt",
    techStack: ["React", "TypeScript", "MongoDB", "Next.js", "TailwindCSS"],
  },
  {
    name: "Navigation System",
    description: "I worked independently on a Navigation System that required me to implement Dijkstra’s algorithm, data parsing, and the in and out pipe communication to the pygame plotter. I created a C++ class called digraph.cpp and implemented Dijkstra's algorithm to determine the least cost path between two points on the map. Through my implementation of unordered maps and a min heap, my algorithm achieved an efficient time complexity.",
    image: "nav-system.png",
    link: "",
    github: "https://github.com/M4DF1R3/Navigation-System-CPP-Python",
    techStack: ["C++", "Python", "Pygame"],
  },
  {
    name: "Fruits360 CNN",
    description: "I built a robust fruit classification system using a pre-trained ResNet50 model with additional layers to accurately categorize a diverse dataset of 60 different fruits images of 100x100x3, achieving a validation accuracy exceeding 99%. Implemented standard ML techniques, including the creation of a confusion matrix for performance evaluation and the implementation of data augmentation for improved model generalization",
    image: "fruits-360.png",
    link: "https://colab.research.google.com/drive/1WbaJXYpmdpeHrYeMSsSnEyP5OC2v4kpd?usp=sharing",
    github: "",
    techStack: ["Three.js", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Particle Reaction Simulator",
    description: "I collaborated with 4 other members at the 2023 HackED hackathon to produce a working model within 24 hours. We successfully simulated 3D elastic collisions between hundreds of particles and reacted to form a new particle utilizing Three.js. In addition, we added macroscopic properties such as temperature which can affect the velocity of each particle and the reaction speed.",
    image: "particle.png",
    link: "",
    github: "https://github.com/M4DF1R3/large-hackron-collider",
    techStack: ["Three.js", "JavaScript", "HTML", "CSS"],
  }
];

export const footerLinks = [
  {
    title: "Socials",
    links: [
      { title: "LinkedIn", url: "https://www.linkedin.com/in/cq4/" },
      { title: "GitHub", url: "https://github.com/M4DF1R3" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: "Email: cq4@ualberta.ca", url: "" },
      { title: "Mobile: 587-921-1315", url: "" },
    ],
  },
];