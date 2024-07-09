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
        title: "ASL Prediction using Pose Estimation",
        location: "Northeastern University",
        image: "./assets/images/asl.png",
        date: "February 2024 - April 2024",
        link: "https://github.com/omkar04gaikwad/ASL-Detection-and-Real-Time-Text-Conversion-System",
        summary: "Developed a Gesture Classification system for interpreting American Sign Language (ASL) using advanced Pose Estimation techniques and Convolutional Neural Networks (CNNs). The system recognizes ASL gestures in real time, providing an interactive platform for communication between individuals who are deaf or hard of hearing and those unfamiliar with ASL. Achieved high accuracy through extensive data collection, preprocessing, model training, and validation.",
        responsibilities: [
          { title: "System Development", description: "Created a real-time ASL gesture recognition system using Pose Estimation and CNNs." },
          { title: "Data Collection and Preprocessing", description: "Gathered a robust dataset of ASL gestures, extracted hand landmarks using MediaPipe, and processed the data for model training." },
          { title: "Model Design and Training", description: "Developed a CNN model, trained it on the processed dataset, and validated its performance." },
          { title: "Real-Time Application Development", description: "Built an interactive web application using Streamlit to translate ASL gestures into text." },
          { title: "Performance Evaluation", description: "Conducted rigorous testing, achieving a test accuracy of approximately 97.6% for ASL sign classification." }
        ]
      },
    {
        title: "Reliable Data Transfer",
        location: "Northeastern University",
        image: "./assets/images/rdt.png",
        date: "October 2022 - December 2022",
        link: "https://github.com/omkar04gaikwad/RELIABLE_DATA_TRANSFER",
        summary: "The Reliable Data Transport project, implemented in C++, focuses on three key protocols: Alternating-Bit, Go-Back-N, and Selective-Repeat. Each protocol is designed to ensure robust and efficient communication within a simulated network environment. The project includes:",
        responsibilities: [
          { title: "Alternating-Bit Protocol", description: "Ensures reliable data transfer with simple error detection and retransmission." },
          { title: "Go-Back-N Protocol", description: "Improves efficiency by allowing multiple packets in transit and handling errors with retransmission." },
          { title: "Selective-Repeat Protocol", description: "Enhances performance by selectively retransmitting only erroneous packets." },
          { title: "Implementation", description: "Developed in C++ adhering to network protocol specifications." },
          { title: "Simulation Environment", description: "Created a controlled environment to simulate packet loss, errors, and varying network conditions." },
          { title: "Validation and Testing", description: "Conducted rigorous testing to measure throughput, packet loss, and error rates under different scenarios." }
        ]
    },
    {
        title: "A COMPLETE ENVIRONMENT SETUP FOR PET CARE USING IoT",
        location: "Northeastern University",
        image: "./assets/images/iotcircuit.png",
        date: "October 2022 - December 2022",
        link: "https://github.com/omkar04gaikwad/PetCare_IoT",
        summary: "Led a team to design a comprehensive IoT-based pet care system using an ESP8266 microcontroller. The system monitors and controls food, water, and temperature levels with sensors, achieving an 80% efficiency rate in tracking and measuring these parameters. Developed a secure GUI with authentication, improving reliability by 30%, and integrated real-time data analysis to predict pet care needs.",
        responsibilities: [
          { title: "Team Leadership", description: "Guided a team of 5 to design an IoT-based pet care system using an ESP8266 microcontroller." },
          { title: "System Design", description: "Implemented sensor-based monitoring for food, water, and temperature using IR, ultrasonic, and temperature sensors." },
          { title: "Efficiency Improvement", description: "Achieved an 80% efficiency rate in tracking and measuring food and water levels." },
          { title: "GUI Development", description: "Developed a GUI with authentication using Authorization token and JWT, increasing reliability by 30%." },
          { title: "Real-Time Monitoring", description: "Enabled real-time monitoring and control via a web server, with notifications for temperature, food, and water levels." }
        ]
    },
    {
        title: "Emotion Classifier using EEG Signal Analysis",
        location: "Mumbai University",
        image: "./assets/images/kaggle.png",
        date: "May 2020 - July 2020",
        link: "https://github.com/omkar04gaikwad/EmotionClassifier",
        summary: "Developed an EEG-based Emotion Classifier for efficient prediction of valence and arousal using the DEAP dataset. Engineered the extraction of EEG signals and applied Wavelet transform for feature extraction across multiple frequency bands. Implemented an SVM Classifier, achieving high accuracy in emotion recognition with 98.05% for valence and 97.89% for arousal. Validated the model’s performance through rigorous testing, showcasing its reliability in classifying emotional states.",
        responsibilities: [
          { title: "Data Extraction", description: "Extracted and preprocessed the DEAP dataset for emotion classification." },
          { title: "Feature Engineering", description: "Applied Wavelet transform to decompose EEG signals into delta, theta, alpha, beta, and gamma frequency bands." },
          { title: "Model Implementation", description: "Developed and trained an SVM Classifier to predict emotional states." },
          { title: "Performance Validation", description: "Achieved 98.05% accuracy in valence prediction and 97.89% accuracy in arousal prediction through extensive testing." }
        ]
      },
      {
        title: "Automating Camera Rover for Sports Broadcast",
        location: "Mumbai University",
        image: "./assets/images/paper.png",
        date: "May 2019 - June 2021",
        link: "https://github.com/omkar04gaikwad/CameraRover",
        summary: "Designed and implemented an automated Camera Rover system for sports broadcasting, reducing pilot requirements and improving synchronization using AI, Robotics, and Automation. Conducted comparative analysis of object detection models, selecting YOLOv3 for its efficiency. Integrated a 3-axis Gimbal with a GoPro Hero 7 for smooth camera movements and used cubic splines for automated cinematography.",
        responsibilities: [
          { title: "System Design", description: "Developed an automated Camera Rover for sports broadcasting with AI and Robotics." },
          { title: "Comparative Analysis", description: "Evaluated Faster R-CNN, Masked R-CNN, and YOLOv3, choosing YOLOv3 for reduced GPU run-times." },
          { title: "Integration", description: "Integrated a 3-axis Gimbal with a GoPro Hero 7 for stable camera movements." },
          { title: "Trajectory Generation", description: "Implemented cubic splines for automated cinematography." }
        ]
      },
      {
        title: "ELECTROSTATIC PRECIPITATOR FOR VEHICLE EXHAUST SOOT COLLECTION - 202221022618: Patent Pending",
        location: "Personal Project",
        image: "./assets/images/patent.png",
        date: "May 2021 - April 2022",
        link: "",
        summary: "Developed an electrostatic precipitator system for vehicle exhaust to reduce particulate matter, particularly soot, produced during engine combustion. Utilized IoT, high voltage electricity, and electrostatic discharge to offer a cost-effective solution compared to traditional methods. Core components include a ceramic casing with electrostatic plates, pressure sensors, an onboard computer, and a user interface with WiFi for data transmission. The system addresses environmental concerns by reducing carbon emissions and converts collected soot into ink, providing an innovative and sustainable solution.",
        responsibilities: [
          { title: "System Development", description: "Designed an electrostatic precipitator system for vehicle exhaust to reduce soot and particulate matter." },
          { title: "Innovation", description: "Utilized IoT, high voltage electricity, and electrostatic discharge to create a cost-effective solution." },
          { title: "Component Integration", description: "Incorporated a ceramic casing with electrostatic plates, pressure sensors, and an onboard computer for system control." },
          { title: "User Interface", description: "Developed a user interface with WiFi for data transmission, allowing real-time monitoring and control." },
          { title: "Environmental Impact", description: "Reduced carbon emissions and provided a sustainable solution by converting collected soot into ink." }
        ]
      },
      {
        title: "Sentiment Analysis for Reviews on IMDB Data",
        location: "Personal Project",
        image: "./assets/images/logistic.png",
        date: "May 2020 - June 2020",
        link: "https://github.com/omkar04gaikwad/SentimentAnalysis",
        summary: "Developed a sentiment analysis model for IMDB reviews, collecting 50,000 reviews and creating a CSV dataset. Transformed text data using Count Vectorizer and TF-IDF with 97% sparsity. Implemented logistic regression for sentiment classification, achieving 89% accuracy.",
        responsibilities: [
          { title: "Data Collection", description: "Compiled 50,000 IMDB reviews into a CSV dataset." },
          { title: "Text Transformation", description: "Applied Count Vectorizer and TF-IDF to preprocess text data." },
          { title: "Model Implementation", description: "Used logistic regression for sentiment classification, achieving 89% accuracy." }
        ]
      },
]