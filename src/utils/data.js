export const SKILLS = [
    {
        title: "Programming Languages",
        skills: [
                {skill: 'Python', slink: './images/python.png'},
                {skill: 'Java', slink: './images/java.png'},
                {skill: 'R', slink: './images/r.png'},
                {skill: 'SQL', slink: './images/sql.png'},
                {skill: 'HTML5', slink: './images/html5.png'},
                {skill: 'CSS', slink: './images/css.png'},
                {skill: 'NodeJS', slink: './images/nodejs.png'},
                {skill: 'JSON', slink: './images/json.png'},
        ],
    },
    {
        title: "Databases",
        skills: [
            {skill: 'Oracle', slink: './images/oracle.png'},
            {skill: 'Microsoft SQL server', slink: './images/mssql.png'},
            {skill: 'Mongo DB', slink: './images/mongodb.png'},
            {skill: 'MySQL', slink: './images/mysql.png'},
            {skill: 'PostgreSQL', slink: './images/postgresql.png'},
            {skill: 'Redis', slink: './images/redis.svg'}
        ],
    },
    {
        title: "Cloud and DevOps",
        skills: [
                {skill: 'AWS', slink: './images/aws.png'},
                {skill: 'ELB', slink: './images/elb.png'},
                {skill: 'EC2', slink: './images/ec2.svg'},
                {skill: 'RDS', slink: './images/rds.svg'},
                {skill: 'Lambda', slink: './images/lambda.png'},
                {skill: 'Terraform', slink: './images/terraform.png'},
                {skill: 'CloudWatch', slink: './images/cloudwatch.svg'},
                {skill: 'CI/CD', slink: './images/cicd.png'},
                {skill: 'Jenkins', slink: './images/jenkin.png'},

        ],
    },
    {
        title: "Web Frameworks",
        skills: [
            {skill: 'Flask', slink: './images/flask.png'},
            {skill: 'Django', slink: './images/django.png'},
            {skill: 'Spring MVC', slink: './images/springmvc.svg'},
            {skill: 'Spring Boot', slink: './images/spring-boot.webp'},
            {skill: 'ReactJS', slink: './images/react.png'},
            {skill: 'Angular', slink: './images/angular.png'},
            {skill: 'Apache Spark', slink: './images/spark.png'},
        ],
    },
    {
        title: "Middleware & CI/CD Technologies",
        skills: [
            {skill: 'GitHub', slink: './images/git.png'},
            {skill: 'Kafka', slink: './images/kafka.svg'},
            {skill: 'Tensorflow', slink: './images/tensorflow.png'},
            {skill: 'RabbitMQ', slink: './images/rabbitmq.svg'},
            {skill: 'OpenCV', slink: './images/opencv.png'},
            {skill: 'Pandas', slink: './images/pandas.png'},
            {skill: 'NumPy', slink: './images/numpy.png'},
            {skill: 'Docker', slink: './images/docker.png'},
            
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
          title: "Software Engineer Intern",
          date: "July 2023 - December 2023",
          summary:
            "Developed automation tools for Simulink Data Dictionaries, reducing manual processing by 40%. " +
            "Built AI-powered frameworks for Simulink block generation, improving control model efficiency. " +
            "Created GUI-based firmware flashing tools to automate ECU updates, enhancing deployment speed."
        }
      ]
    },
    {
        company: "Laboratory for Ocean Acoustics and Ecosystem Sensing",
        logo: "./assets/images/nuvera.png",
        location: "Billerica, MA",
        roles: [
          {
            title: "Graduate Research Assistant",
            date: "February 2023 - July 2023",
            summary:
            "Designed and manufactured PCBs for hydrophone ADC interfaces, ensuring signal integrity and minimizing EMI" +
            "Leveraged oscilloscopes, multimeters, logic analyzers to ensure signal integrity and executed open-circuit and closed-circuit" +
            "testing on a 160- element hydrophone array to check circuit continuity" +
            "Integrated power distribution modules, stabilizing DC conversion from 300V to 48V for system reliability" +
            "Calibrated pre-amplifier circuits to maintain a 10Hz – 50kHz frequency response, improving sensor accuracy"
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
          summary:
            "Developed a scheduling system to automate resource allocation for 120+ employees. " +
            "Refactored legacy web apps to support modern browsers, ensuring cross-browser compatibility. " +
            "Designed microservices for speech-to-text applications, scaling processing capacity significantly."
        }
      ]
    },
    {
      company: "Larsen & Toubro Infotech Ltd",
      logo: "./assets/images/lab.png",
      location: "Mumbai, India",
      roles: [
        {
          title: "Graduate Engineer Intern",
          date: "January 2021 - June 2021",
          summary:
            "Built Activity Management System using Java Spring Boot and Hibernate ORM, improving task tracking efficiency by 40%"+
            "Developed Restful APIs for user registration, task creation, updates and reporting to support 1000+ concurrent users" +
            "Implemented JWT – based authentication with Spring Security, enabling Role – based Access Controls for 100+ users" +
            "Orchestrated Jenkins CI/CD pipelines to automate testing and deployment workflows, cutting deployment time by 17% " 
        }
      ]
    }
    ];


export const PROJECT = [
    {
        title: "Automated Skin Lesion Classification System",
        image: "./images/parallel_processing.png",
        date: "December 2024",
        link: "https://github.com/omkar04gaikwad/Automated-SKin-Lesion-System",
        Skills: ["Python", "Apache Spark", "CNN"],
        summary: "This project focuses on developing an Automated Skin Lesion Classification System that leverages state-of-the-art deep learning models to analyze dermoscopic images of skin lesions. The system is designed to classify lesions into eight distinct classes, providing a reliable and efficient tool for early detection of skin cancer.",
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
        title: "SIEM Intrusion Detection",
        image: "./images/siem.png",
        date: "December 2024",
        link: "https://github.com/omkar04gaikwad/SIEM_Intrusion_Detection",
        Skills: ["ELK Stack", "Network Security"],
        summary: "This project demonstrates the process of analyzing firewall log data for intrusion detection using the ELK (Elasticsearch, Logstash, and Kibana) stack. The primary goal is to monitor, visualize, and gain actionable insights from network logs in real time. The data used in this project is sourced from a low-interaction honeypot environment designed to capture potential intrusion attempts.",
    },
    {
        title: "ASL Detection and Real-Time Text Conversion System",
        image: "./images/hand.png",
        date: "April 2024",
        link: "https://github.com/omkar04gaikwad/ASL-Detection-and-Real-Time-Text-Conversion-System",
        Skills: ["Python", "OpenCV", "TensorFlow"],
        summary: "This project focuses on real-time American Sign Language (ASL) prediction using Pose Estimation techniques. It employs Convolutional Neural Networks (CNNs) combined with MediaPipe's 2D pose estimation to accurately classify hand gestures into ASL alphabets. The primary objective is to enhance communication accessibility for individuals who are deaf or hard of hearing, allowing seamless interaction with non-ASL users.",
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
        title: "OgRUN2d",
        image: "./images/ogrun.png",
        date: "July 2020",
        link: "https://github.com/omkar04gaikwad/OgRUN2d",
        Skills: ["C++", "SFML"],
        summary: "OgRUN2d is a 2D game developed using the Unity engine. The game features [brief description of gameplay, e.g., a side-scrolling platformer where players navigate through various levels, overcoming obstacles and enemies to reach the end goal.",
    },
    {
        title: "LTI App",
        image: "./images/movie_ticket_booking_system.png",
        date: "June 2021",
        link: "https://github.com/omkar04gaikwad/LTI-app",
        Skills: ["Java", "Android"],
        summary: "Developed an Android application for LTI integration, enabling seamless access to learning tools and resources within the app. The application enhances the learning experience by providing a user-friendly interface and efficient resource management.",
    },
    
    {
        title: "Reliable Data Transfer Protocols",
        image: "./images/selectiverepeat.jpg",
        date: "February 2024",
        link: "https://github.com/omkar04gaikwad/RELIABLE_DATA_TRANSFER",
        Skills: ["C", "Networking", "TCP"],
        summary: "Implemented reliable data transport protocols, including Alternating-Bit, Go-Back-N, and Selective-Repeat, in C. The project provides a robust communication framework adhering to specified protocols, ensuring efficient data transmission.",
    },
    {
        title: "Smart Pet Care System",
        image: "./images/circuit.png",
        date: "February 2024",
        link: "https://github.com/omkar04gaikwad/SmartPetcareSystem",
        Skills: ["IoT", "Arduino", "Sensors"],
        summary: "Designed an IoT-based solution for pet owners to monitor and control pet care parameters such as food, water, and temperature. The system utilizes sensors connected to an Arduino board and provides a GUI for remote access and management, ensuring pet welfare even when owners are away.",
    },
    {
        title: "Automating Camera Rover for Sports Broadcast",
        image: "./images/ieee.gif",
        date: "January 2021",
        link: "https://ieeexplore.ieee.org/document/9579752",
        Skills: ["STM32", "Nvidia Jetsen nano", "Sensors"],
        summary: "A considerable amount of time and resources are spent on training pilots for a sports broadcast. A typical Camera Rover system requires multiple pilots to capture shots",
    },
    {
        title: "Electrostatic Precipitator for Vehicle Exhaust Soot Collection",
        image: "./images/electrostatic.png",
        date: "January 2022",
        link: "https://github.com/omkar04gaikwad/ELECTROSTATIC-PRECIPITATOR-FOR-VEHICLE-EXHAUST-SOOT-COLLECTION",
        Skills: ["IoT", "Arduino", "Sensors"],
        summary: "The invention consists of an electrostatic precipitator inside a small ceramic barrel attached at the end of vehicle exhaust along with a meager controller box attached to the underside of the automobile. It is powered by the principal automotive battery and uses the collected soot from the cartridge to produce ink. The exhaust quality, filter status, carbon content, and cartridge life are timely sent via push notifications to the user. Allowing them to refill and clean and reimburse their old cartridges for the new ones at relatively small sums of money. ",
    },
    ];
    