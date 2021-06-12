const blurb = "My name is Peter Simone. I have an M.S. in Data Science from NYU, and a B.S. in bioengineering from the University of Maryland. I'm passionate about the broad field of Data Science and applications of Machine Learning. My goal is to pursue this passion in the world of Sports, Finance, Cryptocurrency, E-Commerce, or general research within the field. I enjoy working on my personal projects, exercising, going on adventures with my dog, reading, and following my favorite sports teams.";

const education = [
    {
        school:'New York University',
        logoPath:'nyu_logo.png',
        degree:'M.S. Data Science',
        courses:[
            'Deep Learning',
            'Optimization and Computation Linear Algebra',
            'Computational Cognitive Modeling',
            'Predictive Modeling with Sports'
        ]
    },
    {
        school:'University of Maryland',
        logoPath:'umd_logo.jpeg',
        degree:'B.S. Bioengineering',
        courses:[
            'Bioinformatics and Biological Datamining',
            'Biocomputational Methods'
        ]
    }
]

const skills = {
    'coding-skills':[
        {
            language:'python',
            logo:'<i class="fab fa-python"></i>',
            blurb:"Most of my experience is in python, where I've work with machine learning, data visualization, web/api scraping, scripting, and creating pipelines."
        },
        {
            language:'javascript',
            logo:'<i class="fab fa-js"></i>',
            blurb:'I have experience in javascript making static and interactive websites, as well as some react.js and node.js exposure.'
        },
        {
            language:'html / css',
            logo:'<i class="fab fa-html5"></i>',
            blurb:'I have experience building and styling static and interactive websites.'
        },
        {
            language:'R',
            logo:'<i class="fab fa-r-project"></i>',
            blurb:'My experience in R is with scripting and data visualization'
        }
    ],
    'text':[
        {
            title:'Machine Learning',
            text:"I have academic and industry experience in Data Science, applying machine learning and deep learning methods to solve complex problems. I have experience with multivariate regression, logistic regression, SVM, and contextual bandits, to more modern deep learing methods. I've worked with regression, classification, time-series problems, auto-encoders, and causal analysis. Within deep learning, I've used custom feed-forward and recurrent neural networks, such as regression, multi-classification, auto-encoder methods, LSTM, GRU, and recurrent encoder-decoder methods."
        },
        {
            title:'Other Tools/Libraries',
            text:'Most of my experience is within python, where I have experience in machine learning packages (numpy, pandas, sklearn, pytorch), data visualization (matplotlib, seaborn), and web scraping packages. I also have some experience working with javascript libraries such as node.js and react.js . I am comfortable with SQL and mongoDB databases, and primarily work in mac/linux environments.'
        }
    ]
}


const projects = [
    {
        title:'generalized deep image prior',
        type:'Course Project',
        description:'In this project I expanded on the <a href="https://arxiv.org/pdf/1711.10925.pdf" target="_blank" rel="noreferrer">Deep Image Prior</a>, paper to observe if enough prior information is stored in deep neural network architectures to be able to generalize to several images.',
        url:'https://github.com/petersim1/deep-image-prior',
        languages:'python',
        disabled:false
    },
    {
        title:'bet hedging',
        type:'Personal Project',
        description:'I created a <a href="https://petersim1.github.io/BetHedgingSite/" target="_blank" rel="noreferrer">tool</a>, that can be used to find an optimal hedging strategy.',
        url:'https://github.com/petersim1/BetHedgingSite',
        languages:'javascript, html, css',
        disabled:false
    },
    {
        title:'commodity price forecasting',
        type:'Course Project',
        description:'In this project I built an encoder-decoder recurrent neural network to forecast biodiesel prices.',
        url:'hhttps://github.com/Jonas-JP-Peeters/raizen-biofuel',
        languages:'python, jupyter',
        disabled:true
    },
    {
        title:'recommender system',
        type:'Course Project',
        description:'In this project I built a recommender system for the <a href="https://www.goodreads.com/" target="_blank" rel="noreferrer">Good Reads</a> dataset, using pyspark and taking advantage of the NYU cluster resources.',
        url:'https://github.com/petersim1/Recommender_System',
        languages:'python, pyspark, shell, jupyter',
        disabled:false
    },
    {
        title:'covid19 project',
        type:'Course Project',
        description:'In this project I scraped various sources of data, including algorand blockchain survey data, google mobility data, and regulatory data, to predict changes in number of covid cases in all US counties.',
        url:'https://github.com/petersim1/COVID-19_Project',
        languages:'python, jupyter',
        disabled:false
    }
]


export {blurb,education,skills,projects}