const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 20, 2021",
    title: "Serverside for CRUD using MERN stack -Part 1",
    image: "/images/blog1.jpg",
    link: "https://sachindugimhana.medium.com/serverside-for-crud-using-mern-stack-c5ec995b34f9",
  },
  {
    id: 2,
    date: "Mar 9, 2021",
    title: "Serverside for CRUD using MERN stack -Part 2",
    image: "/images/blog2.jpeg",
    link: "https://sachindugimhana.medium.com/serverside-for-crud-using-mern-stack-part-2-2481c65e7f4d",
  },
  {
    id: 3,
    date: "Mar 23, 2021",
    title: "The S.O.L.I.D design principles",
    image: "/images/blog3.png",
    link: "https://sachindugimhana.medium.com/the-s-o-l-i-d-design-principles-845dadd731b6",
  },
  {
    id: 4,
    date: "Apr 6, 2021",
    title: "Introduction about MongoDB",
    image: "/images/blog4.png",
    link: "https://sachindugimhana.medium.com/introduction-about-mongodb-238b48dd4553",
  },
  {
    id: 5,
    date: "Apr 13, 2021",
    title: "React vs Angular",
    image: "/images/blog5.png",
    link: "https://sachindugimhana.medium.com/react-vs-angular-9c05d01bae90",
  },
  {
    id: 6,
    date: "Apr 18, 2021",
    title: "SQL vs NoSQL: What is the best option for 2021?",
    image: "/images/blog6.png",
    link: "https://sachindugimhana.medium.com/sql-vs-nosql-what-is-the-best-option-for-2021-162138ed1931",
  },
  {
    id: 7,
    date: "May 12, 2021",
    title: "How to use some Basic Spring Boot Annotations",
    image: "/images/blog7.png",
    link: "https://sachindugimhana.medium.com/how-to-use-some-basic-spring-boot-annotations-2393977545e1",
  },
];

const techStack = [
  {
    category: "RPA",
    items: ["UiPath", "Power Automate"],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Kotlin", "Android"],
  },
  {
    category: "Backend",
    items: ["Java", "Node.js", "Python", "C#", "PHP"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MSSQL", "MySQL", "Firebase", "SQLite"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "GitLab", "BitBucket"],
  },
  {
    category: "Languages",
    items: ["R", "C++", "C"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#2e1c1dff",
    link: "https://github.com/SachinduG",
  },
  {
    id: 2,
    text: "Medium",
    icon: "/icons/medium.svg",
    bg: "#4bcb63",
    link: "https://sachindugimhana.medium.com/",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#8a220bff",
    link: "https://www.instagram.com/sachindu.ig/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sachindupathirawasam/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Automation",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Cybersecurity",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Data",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "Other",
  },
];

const gallery1 = [
  {
    id: 1,
    img: "/images/gal7.png",
    url: "https://credentials.uipath.com/568902e9-9512-43a6-bf83-538c4cb4b883",
  },
  {
    id: 2,
    img: "/images/gal8.png",
    url: "https://credentials.uipath.com/e3f052d5-29d3-4334-a957-a23d569e7412",
  },
  {
    id: 3,
    img: "/images/gal6.png",
    url: "https://www.credly.com/badges/5214a1e7-d6f6-434c-a616-e87c9ec29f65",
  },
];

const gallery2 = [
  {
    id: 1,
    img: "/images/gal2.png",
    url: "https://www.credly.com/earner/earned/badge/4cb44c27-bff6-4cd1-b473-0301bac5ecfc",
  },
  {
    id: 2,
    img: "/images/gal5.png",
    url: "https://www.credly.com/badges/103b867c-0b2c-4080-a568-2e028eb70e5b",
  },
  {
    id: 3,
    img: "/images/gal9.png",
    url: "https://www.credly.com/earner/earned/badge/2c776a0e-9a27-4107-abb7-16cd5d97ebb8",
  },
  {
    id: 4,
    img: "/images/gal3.png",
    url: "https://www.credly.com/earner/earned/badge/40a391d2-f47a-42b2-9462-93808b28fb96",
  },
  {
    id: 5,
    img: "/images/gal11.png",
    url: "https://www.credly.com/earner/earned/badge/f66e2234-5230-4735-a528-6e71d8cb780e",
  },
];

const gallery3 = [
  {
    id: 1,
    img: "/images/gal4.png",
    url: "https://www.credly.com/earner/earned/badge/2a1c0b2e-42ee-4ab9-b545-4fc7f4969c0f",
  },
  {
    id: 2,
    img: "/images/gal10.png",
    url: "https://www.credly.com/badges/faecc945-7429-4ee8-b498-c0c47106c197",
  },
];

const gallery4 = [
  {
    id: 1,
    img: "/images/gal1.png",
    url: "https://www.credly.com/earner/earned/badge/e5d335fe-0fbd-48f7-a46c-d4ef3d1dbcc3",
  },
];

const photoGalleries = {
  Automation: gallery1,
  Cybersecurity: gallery2,
  Data: gallery3,
  Other: gallery4,
};

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  photoGalleries,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 1,
      name: "Conference Management Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Conference Management.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ICAF 2021 is a comprehensive conference management tool designed to streamline the complex organization of academic events.",
            "Instead of disjointed workflows, it provides a unified ecosystem where Admins, Editors, Reviewers, and Users can collaborate seamlessly on research submissions.",
            "Think of it as the digital command center for the conference—handling the entire lifecycle from abstract submission to final review effortlessly.",
            "It's built with the MERN stack (MongoDB, Express, React, Node.js), ensuring a robust, responsive interface backed by a secure REST API architecture.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SachinduG/ICAF---AF_Project",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "icaf.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/icaf.jpeg",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 2,
      name: "SmartFuel App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[30vh] left-12",
      children: [
        {
          id: 1,
          name: "SmartFuel App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-50 right-90",
          description: [
            [
              "SmartFuel is a purpose-built mobile application designed to alleviate the chaos of fuel distribution during critical shortages.",
              "Instead of uncertain waiting times, it empowers users with real-time inventory tracking, live station status updates, and a digital queue management system.",
              "Think of it as a digital traffic controller for fuel stations—optimizing flow and ensuring fair distribution right from your smartphone.",
              "It's engineered with Flutter for a smooth cross-platform experience, backed by a robust REST API and Cloud Firestore for high-speed real-time data synchronization.",
            ],
          ],
        },
        {
          id: 2,
          name: "SmartFuel.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 right-20",
          imageUrl: "/images/fuel.jpg",
        },
        {
          id: 3,
          name: "github1.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SachinduG/EAD_FE",
          position: "top-52 left-80",
        },
        {
          id: 4,
          name: "github2.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/shamoda/ead-backend",
          position: "top-10 right-80",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 3,
      name: "Auto Trader API - Payment Microservice",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[55vh] left-5",
      children: [
        {
          id: 1,
          name: "Auto Trader API.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Auto Trader is a centralized digital marketplace designed to bridge the gap between vehicle owners, service providers, and the automotive community.",
            "Instead of a standard classifieds site, it serves as a specialized hub for Vehicles, Spare Parts, and Services—allowing anyone to advertise or discover solutions cost-free.",
            "Think of it as a curated automotive ecosystem—where every submission undergoes a rigorous admin review process to ensure quality and trust before hitting the feed.",
            "It features a robust role-based architecture, empowering registered users to showcase inventory while giving administrators full oversight to manage the platform's integrity.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SachinduG/auto-trader-payment",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "grad-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Sachindu1.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Sachindu3.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images//Sachindu.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Automation",
      image: "/images/Sachindu2.jpg",
      description: [
        "Hey! I’m Sachindu 👋, an RPA Developer and Data Scientist who enjoys building intelligent automation systems that actually make life easier.",
        "I specialize in UiPath, Power Automate, and Python—bridging the gap between complex data logic and intuitive design.",
        "I’m big on efficiency, scalability, and writing code that solves problems rather than creating new ones.",
        "Outside of dev work and my Master's studies at Linköping University, you'll find me exploring the latest tech stacks, optimizing workflows, or trying to convince my bots to work on the first try 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
