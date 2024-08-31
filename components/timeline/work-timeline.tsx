interface TechnologySet {
  languages: string[];
  frameworks: string[];
  databases?: string[];
  tools?: string[];
  cloud?: string[];
}

interface WorkExperience {
  dateRange: string;
  jobTitle: string;
  company: string;
  location: string;
  technologies: TechnologySet;
  responsibilities: string[];
}

const workExperiences: WorkExperience[] = [
  {
    dateRange: "November 2017 - Present",
    jobTitle: "Full Stack Developer",
    company: "NEWRGM",
    location: "Little Rock, AR",
    technologies: {
      languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
      frameworks: ["React.js", "Redux"],
      databases: ["PostgreSQL"],
      tools: ["Git", "Shopify", "WooCommerce"],
    },
    responsibilities: [
      "Developed and maintained front-end web applications using HTML, CSS, JavaScript, React.js, Redux. Managed source control repositories with Git including branching strategies and pull requests.",
      "Engineered and launched advanced e-commerce solutions using Shopify and WooCommerce, significantly boosting clients' online sales and market visibility.",
      "Leveraged React, JavaScript, and TypeScript to architect and build sophisticated web applications, incorporating real databases and real-time functionalities, for enhanced blogs and portfolio sites, significantly improving user experience and site performance.",
      "Directed all facets of freelance operations, from initial client consultation to project execution and delivery, ensuring excellence and client satisfaction at every step.",
    ],
  },
  {
    dateRange: "October 2020 - January 2022",
    jobTitle: "FULL STACK DEVELOPER",
    company: "ATA International",
    location: "Little Rock, ARKANSAS",
    technologies: {
      languages: ["C#", "TypeScript"],
      frameworks: ["ASP.NET Core", "React"],
      databases: ["Microsoft SQL Server"],
      tools: ["Git", "GitHub", "Azure DevOps", "Umbraco CMS"],
      cloud: ["Azure"],
    },
    responsibilities: [
      "Pioneered the migration from Nation Builder CMS to Umbraco and implemented dynamic portals with C#, ASP.NET Core, React, and TypeScript, elevating the experience for 130,000+ members across 23 countries.",
      "Architected custom portals and RESTful APIs for member and gym owner data management, event registration, and training resources. Conducted unit testing and integration testing for functionality.",
      "Transformed version control by introducing Git & GitHub; streamlined CI/CD via Azure DevOps, resulting in enhanced code and deployment efficiency.",
      "Implemented automation, backup, and recovery protocols to ensure data integrity and security, while preserving data for future use.",
    ],
  },
  {
    dateRange: "April 2019 - April 2020",
    jobTitle: "FRONT END WEB DEVELOPER",
    company: "Design Group Marketing",
    location: "Little Rock, ARKANSAS",
    technologies: {
      languages: ["HTML", "CSS", "JavaScript"],
      frameworks: ["React", "Bootstrap", "WordPress"],
      tools: ["Git", "ManageWP", "Adobe Suite"],
    },
    responsibilities: [
      "Developed custom WordPress UI's using HTML, CSS, Bootstrap, and React, enhancing user engagement across diverse client websites.",
      "Innovated processes by introducing ManageWP for CI/CD and VCS, significantly boosting the efficiency of updates, backups, and client information management.",
      "Utilized Adobe Suite to create detailed mockups and visual sitemaps, driving the development of engaging and cohesive online presences for clients.",
      "Ensured accessibility compliance through testing, validating, and debugging web applications.",
    ],
  },
  {
    dateRange: "April 2014 - June 2017",
    jobTitle: "Junior Web Developer",
    company: "Chef Shuttle",
    location: "Little Rock, AR",
    technologies: {
      languages: ["Python", "HTML"],
      frameworks: ["Django"],
      tools: ["Twilio"],
    },
    responsibilities: [
      "Developed and maintained a web portal using Python, Django, and HTML, handling driver availability and order history, significantly reducing manual intervention.",
      "Managed an on-premises server with a Django backend, ensuring 99.9% uptime while processing 150-300 orders daily.",
      "Integrated SMS notifications via Twilio, automating order assignments and providing real-time updates to drivers and dispatchers across 9 operational zones.",
      "Streamlined manual processes, automating driver clock-ins and status updates, which improved operational efficiency by 50%.",
    ],
  },
];

const TechnologyList: React.FC<{ technologies: TechnologySet }> = ({
  technologies,
}) => (
  <div className="mt-3 flex flex-wrap gap-2 text-balance">
    {Object.entries(technologies).map(
      ([category, items]) =>
        items &&
        items.map((item: string) => (
          <span
            key={`${category}-${item}`}
            className="px-2 py-1 bg-primary text-gray-800 text-xs font-medium rounded-full"
          >
            {item}
          </span>
        ))
    )}
  </div>
);

const TimelineItem: React.FC<WorkExperience & { index: number }> = ({
  dateRange,
  jobTitle,
  company,
  location,
  technologies,
  responsibilities,
  index,
}) => (
  <li>
    {index !== 0 && <hr />}
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div
      className={`mb-10 ${
        index % 2 === 0
          ? "timeline-start md:text-end"
          : "timeline-end md:text-start"
      }`}
    >
      <time className="font-mono italic">{dateRange}</time>
      <div className="text-lg font-black">{jobTitle}</div>
      <div className="font-bold">{company}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{location}</div>
      <TechnologyList technologies={technologies} />
      <ul
        className={`list-disc ${
          index % 2 === 0 ? "md:list-inside" : "md:list-outside"
        } mt-4 text-sm list-none`}
      >
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="mb-2">
            {resp}
          </li>
        ))}
      </ul>
    </div>
    {index !== workExperiences.length - 1 && <hr />}
  </li>
);

export default function WorkTimeline(): JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-balance">
        {workExperiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} index={index} />
        ))}
      </ul>
      <div className="text-center mt-8">
        <button className="btn btn-primary hover:btn-success">
          Download CV
        </button>
      </div>
    </div>
  );
}
