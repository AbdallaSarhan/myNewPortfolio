import React, { useState, useEffect } from "react";
import { animated as a, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./TimelineStyles.css";
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import SunLifeLogo from "../../assets/SunLife-logo.png";
import BitspireLogo from "../../assets/bitspire-logo.png";

const timelineData = [
    // {
    //     year: "Sept 2020 - Apr 2025",
    //     title: "Bachelors of Engineering, Computer Engineering",
    //     company: "York University",
    //     description: "Pursuing specialized honors in Computer Engineering, focusing on software systems and advanced computing technologies.",
    //     icon: <FaGraduationCap />
    // },
    {
        year: "Sept 2023 - Dec 2023",
        title: "Software Engineer Intern",
        company: "Sun Life Financial",
        icon: <img src={SunLifeLogo} alt="Sun Life Financial" style={{ width: 70, height: 70, objectFit: 'contain', borderRadius: '50%', background: '#fff', padding: 4 }} />,
        bullets: [
            "Developed a zero-trust file-upload scanner using Spring Boot with Akamai APIs for real-time malware detection.",
            "Integrated Apache Kafka to decouple malware scanning from file uploads, achieving sub-100ms response times and improving system scalability under load.",
            "Performed web application security assessments using Burp Suite, uncovering misconfigurations in HTTP headers improving platform security posture and aligning with OWASP recommendations."
        ]
    },
    {
        year: "May 2023 - Aug 2023",
        title: "Infrastructure Solution Architect Co-op",
        company: "Sun Life Financial",
        icon: <img src={SunLifeLogo} alt="Sun Life Financial" style={{ width: 70, height: 70, objectFit: 'contain', borderRadius: '50%', background: '#fff' }} />,
        bullets: [
            "Containerized and deployed a Java-based API on Red Hat OpenShift using oc CLI, Kustomize, and Helm, enhancing deployment repeatability and application scalability.",
            "Developed a serverless contact center using Amazon Connect and AWS Lambda, automating call routing and reducing manual triage efforts by 60%.",
            "Contributed to the design of scalable, event-driven AWS infrastructure with a focus on service integration and operational resilience across multiple teams."
        ]
    },
    {
        year: "May 2022 - Aug 2022",
        title: "Software Engineer Intern",
        company: "Bitspire Inc",
        icon: <img src={BitspireLogo} alt="Bitspire Inc" style={{ width: 70, height: 70, objectFit: 'contain', borderRadius: '50%', background: '#fff' }} />,
        bullets: [
            "Designed and implemented a real-time event-driven messaging system using Apache Pulsar and Scala, enabling low-latency pub/sub communication between microservices.",
            "Developed a custom Backstage plugin using Pulumi to automate AWS S3 bucket provisioning, reducing setup time by 70% and improving developer productivity.",
            "Built a developer tool in TypeScript for generating customizable React forms from JSON schemas, reducing form development time by 3x."
        ]
    },
   
   
    // {
    //     year: "2023 - Present",
    //     title: "Software Engineer",
    //     company: "Freelance",
    //     description: "Developing full-stack web and mobile applications for various clients using React, React Native, and Node.js.",
    //     icon: <FaBriefcase />
    // }
];
const TimelineItem = ({ data, style }) => {
    return (
        <a.div className="timeline-item" style={style}>
            <div className="timeline-icon-year-wrapper">
                <div className="timeline-icon">
                    {data.icon}
                </div>
                <div className="timeline-year">{data.year}</div>
            </div>
            <div className="timeline-content">
                <h3 className="timeline-job-title">{data.title}</h3>
                <div className="timeline-company">{data.company}</div>
                {data.bullets && (
                  <ul className="timeline-bullets">
                    {data.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
            </div>
        </a.div>
    );
};

const Timeline = () => {
    const [show, setShowing] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        setShowing(inView);
    }, [inView]);

    const trail = useTrail(timelineData.length, {
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        config: { mass: 1, tension: 180, friction: 12 },
        delay: 100
    });

    return (
        <div className="timeline-container" ref={ref}>
            <div className="timeline-header-area">
                <p className="timeline-intro-label">MY ACCOMPLISHMENTS</p>
                <h2 className="timeline-title">Work Experience</h2>
            </div>
            <div className="timeline">
                {trail.map((style, index) => (
                    <TimelineItem
                        key={index}
                        data={timelineData[index]}
                        style={style}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline; 