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
        github: "https://colab.research.google.com/drive/1HjhKMIfhluU632alPclaVytBIC3u7lnA?usp=sharing",
        techStack: ["TensorFlow 2.0", "Python", "NumPy", "Matplotlib"],
    },
    {
        name: "Game Discovery Website",
        description: "A Game Discovery App that lets you filter for games based on genre, platform, and search. You can also sort by relevance, popularity, and more. I utilized the RAWG API and Axios and hooks to fetch a list of games filtered. I focused on making the code is modular and reusable. This project helped my solidfy my understanding of React, hooks, and props.",
        image: "game-discovery.png",
        link: "https://game-discovery-cq4.vercel.app/",
        github: "https://github.com/M4DF1R3/game-discovery-app",
        techStack: ["React", "TypeScript", "Axios", "Chakra UI"],
    },
]