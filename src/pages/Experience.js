import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2016"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Solaris Public School, Ahmedabad, Gujarat
                    </h3>
                    <p> High School </p>
                    </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2020"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Indus University, Ahmedabad, Gujarat
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>
                    <p> Computer Science</p>
                    <p>Coursework: Data Structures and Algorithm, Compiler Design, Operating System, Big Data, Software Development</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2020"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer Intern - Hypeteq Software Solutions Pvt Ltd.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Ahmedabad, Gujarat
                    </h4>
                    <p>Developed an AI conversational Chatbot project using Language Understanding Intelligence Service (LUIS) Microsoft Azure Services</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Software Application Engineer - Odoo Inc.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Gandhinagar, Gujarat
                    </h4>
                    <p>Creating new business modules for the Odoo platform, customizing existing modules,
                        managing databases using ORM API for the backend of the application,
                        and addressing change requests for previously developed modules such as sales, invoice, helpdesk, point of sale, timesheet, planning</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - present"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        San Jose State University, San Jose, California
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Master's Degree
                    </h4>
                    <p>
                        Computer Engineering
                    </p>
                    <p>Coursework: System Software, Advance Computer Design, Computer Architecture</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;