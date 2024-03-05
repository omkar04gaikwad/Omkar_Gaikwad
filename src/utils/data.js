export const SKILLS = [
    {
        title: "Network Security",
        icon: "./assets/images/networks.png",
        tag: "plc",
        skills: [
                {skill: 'TCP/IP', slink: './assets/images/tcpip.png'},
                {skill: 'DNS', slink: './assets/images/dns.png'},
                {skill: 'Wireshark', slink: './assets/images/wireshark.png'},
                {skill: 'Linux', slink: './assets/images/linux.png'},
                {skill: 'Adaptive Directory', slink: './assets/images/adir.png'},
                {skill: 'Metasploit', slink: './assets/images/metasploit.png'},
                {skill: 'LDAP', slink: './assets/images/Ldap.png'},
                {skill: 'Cisco Packet Tracer', slink: './assets/images/cisco.png'},
                {skill: 'Aws', slink: './assets/images/aws.png'},
                {skill: 'Bash Scripting', slink: './assets/images/bash.png'}
        ],
    },
    {
        title: "Embedded & Control Systems Software",
        icon: "./assets/images/embedded.png",
        tag:"mcu",
        skills: [
            {skill: 'Arduino', slink: './assets/images/arduino.png'},
            {skill: 'STM32', slink: './assets/images/stm32.png'},
            {skill: 'Microchip PIC', slink: './assets/images/pic.png'},
            {skill: 'C++ Programming', slink: './assets/images/cpp.png'},
            {skill: 'Embedded C', slink: './assets/images/ec.png'},
            {skill: 'Raspberry pi', slink: './assets/images/rpi.png'},
            {skill: '8051 Microcontroller', slink: './assets/images/8051.png'},
            {skill: 'Microprocessor & Architecture', slink: './assets/images/8086.png'},
            {skill: 'Keil µvision', slink: './assets/images/keil.png'},
            {skill: 'Free RTOS', slink: './assets/images/freertos.png'},
            {skill: 'STM32 Cube IDE', slink: './assets/images/cubeide.png'},
            {skill: 'Code Composer Studio', slink: './assets/images/ccs.png'},
            {skill: 'Texas Instruments - MSP43x, CC3200', slink: './assets/images/TImsp.png'},
            {skill: 'Internet of Things', slink: './assets/images/IoT.png'},
            {skill: 'Communication Protocols', slink: './assets/images/cpt.png'},
            {skill: 'Engine Control Unit(ECU)', slink: './assets/images/ecu.png'},
            {skill: "Matlab & Simulink", slink: './assets/images/matlab.png'},
            {skill: "PID Controller", slink: './assets/images/pid.png'},
            {skill: "Allen Bradley", slink: './assets/images/allenbradley.png'},
            {skill: 'Digital Signal Processing', slink: './assets/images/dsp.png'}
        ],
    },
    {
        title: "Machine Learning & Computer Vision",
        icon:"./assets/images/ml.png",
        tag: "ltools",
        skills: [
            {skill: 'Python', slink: './assets/images/python.gif'},
            {skill: 'R', slink: './assets/images/R.png'},
            {skill: 'Pandas', slink: './assets/images/pandas.png'},
            {skill: 'Numpy', slink: './assets/images/numpy.png'},
            {skill: 'Tensorflow', slink: './assets/images/tenserflow.png'},
            {skill: 'Pytorch', slink: './assets/images/pytorch.png'},
            {skill: 'Keras', slink: './assets/images/keras.png'},
            {skill: 'Natural Language processing', slink: './assets/images/nlp.png'},
            {skill: 'Open CV', slink: './assets/images/cv.png'},
            {skill: 'Jupyter Notebook', slink: './assets/images/jupyter.png'},
            {skill: 'Neural Networks', slink: './assets/images/neural.png'},
        ],
    },
    {
        title: "Web Development",
        icon:"./assets/images/webd.png",
        tag:"cpp",
        skills: [
            {skill: 'HTML', slink: './assets/images/html.png'},
            {skill: 'JavaScript', slink: './assets/images/javascript.gif'},
            {skill: 'React', slink: './assets/images/react.png'},
            {skill: 'Angular', slink: './assets/images/angular.png'},
            {skill: 'Github', slink: './assets/images/github.png'},
            {skill: 'SQL', slink: './assets/images/sql.png'},
            {skill: 'Flask', slink: './assets/images/flask.png'},
            {skill: 'Django', slink: './assets/images/django.png'},
            {skill: 'Jenkins', slink: './assets/images/jenkins.png'},
            {skill: 'CSS', slink: './assets/images/css.png'},
            {skill: 'REST API', slink: './assets/images/rest.png'},
           
        ],
    },
    {
        title: "Laboratory Tools",
        icon:"./assets/images/circuits.png",
        tag:"cpp",
        skills: [
            {skill: 'Oscilloscope', slink: './assets/images/osci.png'},
            {skill: 'Function Generator', slink: './assets/images/function.png'},
            {skill: 'Printed Circuit Board (PCB) Design', slink: './assets/images/pcb.png'},
            {skill: 'Soldering Iron', slink: './assets/images/solder.png'},
            {skill: 'Capacitors', slink: './assets/images/capacitor.png'},
            {skill: 'Multimeter', slink: './assets/images/multi.png'},
            {skill: 'Power Supply', slink: './assets/images/powersupply.png'},
        ],
    }
]

export const WORK_EXPERIENCE = [
    {
        title:"Hourly Class Assistant",
        logo:"./assets/images/coe.png",
        location: "Northeastern University",
        date: "January 2024 - Present",
        responsibilites:[
            "Mentored Class of 45 students by Conducting Office Hours, promoted Coding Practice for Python. Provided hands-on assistance by debugging and troubleshooting projects involving Python Programming"
        ]
    },
    {
        title:"Controls Software Engineer Co-op",
        logo:"./assets/images/nuvera.png",
        location: "Nuvera Fuel Cells LLC",
        date: "July 2023 - December 2023",
        responsibilites:[
            "Spearheaded Hardware-in-the-Loop (HIL) testing procedures for the Hydrogen Engine Control Model, using Speedgoat as the emulation platform to meticulously simulate real-time tasks.",
            "Benchmarked the accuracy of input and output pins of TTC ECU for analog and digital values with error percentage of 0-5%.",
            "Developed Python GUI streamlining process of generating and flashing hex files in TTC ECU",
            "Remodeled Hydrogen Fuel Cell Engine Simulink Control Model, resulting in the decrease of Simulation time by 20s.",
            "Established Vector CAN communication between VSM ECU and GUI, enabling Hydrogen Fuel Cell Engine control, of Current, and temperature, resulting a 15% increase in efficiency."
        ]
    },
    {
        title:"Researcher",
        logo:"./assets/images/northeastern.png",
        location: "Northeastern University-Laboratory for Ocean Acoustics and Ecosystem Sensing",
        date: "February 2023 - July 2023",
        responsibilites:[
            "Engineered a 192-meter acoustic aperture, meticulously installing 64 hydrophones across the span through precision soldering techniques.",
            "Executed high-fidelity data acquisition by channeling signals into a suite of 24-bit, 32-channel Analog to Digital Converters (ADC) with a programmable sampling rate of up to 100 kHz per channel.",
            "Employed closed-circuit testing to meticulously verify the integrity and precision of connections within the aperture, ensuring optimal functionality and reliability",
            "Utilized Python for real-time data analysis, enhancing automatic signal detection, classification, and localization capabilities.", 
            "Conducted thorough testing using oscilloscopes, logic analyzer and lab tools, ensuring robust connections and contributing to reliable system performance."
        ]
    },
    {
        title:"Senior Software Engineer",
        logo:"./assets/images/lti.png",
        location: "Larsen & Toubro Infotech Ltd.",
        date: "January 2021 - August 2022",
        responsibilites:[
            "Started out at LTI as a Graduate Intern and promoted to a full-time position as a Graduate Engineer Trainee within 6 months. Further promoted to Senior Software Engineer in 4 months.",
            "Led a team in developing a machine learning-based web application using Streamlit for data visualization. Achieved a 60% reduction in service tickets with a model accuracy of 95%.",
            "Designed a WebApp converting audio to text with an accuracy of 90%, implementing AWS Transcribe and S3 bucket.",
            "Collaborated with a team to develop APIs using Python and Angular framework, resulting in an efficiency improvement of 35%.",
            "Migrated a Vanilla JavaScript WebApp to Java servlet, enhancing compatibility across multiple browsers with a performance improvement of 65%."
        ]
    }


]

export const PROJECT = [
    {
        title:"Reliable Data Transfer",
        location: "Northeastern University",
        date: "October 2022 - December 2022",
        link:"https://github.com/omkar04gaikwad/RELIABLE_DATA_TRANSFER",
        responsibilites:[
           "Scripted a C++ code, to implement three transfer layer protocols viz. Alternating bit, Go-Back-N, and Selective Repeat",
           "Additionally, I simulated the code in an environment that mimics one-way network delay, packet corruption, and packet loss with a probability percentage ranging from 0 to 80%."
        ]
    },
    {
        title:"A COMPLETE ENVIRONMENT SETUP FOR PET CARE USING IoT",
        location: "Northeastern University",
        date: "October 2022 - December 2022",
        link:"https://github.com/omkar04gaikwad/PetCare_IoT",
        responsibilites:[
            "As a team leader, I guided a team of 5 students to design an enclosed pet care system that enables pet owners to monitor and control food, water, and temperature through the implementation of sensor-based monitoring systems on an ESP8266 microcontroller.", 
            "This resulted in an efficiency rate of 80% in accurately tracking and measuring food and water levels.",
            "I also developed a lightweight GUI that includes an authentication factor using Authorization token and JWT, resulting in a 30% increase in reliability for the owner to access and manipulate various settings."
        ]
    },
    {
        title:"Emotion Classifier using EEG Signal Analysis",
        location: "Mumbai University",
        date: "May 2020 - July 2020",
        link:"https://github.com/omkar04gaikwad/EmotionClassifier",
        responsibilites:[
            "Engineered an EEG-based Emotion Classifier for efficient valence and arousal prediction on the DEAP dataset, extracting EEG signals and applying Wavelet transform for feature extraction across delta, theta, alpha, beta, and gamma frequency bands.",
            "Implemented an SVM Classifier, achieving outstanding emotion recognition success. Demonstrated robust performance with 98.05% accuracy in valence prediction and 97.89% accuracy in arousal prediction.",
            "Validated the model's effectiveness through rigorous testing, showcasing its reliability and accuracy in emotion classification tasks"
        ]
    },
    {
        title:"Sentimental Analysis for Reviews on IMDB Data",
        location: "Personal Project",
        date: "May 2020 - June 2020",
        link:"https://github.com/omkar04gaikwad/SentimentAnalysis",
        responsibilites:[
            "Gather and compile 50,000 reviews on media and entertainment from the IMDB website, creating a CSV dataset.",
            "Transform the text using the Count Vectorizer's fit-transform method and the frequency-inverse frequency method with 97% zeros.", 
            "Classify sentiments by tokenizing the vectors and applying a logistic regression model, achieving a model accuracy of 89%."]
    },
    {
        title:"Automating Camera Rover for Sports Broadcast",
        location: "Mumbai University",
        date: "May 2019 - June 2021",
        link:"https://github.com/omkar04gaikwad/CameraRover",
        responsibilites:[
            "Designed and implemented an automated Camera Rover system for sports broadcasting, reducing the need for multiple pilots and improving synchronization using Artificial Intelligence, Robotics, and Automation technologies. ",
            "Conducted a detailed comparative analysis of Faster R-CNN, Masked R-CNN, and YOLOv3 for object detection, with YOLOv3 emerging as the superior choice due to significantly reduced GPU run-times (0.030s). ", 
            "Successfully integrated a 3-axis Gimbal with a GoPro Hero 7 camera, ensuring smooth camera movements based on yaw and pitch angles.", 
            "Implemented trajectory generation using cubic splines to achieve automated cinematography."
        ]
    },
    {
        title:"ELECTROSTATIC PRECIPITATOR FOR VEHICLE EXHAUST SOOT COLLECTION - 202221022618: Patent Pending",
        location: "Personal Project",
        date: "May 2021 - April 2022",
        link:"https://github.com/omkar04gaikwad/ElectrostaticPrecipitator",
        responsibilites:[
            "The invention presents an electrostatic precipitator system for vehicle exhaust, aiming to reduce air particulate matter, especially soot, produced during engine combustion.",
            "The system stands out by utilizing IoT, High Voltage Electricity, and Electrostatic Discharge, offering a cost-effective solution compared to existing methods like particulate filters and catalyst systems.",
            "Core components include a ceramic casing housing electrostatic plates, pressure sensors for monitoring soot levels, an onboard computer for control, and a user interface with a WiFi module for data transmission.",
            "The invention not only addresses environmental concerns by curbing carbon emissions but also holds market potential by allowing users to convert collected soot into ink, providing an innovative and sustainable solution."
        ]
    }
]