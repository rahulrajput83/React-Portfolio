import React from "react";
import { Chrono } from "react-chrono";

const customContent = [
    <div className="flex flex-col cursor-pointer w-full">
        <p className="text-sm font-bold mb-2">Techfino Capital Private Limited (TCPL)</p>
        <ol class="list-disc list-inside">
            <li className="text-xs">Worked as a Full Stack Engineer on two key projects, B2B2C and B2C in a fintech environment,
                contributing to both backend and frontend development.</li>
            <li className="text-xs">Played an integral role in the design, development, and maintenance of three portals for each project:
                Admin, Partner, and Customer, improving user experience and adding new features.</li>
            <li className="text-xs">Integrated third-party APIs to expand functionality, enabling enhanced data exchange and new
                service capabilities across the portals.</li>
            <li className="text-xs">Collaborated closely with cross-functional teams to understand requirements, propose solutions, and
                ensure timely delivery of project milestones.</li>
            <li className="text-xs">Successfully integrated a completely new product into an existing project for the Ninja Cart company,
                accomplishing this independently without disrupting the existing system flow.</li>
            <li className="text-xs">Achieved a daily loan disbursement of over 50L solely through this new integration, showcasing its
                significant scalability and positive impact on business operations.
            </li>
            <li className="text-xs">Implemented functionality to charge interest on customers for approved loans, ensuring compliance
                with organizational policies and regulatory requirements.</li>
            <li className="text-xs">Developed a mechanism to apply additional penalties for late loan payments, improving revenue
                recovery and promoting timely repayments.
            </li>
            <li className="text-xs">Developed a native mobile application from scratch using React Native, successfully deployed on Google Play Store.</li>
            <li className="text-xs">Implemented features enabling customers to manage their finances, including EMI payments, loan detail viewing, and profile updates.</li>
            <li className="text-xs">Ensured smooth integration with backend services for real-time data retrieval and updates.</li>
            <li className="text-xs">Focused on creating a user-friendly interface and seamless user experience throughout the app.</li>
            <li className="text-xs">Contributed to ongoing maintenance, updates, and user feedback to enhance app performance and functionality.</li>
            <li className="text-xs"><b>Tech Stack –</b> Angular, Typescript, NodeJS, Express, Python, FastAPI, MySQL, React Native, Bootstrap, Git</li>
        </ol>
    </div>
];

const items = [
    {
        title: "Feb, 2023 - Present",
        cardTitle: "",
        cardSubtitle: "",
        cardDetailedText: "",
    }
];

export default function WorkExperience() {
    return (
        <div className="py-8">
            <Chrono theme={{
                primary: "#A338CD",
                secondary: 'white',
                titleColor: "#A338CD",
                titleColorActive: "#A338CD",
                cardBgColor: "white",
                cardDetailsBackGround: 'white',
                nestedCardBgColor: 'white',
                nestedCardDetailsBackGround: 'white',
                toolbarBgColor: 'white',
                toolbarBtnBgColor: 'white',
                toolbarTextColor: 'white'
            }}
                cardHeight={500}
                borderLessCards
                mode="VERTICAL_ALTERNATING"
                scrollable
                hideControls
                disableToolbar
                useReadMore={false}
                items={items}>
                {customContent}
            </Chrono>
        </div>
    )
}