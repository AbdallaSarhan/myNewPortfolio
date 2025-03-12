import React, { useState, useEffect } from "react";
import { animated as a, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./TimelineStyles.css";
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const timelineData = [
    {
        year: "2020 - 2025",
        title: "B.Eng., Spec. Hons. Computer Engineering",
        company: "York University",
        description: "Pursuing specialized honors in Computer Engineering, focusing on software systems and advanced computing technologies.",
        icon: <FaGraduationCap />
    },
    {
        year: "May 2022 - Aug 2022",
        title: "Software Engineer Intern",
        company: "Bitspire Inc",
        description: "Enhanced web applications using Gatsby and TypeScript, migrated microservices to Scala/ZIO, and built productivity-boosting internal tools.",
        icon: <FaLaptopCode />
    },
    {
        year: "May 2023 - Aug 2023",
        title: "Infrastructure Solution Architect Co-op",
        company: "Sun Life Financial",
        description: "Containerized Java applications with Docker and OpenShift, developed AWS-based cloud solutions using Lambda, Lex, and Amazon Connect.",
        icon: <FaLaptopCode />
    },
    {
        year: "Sept 2023 - Dec 2023",
        title: "Software Engineer Intern",
        company: "Sun Life Financial",
        description: "Contributed to security initiatives through penetration testing and assisted in implementing malware protection solutions using Akamai's security features.",
        icon: <FaLaptopCode />
    },
    {
        year: "2023 - Present",
        title: "Software Engineer",
        company: "Freelance",
        description: "Developing full-stack web and mobile applications for various clients using React, React Native, and Node.js.",
        icon: <FaBriefcase />
    }
];

const TimelineItem = ({ data, style }) => {
    return (
        <a.div className="timeline-item" style={style}>
            <div className="timeline-icon">
                {data.icon}
            </div>
            <div className="timeline-content">
                <div className="timeline-year">{data.year}</div>
                <h3 className="timeline-title">{data.title}</h3>
                <div className="timeline-company">{data.company}</div>
                <p className="timeline-description">{data.description}</p>
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
        transform: show ? "translateX(0)" : "translateX(-50px)",
        config: { mass: 1, tension: 180, friction: 12 }
    });

    return (
        <div className="timeline-container" ref={ref}>
            <h2 className="timeline-header">Professional Journey</h2>
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