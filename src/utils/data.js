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
      company: "Ipser Labs",
      logo: "./assets/images/ipser.png",
      location: "Remote",
      roles: [
        {
          title: "Software Engineer",
          date: "May 2025 - Present",
          summary:
            "Built a Shopify-Style deep customizable e-commerce platform using Spring Boot, Angular and PostgreSQL allowing users to have vast options. " +
            "Enhanced Platform security by implementing JWT authentication, Firebase OTP (MFA), and Stripe API webhooks for secure payment transactions. " +
            "Utilized Terraform, AWS CloudFormation, and AWS CDK alongside Docker for IaC, enhancing scalability, and reducing operational complexity. " +
            "Integrated RabbitMQ, ElasticSearch, and GraphQL for asynchronous processing, scalable indexing, and efficient data querying."
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
          title: "Software Engineer",
          date: "July 2023 - December 2023",
          summary:
            "Led the development of GenAI application to generate Simulink building blocks for the control model of hydrogen fuel cell engine improving " +
            "model creation time by 14% and reducing human errors. " +
            "Developed a GPT-4 powered chatbot using LangChain and PyPDF to ingest telemetry datasheets into VectorDB, providing valuable insights. " +
            "Designed a Data Ingestion web application using Flask, and React.js with RBAC controls, enabling Excel-based control variable editing and " +
            "versioned import/export via Amazon S3, cutting down manual work by 60% and improving model consistency. " +
            "Implemented a GitHub Actions CI/CD pipeline to automate faster Simulink model testing and deployment on ECU Firmware, increasing reliability. " +
            "Engineered Redis caching and RabbitMQ messaging to handle 50K+ real-time telemetry events from engines, ensuring reliable fault tracking."
        }
      ]
    },
    {
      company: "Larsen & Toubro Infotech",
      logo: "./assets/images/lti.png",
      location: "Mumbai, India",
      roles: [
        {
          title: "Software Engineer",
          date: "January 2021 - August 2022",
          summary:
            "Led the development of Automated Lab Transcription application for medical applications using Python Flask, React.js and AWS cloud (AWS " +
            "Transcribe and S3 bucket), to achieve 96% transcription accuracy, enabling version-controlled access, and reducing manual effort. " +
            "Architected a scalable microservice based medical records system with Spring Boot and MongoDB to manage 50M+ entries, implementing " +
            "versioned data models and REST APIs for secure access to clinical histories and lab reports. " +
            "Revamped a legacy Internet Explorer-only website by replacing ActiveX authentication with a Java Servlet-based LDAP and JWT solution, " +
            "making it compatible with modern browsers and deployable on Oracle WebLogic Server. " +
            "Developed a real-time, machine learning-powered duplicate detection system using KNN and Vector DB, identifying CRM object duplicates with " +
            "over 85% confidence and scaling across 100K+ portals via Kafka swim lanes. " +
            "Engineered a RESTful API service using Spring Boot and HBase to transitively merge duplicate CRM objects, retaining merger history and " +
            "enabling future reverts, leading to 90%+ automation of customer reviews. " +
            "Adopted Agile and Test-Driven Development TDD methodologies using Junit and Mockito improving test accuracy by 25%."
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
    