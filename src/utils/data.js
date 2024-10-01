export const SKILLS = [
    {
        title: "Cloud Technologies",
        skills: [
            {skill: 'AWS', slink: './assets/images/cloud/aws.png'},
            {skill: 'Azure', slink: './assets/images/cloud/azure.png'},
            {skill: 'Docker', slink: './assets/images/cloud/docker.png'},
            {skill: 'Terraform', slink: './assets/images/cloud/terraform.png'},
        ],
    },
    {
        title: "Databases",
        skills: [
            {skill: 'Oracle', slink: './assets/images/DB/oracle.png'},
            {skill: 'Microsoft SQL server', slink: './assets/images/DB/microsoft.png'},
            {skill: 'Mongo DB', slink: './assets/images/DB/mogodb.png'},
            {skill: 'MySQL', slink: './assets/images/DB/mysql.png'},
            {skill: 'PostgreSQL', slink: './assets/images/DB/postgresql.png'}
        ],
    },
    {
        title: "Programming Languages",
        skills: [
                {skill: 'Python', slink: './assets/images/programming/python.png'},
                {skill: 'Java', slink: './assets/images/programming/java.png'},
                {skill: 'Javascript', slink: './assets/images/programming/javascript.png'},
                {skill: 'JSON', slink: './assets/images/programming/json.png'},
                {skill: 'Typescript', slink: './assets/images/programming/typescript.png'},
                {skill: 'MATLAB', slink: './assets/images/programming/matlab.png'},
        ],
    },
    {
        title: "Web Frameworks",
        skills: [
            {skill: 'Flask', slink: './assets/images/frameworks/flask.png'},
            {skill: 'Django', slink: './assets/images/frameworks/django.png'},
            {skill: 'React', slink: './assets/images/frameworks/react.png'},
            {skill: 'Angular', slink: './assets/images/frameworks/angular.png'},
            {skill: 'Node.js', slink: './assets/images/frameworks/node.png'},
            {skill: 'Spring Boot', slink: './assets/images/frameworks/spring.png'},
        ],
    },
    {
        title: "Middleware & CI/CD Technologies",
        skills: [
            {skill: 'GitHub', slink: './assets/images/middleware/github.png'},
            {skill: 'GitLab', slink: './assets/images/middleware/gitlab.png'},
            {skill: 'Kafka', slink: './assets/images/middleware/kafka.svg'},
            {skill: 'Ansible', slink: './assets/images/middleware/ansible.png'},
            {skill: 'Jenkins', slink: './assets/images/middleware/jenkins.svg'},
            {skill: 'Chef', slink: './assets/images/middleware/chef.svg'},
        ],
    }
]

export const WORK_EXPERIENCE = [
{
    company: "Nuvera Fuel Cells LLC",
    logo: "./assets/images/nuvera.png",
    location: "Billerica, MA",
    roles: [
        {
            title: "Software Engineer Co-op",
            date: "July 2023 - December 2023",
            projects: [
                {
                    title: "Data Dictionary Optimization Tool",
                    Technologies: ["Python", "MATLAB Engine API", "AWS Amazon S3", "Boto3"],
                    responsibilities: [
                    "Automated the extraction of 100+ variables from Simulink Data Dictionaries, classifying them into 7 distinct categories (Analog, Digital, Actuator, etc.).",
                    "Reduced manual data processing time by 40% by developing a Python-based tool that generated Excel files with categorized variables using pandas and openpyxl.",
                    "Enabled seamless user modifications by implementing reverse functionality, updating 100% of user-changed variables in the Simulink Data Dictionary with 0% error.",
                    "Streamlined data storage and retrieval by integrating Amazon S3, handling file uploads and downloads with boto3 for up to 10 GB of Excel files.",
                    "Achieved real-time updates of the Simulink model by utilizing MATLAB Engine API for Python, reducing update time by 30%.",
                    ]
                },
                {
                    title: "AI-Powered Model Generation Framework",
                    Technologies: ["Python", "MATLAB", "GitLab CI", "OpenAI API"],
                    responsibilities: [
                        "Developed a Proof of Concept (POC) tool that automates the generation of Simulink blocks (ADC, PID, LTI) using OpenAI's API to streamline the creation of control system models.",
                        "Integrated MATLAB Engine API with Python to dynamically create and configure Simulink blocks based on generated code, reducing manual effort and increasing productivity.",
                        "Built a comprehensive test suite in MATLAB to verify the accuracy and performance of generated blocks, ensuring adherence to control model specifications.",
                        "Implemented a GitLab CI/CD pipeline to automate continuous integration and testing of Simulink models. Set up a self-hosted runner with MATLAB to execute tests, verify block functionality, and produce test artifacts.",
                        "Enhanced project efficiency by introducing automated code generation and testing workflows, accelerating the development of control models by 40%."
                    ]
                },
                {
                    title: "Firmware Flashing and Configuration Platform",
                    Technologies: ["Python", "Tkinter", "PowerShell", "JSON", "PyInstaller"],
                    responsibilities: [
                        "Engineered a Python-based GUI application to automate the flashing of hex files into TTC ECUs, reducing manual command-line interactions.",
                        "Developed a robust interface using Tkinter to manage configurable options such as baud rate and COM ports, improving user experience and operational flexibility.",
                        "Implemented PowerShell integration within the application to execute system commands asynchronously, capturing real-time output and presenting it in a console-like interface within the GUI.",
                        "Built persistent state functionality using JSON to remember the last used hex file and directory for enhanced user convenience.",
                        "Packaged the application into an executable using PyInstaller, bundling necessary libraries to ensure easy distribution without external dependencies.",
                        "Created an access-controlled feature for updating core flashing libraries, allowing only authorized users to manage critical software updates via a file picker.",
                        "Improved operational efficiency by 40%, automating the previously manual hex flashing process and reducing potential errors during command execution.",
                    ]
                },
                {
                    title: "Nonvirtual Bus-to-Vector Conversion",
                    Technologies: ["MATLAB", "Simulink", "Jenkins CI", "Git"],
                    responsibilities: [
                        "Developed a MATLAB function block to convert virtual buses into vectors for nonvirtual buses, overcoming a Simulink limitation",
                        "Automated testing and integration using Jenkins CI to ensure functionality across dynamic signal configurations, enhancing development workflows.",
                        "Designed scalable algorithms for flexible signal handling, optimizing Simulink model simulations and validation processes."
                    ]
                }
            ]
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
            date: "July 2021 - August 2022",
            projects: [
                {
                    title: "Scheduling System for Resource Management",
                    Technologies: ["Flask", "React", "MySQL", "Ansible"],
                    responsibilities: [
                        "Developed and launched a full-stack scheduling system using Flask (Backend) and React (Frontend) to automate shift and severity allocations for 120 resources across 8 teams.",
                        "Automated deployment and configuration management using Ansible, reducing deployment time and minimizing errors.",
                        "Improved manager efficiency by 25% through automation, enabling real-time resource scheduling and reducing manual intervention.",
                        "Integrated MySQL for data storage and added features for shift adjustments and real-time updates.",
                    ]
                },
                {
                    title: "Cross-Browser Compatibility and System Upgrade",
                    Technologies: ["Python", "MATLAB Engine API", "AWS Amazon S3", "Boto3"],
                    responsibilities: [
                        "Upgraded a legacy Internet Explorer-only web app by creating a Java Servlet to replace outdated ActiveX controls, enabling secure authentication and SOAP API access for cross-browser compatibility.",
                        "Completed thorough testing to ensure stability before production, leading to a smoother user experience across browsers.",
                        "Used JUnit for testing and JMeter for performance checks, resolving an issue where the app became unresponsive after extended use.",
                        "Refactored the app for deployment on Oracle Web Server, improving performance and maintainability."
                    ]
                },
                
                {
                    title: "Speech-to-Text Microservices Application",
                    Technologies: ["Flask, AWS Transcribe, RabbitMQ, AWS S3"],
                    responsibilities: [
                        "Developed a Flask-based microservices application for speech-to-text conversion, using RabbitMQ for asynchronous task management and ensuring smooth communication between services.",
                        "Conducted a detailed comparison of Azure, AWS, IBM Watson, GCP, and Python’s own speech-to-text libraries, with AWS Transcribe emerging as the best-performing solution.",
                        "Implemented AWS Transcribe with speaker identification and custom vocabulary features, improving transcription accuracy by 20% and scaling to process 100+ audio files daily.",
                        "Integrated AWS S3 for scalable and reliable audio file storage, enabling efficient handling of large datasets for processing and retrieval.",
                    ]
                }
            ]
        },
        {
            title: "Graduate Engineer Intern",
            date: "January 2021 - June 2021",
            projects: [
                {
                    title: "Predictive Ticket Volume Forecasting Tool",
                    Technologies: ["Python", "Streamlit", "FBProphet"],
                    responsibilities: [
                        "Developed a predictive tool using Streamlit and FBProphet to forecast ticket volumes, enabling proactive resource allocation and reducing ticket resolution time by 20%.",
                        "Handled data for over 100 weekly tickets, providing actionable insights for improved team efficiency."
                    ]
                },
                {
                    title: "Full CRUD Application",
                    Technologies: ["Python", "JWT", "LDAP", "Ansible"],
                    responsibilities: [
                    "Developed a full CRUD application with REST APIs, implementing JWT for secure authentication and LDAP for user access management.",
                    "Automated server configuration and deployment using Ansible across on-prem data centers and cloud environments, reducing setup time by 30% and ensuring consistent, reliable deployments."
                    ]
                }
            ]
        }
    ]
}
];


export const PROJECT = [
    {
        title: "UrbanCart-A Secure E-commerce Simulation",
        location: "Northeastern University",
        image: "./assets/images/projects/urbancart.png",
        date: "June 2024 - August 2024",
        link: "https://github.com/omkar04gaikwad/UrbanCart",
        Skills:["Python-Flask", "React", "Docker", "AWS EC2", "AWS RDS", "AWS ALB", "Nginx", "AWS WAF", "Stripe API", "Firebase OTP"],
        summary: "UrbanCart is a secure, scalable e-commerce platform built using Python-Flask and React, designed to simulate a real-world online shopping experience with a strong emphasis on cybersecurity. Deployed using Docker containers on AWS EC2 instances, the system utilizes AWS Application Load Balancer and Nginx to ensure secure, high-availability HTTPS connections. Advanced security features, including AWS WAF and OWASP-compliant safeguards, protect against common web vulnerabilities like SQL Injection, XSS, and CSRF. The platform also integrates Stripe for secure payment processing and Firebase OTP for two-factor authentication, creating a robust, user-friendly e-commerce environment.",
        
    }
    ,
    {
        title: "ELK-Based Security Information and Event Management (SIEM) System",
        location: "Northeastern University",
        image: "./assets/images/projects/elk.png",
        date: "February 2024 - May 2024",
        link: "https://github.com/omkar04gaikwad/Security-Information-and-Event-Management-SIEM-System",
        Skills:["Elasticsearch", "Logstash", "Kibana", "Ansible"],
        summary: "The ELK SIEM System is a robust platform designed to monitor and analyze security events in real time. Built using the Elasticsearch, Logstash, and Kibana (ELK) stack, the system collects, processes, and visualizes logs from various sources to detect and mitigate security threats. Logstash aggregates logs, Elasticsearch indexes them for fast search, and Kibana provides dashboards for real-time monitoring and analysis. This system enhances incident response capabilities by providing actionable insights and improving overall system security posture",
        
    },
    {
        title: "Booknest-Library Management System",
        location: "Northeastern University",
        image: "./assets/images/projects/lsm.png",
        date: "February 2023 - May 2023",
        link: "https://github.com/omkar04gaikwad/Booknest-Library_Management_system",
        Skills:["Django", "RabbitMQ", "Consul", "Microservices Architecture"],
        summary: "The Booknest Library Management System is a microservices-based application designed to efficiently manage library operations, such as book lending, returns, and inventory management. Built using Django for backend services and RabbitMQ for asynchronous task management, it ensures reliable communication between services. Consul is integrated for service discovery, allowing seamless communication and scalability. The system offers features such as user authentication, book search, borrowing, and returning functionality, providing a robust, scalable solution for library management.",
    },
    {
        title: "URL Shortner using AWS",
        location: "Northeastern University",
        image: "./assets/images/projects/urlshort.png",
        date: "February 2023 - May 2023",
        link: "https://github.com/omkar04gaikwad/URL_Shortner",
        Skills:["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch"],
        summary: "The URL Shortener Service is a scalable application that provides URL shortening functionality, developed using AWS services. It leverages AWS Lambda for serverless compute, API Gateway to handle HTTP requests, and DynamoDB for storing the mappings between short URLs and original URLs. The system is designed for high availability and scalability, allowing efficient handling of large volumes of URL shortening requests. Additionally, CloudWatch is integrated for monitoring and logging, ensuring the system's performance and reliability."
    }
]