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
    title: "Blackjack Gameplay",
    year: 2023,
    description: {
      text: "Wrote custom python modules to handle blackjack gameplay, and deployed\
      a Starlette Websocket server to allow users to interact with it.\
      Created a NextJS application to interface with the websocket server and have users\
      play blackjack. With a Deep Q Learning model that I previously trained for learning\
      optimal blackjack strategy, I converted the pytorch model to ONNX and host it directly\
      on the client, so users can see optimal moves.",
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
      text: "Engineered an application based off Strava's API, allowing users\
      to oauth with their strava account and view an aggregate data visualization of\
      their routes. Solely reliant on Browser Storage API's, so no data is retained\
      by the application itself.",
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
    title: "Bevor",
    year: 2023,
    description: {
      text: "Co-developed a POC (with plans to fully build) for a decentralized\
      auditing protocol within the web3 ecosystem. Built out the marketing page, protocol dApp,\
      helped guide the DAO and protocol designs, conducted market research, and presented to\
      incubator programs and partners.",
      image: "/images/og_bevor.png",
      languages: ["javascript", "solidity", "html", "css"],
      tools: ["nextjs", "wagmi", "ethersjs", "DAOs", "smart contracts"],
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
    title: "Active Listening AI",
    year: 2023,
    description: {
      text: "Developed a microservice for actively listening to video conferencing\
      calls and automating post-call form-filling processes for various types\
      of form responses. Integrated with 3rd party services for audio streaming,\
      speech recognition, LLM's, AI tooling, and vector databases. Built out a \
      custom Starlette API for internal use. Led the development, established performance\
      criteria, and created documentation.",
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
      text: "NextJS application allowing users to oauth with slack and\
      display their top content in a given set of channels over time.\
      Built a Starlette ASGI python REST API to handle authorization, Slack\
      SDK integration, and post-processing. Built a custom a frontend with protected routing. This\
      drastically helped with content ingestion and dispersal.",
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
      text: "Built a full-stack app integrated with OpenAI's API to allow users to upload\
      PDF's, extract text, and produce summaries, regardless of the model's context window size.",
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
      text: "Built a full-stack product to allow users to create and view immutable contracts\
      on-chain. Built using web3 tools, it allows users to interact with custom smart contracts.\
      Assisted with contract design and aligned with existing ERC standards.",
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
    type: "mirror",
    link: "https://mirror.xyz/0x6a3b4A12739eAFB1DaD6edbA890862121e218EFC",
  },
  {
    type: "email",
    link: "mailto:plssimone@gmail.com",
  },
];
