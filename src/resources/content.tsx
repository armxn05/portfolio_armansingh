import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Arman",
  lastName: "Singh",
  name: `Arman Singh`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "armansinghbhadoria05@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier
  languages: ["English"], // optional
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/armxn05",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/arman-singh-bhadoria",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@armxn05",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building impactful solutions with software and AI</>,
  featured: {
    display: false, // removed Once UI featured work
  },
  subline: (
    <>
      I'm Arman, a Software Developer, where I craft intuitive
      <br /> user experiences and build real-world AI/ML projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Arman Singh, a passionate Software Developer dedicated to
        building impactful projects that solve real-world problems. With a keen
        interest in Machine Learning and Artificial Intelligence, I love
        transforming ideas into intelligent, scalable solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "JP Morgan Chase & Co.",
        timeframe: "June 2022 - July 2022 ",
        role: "Software Developer Job Simulation",
        achievements: [
          <>Worked on various software engineering projects through FORAGE.</>,
          <>
            Tasks included:  
            • Using JPMorgan Chase & Co. frameworks and tools  
            • Displaying data visually for traders  
            • Working with stock price data feeds  
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Manipal University Jaipur",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Sri Sathy Sai Vidya Vihar, GAIL Vijaipur",
        description: <>Completed my schooling.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Writing project scripts with high efficiency.</>,
        tags: [],
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js and modern tools.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and AI...",
  description: `Read what ${person.name} has been exploring recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software and AI/ML projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
