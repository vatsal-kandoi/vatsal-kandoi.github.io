import { IAboutInfo, IEducation, IJob } from "./interfaces";

const ABOUT: IAboutInfo = {
    name: "Vatsal Kandoi",
    about: [
        "Working on Kubernetes, Python and React as a Software Developer Associate at JPMorgan Chase, specifically risk calculation and management under the Athena platform",

    ],
    github: "https://github.com/vatsal-kandoi",
    linkedIn: "https://www.linkedin.com/in/vatsal-kandoi/",
    email: "vatsalkandoi1998@gmail.com",
    catchy_contact_me_description: "Drop a ping on any of the channels"
}

const EDUCATION: IEducation[] = [{    
    degree_name: "B.Tech, Electronics & Communication Engineering",
    college_name: "Vellore Institute of Technology",
    start_date: new Date(2017,7,17),
    end_date: new Date(2021,6,1),
    bullets: [
        "Completed the course with a GPA of 8.79 out of 10",
        "Was a part of Creation Labs, under Team UAV, a student body building autonomous aerial vehicles for research and competitions. Held the position of avionics lead",
        "Co-founded VIT Linux Users Group, a student body spreading awareness and organizing knowledge sharing sessions on Linux",
        "Part of ACM VIT Student Chapter. Member of the web development team and responsible for a variety of projects centered around the functioning of the chapter, such as recruitment portals or websites for social causes"
    ]
}];

const EXPERIENCE: IJob[] = [

    {
        role_shorthand: "Associate",
        role: "Software Developer Associate",
        company: "JPMorgan Chase",
        start_date: new Date(2023,1,18),
        end_date: "present",
        bullets: [
            "Led the refactoring for the framework responsible for running ad-hoc and scheduled tests on risk models using various software design principles, allowing the code-base to be more modular and testable",
            "Worked on enabling users to use migrate to AWS Aurora from on-premises post-gres to store calculated risk numbers using Kubernetes Jobs",
            "Selected to take part in Markets Excellence Programme, a yearly initiative selecting around 60 people across CIB Markets Tech India and providing them an opportunity to ideate and deliver a solution around friction points faced by teams in Markets. Worked on automated generation of acceptance tests for Cucumber",
        ],
    },
    {
        role_shorthand: "Analyst",
        role: "Software Developer Analyst",
        company: "JPMorgan Chase",
        start_date: new Date(2021,8,1),
        end_date: new Date(2023,1,17),
        bullets: [
            "Collaborated closely with Quantitative Research teams to elicit, analyze, and document requirements, and developed features aimed at reducing the data-set utilized for ad-hoc tests on risk model changes, there-by reducing the time taken, and associated compute and storage costs",
            "Streamlined the migration of users onto Athena, with a focus on Equities LOB, by developing reusable components, aimed at standardizing the distribution of risk calculated on Athena to various downstream systems",
            "Took part in Force for Good, a platform to contribute to NGOs with technology solutions. Contributed to Civis, a platform aiming to help citizens understand and provide feedback on various government proposals by improving the sites' accessibility",
        ]
    },
    {
        role_shorthand: "Intern",
        role: "Software Developer Intern",
        company: "JPMorgan Chase",
        start_date: new Date(2021,1,18),
        end_date: new Date(2021,7,30),
        bullets: [
            "Developed various comparison mechanisms aimed at allowing users to compare the numerical & performance impact of risk model changes against batches executed in production",
            "Developed a user interface using React for a framework enabling Quantitative Research teams to run ad-hoc tests on risk model changes, and visualize & debug breaks",
        ]
    },
    {
        role_shorthand: "Intern",
        role: "Backend Developer Intern",
        company: "CamCann",
        start_date: new Date(2020,5,1),
        end_date: new Date(2020,6,30),
        bullets: [
            "Worked as a part of the back-end development team for Ezstudy, an e-learning platform connecting students to teachers",
            "Developed APIs to allow teachers to upload video content to Amazon S3",
            "Transcode uploaded videos to popular formats via Amazon S3 triggers and AWS Elastic Transcoder",
        ]
    },
]

export {
    ABOUT,
    EDUCATION,
    EXPERIENCE,
};