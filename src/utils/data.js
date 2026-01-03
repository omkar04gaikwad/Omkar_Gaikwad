export const SKILLS = [
    {
        title: "Programming",
        skills: [
            {skill: 'Python', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
            {skill: 'Java', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
            {skill: 'JavaScript', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
            {skill: 'TypeScript', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
        ],
    },
    {
        title: "Databases",
        skills: [
            {skill: 'PostgreSQL', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'},
            {skill: 'MySQL', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
            {skill: 'SQLite', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'},
            {skill: 'MongoDB', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
        ],
    },
    {
        title: "Message Queues",
        skills: [
            {skill: 'RabbitMQ', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg'},
            {skill: 'Redis', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'},
            {skill: 'Apache Kafka', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg'},
            {skill: 'Amazon SQS', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'},
        ],
    },
    {
        title: "Backend",
        skills: [
            {skill: 'Flask', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'},
            {skill: 'Django', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'},
            {skill: 'Spring Boot', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'},
            {skill: 'Node.js', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
            {skill: 'Mockito', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
        ],
    },
    {
        title: "Frontend",
        skills: [
            {skill: 'Angular', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'},
            {skill: 'React.js', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
            {skill: 'Vue.js', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
            {skill: 'Figma', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'},
            {skill: 'HTML', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            {skill: 'Docker', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'},
            {skill: 'Terraform', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'},
            {skill: 'GitHub Actions', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
            {skill: 'Jenkins', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'},
            {skill: 'AWS', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'},
            {skill: 'Azure', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'},
            {skill: 'GCP', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
            {skill: 'Oracle Cloud', slink: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'},
        ],
    }
];

export const WORK_EXPERIENCE = [
  {
    company: "Deloitte Consulting LPP",
    logo: "./assets/images/ipser.png",
    location: "Sacramento, CA",
    roles: [
      {
        title: "Software Engineer",
        date: "Dec 2025 - Present",
        summary:
          "Designed a Spring Batch-based pipeline to transitively merge child benefits data while preserving merge history for auditability and rollback, automating over 90% of manual review work. " +
          "Built a gRPC geo-location service to normalize and validate partial or incorrect addresses using scoring methods, ensuring consistent and accurate location data for child records submitted by client systems."
      }
    ]
  },  
  {
      company: "IpserLab LLC",
      logo: "./assets/images/ipser.png",
      location: "Remote, USA",
      roles: [
        {
          title: "Full Stack Software Engineer",
          date: "May 2025 - Nov 2025",
          summary:
            "Architected a full-stack B2B e-commerce platform with Spring Boot and Angular, supporting scalable business workflows. " +
            "Accelerated dashboard performance by introducing Redis-backed caching for PostgreSQL queries, increasing throughput from 5 QPS to 200 QPS and cutting page load time by 85%. " +
            "Delivered a secure authentication service using Spring Security, OAuth 2.0, and JWT, sustaining sub-150ms login latency across SSO and multi-factor authentication flows."
        }
      ]
    },
    {
      company: "Humanitarians AI",
      logo: "./assets/images/humanitarians.png",
      location: "Remote",
      roles: [
        {
          title: "Software Engineer",
          date: "February 2025 - May 2025",
          summary:
            "Designed a Doctor Recommendation System that analyzes over 500k+ doctors' profile and suggests relevant doctors based on key features. " +
            "Integrated Chroma DB to store vector embeddings of 300k+ reports, Ollama and Groq API for LLM generating recommendations for doctors. " +
            "Built a Patient Triage Generative AI application to prioritize patients based on the severity of their medical condition into 5 triage levels. " +
            "Implemented RAG based Architecture using Groq (LLaMA 3.2-90B Vision Preview) model for sentence transformations and outputs."
        }
      ]
    },
    {
      company: "Nuvera Fuel Cells",
      logo: "./assets/images/nuvera.png",
      location: "Boston, MA",
      roles: [
        {
          title: "Software Engineer co-op",
          date: "Jul 2023 - Dec 2023",
          summary:
            "Developed a Python Flask-based Over-the-Air (OTA) update system to deploy C code to engine controllers, supporting both manual and automated rollouts, reducing firmware update time by 65%. " +
            "Orchestrated a GitHub Actions CI/CD pipeline to validate Simulink models, generate C code via automated code generation, package artifacts into custom images to AWS using Packer. " +
            "Built a Python Tkinter-based interface to monitor and control engine behavior in real time during testing, capturing structured telemetry and test outputs for downstream analysis. " +
            "Performed exploratory data analysis and trend analysis on engine test data collected during real-time runs, using AWS S3 and Athena to query, aggregate and evaluate performance metrics, and detect anomalies."
        }
      ]
    },
    {
      company: "Larsen & Toubro Infotech Ltd",
      logo: "./assets/images/lti.png",
      location: "Mumbai, India",
      roles: [
        {
          title: "Senior Software Engineer",
          date: "Jan 2021 - Aug 2022",
          summary:
            "Built a real-time medical transcription web application using a Kaldi-based speech recognition engine and transformer-based NLP models, achieving 96% transcription accuracy and reducing client's manual processing time by 80%. " +
            "Developed a distributed real-time ticket tracking system using Kafka and Cassandra to handle high-volume resource events, improving system reliability and reducing average ticket resolution time by 45%. " +
            "Led the design and deployment of a containerized microservices platform for an OTT application using Docker, Kubernetes, and AWS, enabling automated scaling and fault tolerance and increasing service uptime by 30%."
        }
      ]
    }
];


export const PROJECT = [
    {
        title: "Rate Limiter Service",
        image: "./images/ratelimiter.png",
        date: "January 2025",
        link: "https://github.com/omkar04gaikwad/rate_limiter_service",
        Skills: ["Python", "Flask", "Redis", "Docker", "Token Bucket Algorithm", "API Gateway", "REST API"],
        summary: "A high-performance, scalable rate limiting service built with Flask and Redis, implementing the Token Bucket Algorithm in API Gateway style. Features include configurable rate limits, real-time monitoring, Docker support, RESTful API endpoints, health checks, and rate limit headers. Implements efficient token bucket algorithm with burst handling and fair distribution.",
    },
    {
        title: "URL Shortener - AWS Lambda Service",
        image: "./images/url_short.png",
        date: "January 2025",
        link: "https://github.com/omkar04gaikwad/URL_Shortener_Service",
        Skills: ["Python", "AWS Lambda", "DynamoDB", "API Gateway", "Serverless", "CloudFormation", "REST API"],
        summary: "A serverless URL shortening service built with AWS Lambda, API Gateway, and DynamoDB, optimized for AWS Free Tier usage. Features include URL shortening/redirection, click analytics, persistent storage, smart caching, and cost optimization. Implements in-memory caching to reduce DynamoDB calls and stay within free tier limits.",
    },
    {
        title: "UrbanCart",
        image: "./images/urbancart.png",
        date: "August 2024",
        link: "https://github.com/omkar04gaikwad/UrbanCart",
        Skills: ["Python-Flask", "React", "Docker", "AWS EC2", "AWS RDS", "AWS ALB", "Nginx", "AWS WAF", "Stripe API", "Firebase OTP"],
        summary: "UrbanCart is a secure e-commerce web application designed to simulate real-world online shopping platforms while focusing on security best practices. The project integrates multiple modern web development technologies while implementing robust security measures like JWT authentication, CSRF protection, secure payments, Docker containerization, and Nginx as a reverse proxy for HTTPS.",
    },
    {
        title: "Movie Ticket Booking System",
        image: "./images/movie_ticket_booking_system.png",
        date: "March 2023",
        link: "https://github.com/omkar04gaikwad/Movie-Ticket-Booking-System",
        Skills: ["Java", "Swing", "JDBC", "MySQL"],
        summary: "The Movie Booking App is designed to allow users to search for movies, book tickets, and manage bookings through an interactive interface. The application also provides admin capabilities to manage movie listings and update ticket statuses.",
    },
    {
        title: "Library Management System",
        image: "./images/movie_ticket_booking_system.png",
        date: "July 2020",
        link: "https://github.com/omkar04gaikwad/LibraryManagmentSystem",
        Skills: ["Java", "Swing", "JDBC", "MySQL"],
        summary: "The Library Management System is a Java-based desktop application with a graphical user interface (GUI) designed to manage library operations efficiently. It allows librarians to manage books, users, and transactions seamlessly.",
    },
    {
        title: "LTI App",
        image: "./images/movie_ticket_booking_system.png",
        date: "June 2021",
        link: "https://github.com/omkar04gaikwad/LTI-app",
        Skills: ["Java", "Android"],
        summary: "Developed an Android application for LTI integration, enabling seamless access to learning tools and resources within the app. The application enhances the learning experience by providing a user-friendly interface and efficient resource management.",
    }
];
    