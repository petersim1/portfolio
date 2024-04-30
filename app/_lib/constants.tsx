export const cycle = ["machine learning", "web dev", "web3", "sports", "research"];

export const education = [
  {
    img: "/images/nyu.png",
    title: "NYU, M.S. Data Science",
    courses: ["Deep Learning", "Cognitive Modeling", "Sports Modeling", "Linear Algebra"],
  },
  {
    img: "/images/umd.png",
    title: "UMD, B.S. Bioengineering",
    courses: ["Bioinformatics", "Biological Datamining", "Biocomputation"],
  },
];

export const projects = [
  {
    title: "Bevor",
    year: 2023,
    description: {
      text: "Decentralized audit facilitation platform for the web3 ecosystem.",
      image: "/images/og_bevor.png",
      languages: ["javascript", "solidity", "html", "css", "sql"],
      tools: ["nextjs", "wagmi", "ethersjs", "DAOs", "smart contracts", "prisma", "postgres"],
      links: [
        {
          type: "site",
          link: "https://bevor.io/",
        },
        {
          type: "github",
          link: "https://github.com/Bevor-Protocol",
        },
      ],
    },
  },
  {
    title: "Blackjack Gameplay",
    year: 2023,
    description: {
      text: "Application for playing and learning optimal strategy in Blackjack, \
      using a Deep Reinforcement Learning model for inference.",
      image:
        "https://mirror-media.imgix.net/publication-images/1PBrFqkO8npyjOLoNQt4-.jpeg?height=320&width=640&h=320&w=640&auto=compress",
      languages: ["python", "typescript", "javascript"],
      tools: ["pytorch", "deep learning", "onnx", "nextjs", "starlette", "websocket"],
      links: [
        {
          type: "site",
          link: "https://blackjack-webapp.vercel.app",
        },
        {
          type: "github",
          link: "https://github.com/petersim1/blackjack-api",
        },
        {
          type: "github",
          link: "https://github.com/petersim1/blackjack-webapp",
        },
      ],
    },
  },
  {
    title: "Strava Visualizer",
    year: 2023,
    description: {
      text: "Connect with Strava and view your historical route overlays.",
      image: "/images/og_strava.png",
      languages: ["javascript", "html", "css"],
      tools: ["nextjs", "indexeddb", "strava api", "oauth", "jwt", "d3.js"],
      links: [
        {
          type: "site",
          link: "https://strava.petersim.one",
        },
        {
          type: "github",
          link: "https://github.com/petersim1/strava-next",
        },
      ],
    },
  },
  {
    title: "Active Listening AI",
    year: 2023,
    description: {
      text: "AI orchestration pipeline for automating form-filling processes \
      from video conferencing conversations, using LLM's, speech recognition models, and RAG methods.",
      image: "",
      languages: ["python"],
      tools: [
        "starlette",
        "openai api",
        "recall ai",
        "assembly ai",
        "chroma db",
        "llama-index",
        "streamlit",
      ],
      links: [],
    },
  },
  {
    title: "Sightings",
    year: 2023,
    description: {
      text: "Hub for teams to aggregate team communication, and assist with knowledge dispersal and \
      insight generation, all based off Slack channel messages.",
      image: "/images/sightings_og.png",
      languages: ["python", "javascript", "html", "css"],
      tools: [
        "starlette",
        "nodejs",
        "express",
        "nextjs",
        "slack sdk",
        "rest api",
        "openai api",
        "firebase",
      ],
      links: [
        {
          type: "site",
          link: "https://sightings-next.vercel.app/",
        },
      ],
    },
  },
  {
    title: "TL;DR",
    year: 2023,
    description: {
      text: "Summarize PDF documents of any length using LLM's",
      image: "/images/og_tldr.jpg",
      languages: ["javascript", "html", "css"],
      tools: ["nextjs", "openai api", "orm"],
      links: [
        {
          type: "site",
          link: "https://tldr.variable.space",
        },
      ],
    },
  },
  {
    title: "Agree",
    year: 2023,
    description: {
      text: "On-chain protocol for document signing and money-movement, built at an ETH Global hackathon",
      image: "/images/og_agree.jpeg",
      languages: ["javascript", "html", "css"],
      tools: ["nextjs", "ethersjs", "wagmi", "firebase", "smart contracts", "rest api"],
      links: [
        {
          type: "site",
          link: "https://agree.xyz",
        },
      ],
    },
  },
];

export const contacts = [
  {
    type: "github",
    link: "https://github.com/petersim1",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/psim1/",
  },
  {
    type: "twitter",
    link: "https://twitter.com/pete_sim1",
  },
  {
    type: "email",
    link: "mailto:plssimone@gmail.com",
  },
];
