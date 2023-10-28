export const cycle = ["ml/ai", "web dev", "web3", "sports", "research"];

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
    title: "Strava Viz",
    year: 2023,
    description: {
      text: "Engineered an application based off Strava's API, allowing users\
      to oauth with strava account and view a aggregate data visualization of\
      their routes. Solely reliant on Browser Storage API's, so no data is retained\
      by the application itself.",
      image: "/images/og_strava.png",
      languages: ["javascript", "html", "css"],
      tools: ["nextjs", "indexeddb", "strava api", "oauth", "d3.js"],
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
      text: "Co-developed a POC (with plans to fully build) for decentralized\
      auditing processes within the web3 ecosystem. Built out the marketing page, protocol dApp,\
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
      calls and automating post-call manual form-filling processes for various types\
      of form responses. Integrated with 3rd party services for audio streaming,\
      speech recognition, LLM's, AI tooling, and vector databases. Built out a \
      custom Starlette API for internal use. Led the development and established performance\
      criteria.",
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
    title: "Slack Summarizer",
    year: 2023,
    description: {
      text: "Created a NextJS application allowing users to oauth with slack and\
      display their top content in a given set of channels over time.\
      Built a Starlette ASGI python REST API to handle authorization and Slack\
      SDK integration. Built a custom a frontend with protected routing.",
      image: "/images/sightings_og.png",
      languages: ["python", "javascript", "html", "css"],
      tools: ["starlette", "express", "nextjs", "slack sdk", "rest api", "openai api", "firebase"],
      links: [
        {
          type: "site",
          link: "https://sightings-next.vercel.app/",
        },
      ],
    },
  },
  {
    title: "Progressive Web App",
    year: 2023,
    description: {
      text: "Built out the service worker component of a PWA product for a client as part\
      of an effort to move away from native mobile apps.\
      Built within the React framework, I created the service worker update lifecycle\
      and established the pre-caching and run-time caching strategies.",
      image:
        "https://images.contentstack.io/v3/assets/blt189c1df68c6b48d7/bltca8b4716aa848b3a/62ada54cbc32396c52cd66d9/13_pwa.png?width=544&auto=webp&format=pjpg&disable=upscale&quality=100&dpr=2",
      languages: ["javascript", "html", "css"],
      tools: ["pwa", "service worker", "react"],
      links: [],
    },
  },
  {
    title: "TL;DR",
    year: 2023,
    description: {
      text: "Built a full-stack app integrated with OpenAI's API to allow users to upload\
      PDF's and recursively run GPT-3, outside of the model's context window size, to produce summaries.",
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
      on-chain. Built using web3 tools, it allows users to interact with custom smart contracts.",
      image: "https://www.agree.xyz/_next/image?url=%2Fimages%2FReciept.png&w=256&q=75",
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
  {
    title: "Blackjack RL Agent",
    year: 2023,
    description: {
      text: "Developed a Reinforcement Learning agent for playing Blackjack, and\
      iterated on this using deep q learning. Published multiple blog posts to Mirror.\
      Plans to build out a frontend to allow users to play blackjack \
      while evaluating their strategy, and observing optimal gameplay.",
      image:
        "https://mirror-media.imgix.net/publication-images/1PBrFqkO8npyjOLoNQt4-.jpeg?height=320&width=640&h=320&w=640&auto=compress",
      languages: ["python"],
      tools: ["jupyter", "reinforcement learning", "mirror blog"],
      links: [
        {
          type: "github",
          link: "https://github.com/petersim1/Blackjack_RL",
        },
        {
          type: "blog",
          link: "https://mirror.xyz/0x6a3b4A12739eAFB1DaD6edbA890862121e218EFC/0bGM5NuOVPi2IkNb095BvYlzv9xP-5b3vZESs61ofqs",
        },
      ],
    },
  },
  {
    title: "Pulse Plus",
    year: 2022,
    description: {
      text: "Developed a dynamic marketing landing page for pulse.plus, built using React",
      image: "/images/og_pulseplus.jpg",
      languages: ["javascript", "html", "css"],
      tools: ["react"],
      links: [],
    },
  },
  {
    title: "Fur Insure",
    year: 2022,
    description: {
      text: "Developed a dynamic marketing page and waitlist sign up flow for fur.insure, built using React",
      image: "/images/og_furinsure.jpg",
      languages: ["javascript", "html", "css"],
      tools: ["react", "airtable", "rest api"],
      links: [],
    },
  },
  {
    title: "Networth Simulator",
    year: 2022,
    description: {
      text: "Developed a monte-carlo simulator to denote a user's estimated net worth over time,\
      served through a REST API. Allows for dynamic inputs of income, spend, debts, assets,\
      and future events.",
      image: "/images/networth_og.png",
      languages: ["python", "javascript", "html", "css"],
      tools: ["flask", "react", "machine learning", "monte-carlo", "rest api"],
      links: [],
    },
  },
  {
    title: "Bet Hedging",
    year: 2021,
    description: {
      text: "Wrote a tool to allow users to determine their optimal bet hedging strategy.",
      image: "https://raw.githubusercontent.com/petersim1/BetHedgingSite/main/preview.png",
      languages: ["javascript", "html", "css"],
      tools: ["vanilla js"],
      links: [
        {
          type: "site",
          link: "https://www.petersim.one/BetHedgingSite/",
        },
        {
          type: "github",
          link: "https://github.com/petersim1/BetHedgingSite",
        },
      ],
    },
  },
  {
    title: "Commodity Price Forecasting",
    year: 2021,
    description: {
      text: "Graduate program capstone project, tasked with creating an asynchronous time series model\
      to forecast commodity prices. Used an encoder-decoder GRU model.",
      image:
        "https://agriculture.basf.us/content/dam/cxm/agriculture/crop-protection/shared-files/images/CRP201800021_Hero_Crop_Imgs_Credenz_Soybeans.jpg",
      languages: ["python"],
      tools: ["jupyter", "machine learning", "deep learning"],
      links: [
        {
          type: "github",
          link: "https://github.com/petersim1/raizen-biofuel",
        },
      ],
    },
  },
  {
    title: "Goodreads Recommender",
    year: 2020,
    description: {
      text: "Built a recommender system for the Goodreads dataset using\
      the pyspark framework and cluster computing.",
      image:
        "https://opengraph.githubassets.com/9afa1be49fa74de00214b2e5474fc756bfcd94d946f4bd8e09531a8d7aceee44/petersim1/Recommender_System",
      languages: ["python"],
      tools: ["jupyter", "pyspark", "bash"],
      links: [
        {
          type: "github",
          link: "https://github.com/petersim1/Recommender_System",
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
