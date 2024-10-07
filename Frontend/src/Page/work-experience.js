import React from "react";
import { Chrono } from "react-chrono";

const customContent = [
    <div className="flex flex-col cursor-pointer w-full">
        <p className="text-sm font-bold mb-2">Techfino Capital Private Limited (TCPL)</p>
        <ol class="list-disc list-inside">
            <li className="text-xs">Spearheaded the development of three major fintech projects (B2B2C, B2C & SAAS), delivering full stack solutions across three distinct portals (Admin, Partner, Customer).</li>
            <li className="text-xs">Integrated third-party APIs to enhanced platform functionality and real-time data exchange.</li>
            <li className="text-xs">Led the integration of a new product for Ninja Cart, contributing to Rs 50L+ daily loan disbursement and demonstrating system scalability.</li>
            <li className="text-xs">Developed mechanisms for interest calculations and penalties for late payments, increasing revenue recovery while ensuring policy compliance.</li>
            <li className="text-xs">Built a React Native mobile application from scratch, deployed on Google Play Store, improving user experience with EMI payments and loan management.</li>
            <li className="text-xs">Collaborated with cross-functional teams to ensure timely project delivery and alignment with business goals.</li>
            <li className="text-xs">Documented system architecture and APIs, streamlining team onboarding and boosting efficiency.</li>
            <li className="text-xs">Collaborated with JusPay to integrate a seamless loan solution, enabling partner university students to take loans for fees and pay via EMIs.</li>
            <li className="text-xs">Automated loan balance adjustments upon EMI payments, enhancing accuracy and reducing manual interventions.</li>
            <li className="text-xs">Incorporated an Account Aggregator, retrieving customers’ one-year financial history to streamline the loan processing.</li>
            <li className="text-xs">Implemented an auto-loan approval system based on financial transactions, improving decision making accuracy.</li>
            <li className="text-xs">Developed a cron job to automatically update loan balances, ensuring real-time precision in loan adjustments.</li>
            <li className="text-xs">Engineered automatic PAN and Aadhar verification, streamlining the process by removing manual intervention and ensuring real-time customer verification.</li>
            <li className="text-xs">Introduced two-factor authentication (2FA) to enhance security, providing an additional layer of protection for user accounts.</li>
            <li className="text-xs">Resolved bugs across all portals, ensuring smoother functionality and improving overall system stability.</li>
            <li className="text-xs">Developed role-based access control (RBAC), restricting endpoint access based on user roles, significantly enhancing the platform’s security.</li>
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