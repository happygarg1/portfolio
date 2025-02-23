import { link } from "node:fs";

export type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode; // Optional icon
};

export const navItems:NavItem[] = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#Achievements" },
    { name: "Contact", link: "#contact" },
  ];
  
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "AKTU-GHAR",
      des: "Explore the world where knowledge meets convenience!,Users can explore, purchase, and master courses with an intuitive experience, seamless payments, and interactive learning tools. Education, redefined.",
      img: "/AktuGhar.png",
      iconLists: ["/re.svg", "/tail.svg","/node.svg","./mongo.svg","./clo.svg"],
      link: "https://github.com/ishikajain1234/AKTU-GHAR",
    },
    {
      id: 2,
      title: "Samvaad - A Real Time chat App",
      des: "Convey your thoughts effortlessly with Samvaad – a real-time chat app that lets you seamlessly connect with colleagues and friends.",
      img: "/samvaad.png",
      iconLists:  ["/re.svg", "/tail.svg","/node.svg","./mongo.svg","./clo.svg"],
      link: "https://github.com/happygarg1/samvaad",
    },
    {
      id: 3,
      title: "Voyage Vista",
      des: "Discover the best travel destinations and exclusive packages tailored just for you!",
      img: "/voyagevista.png",
      iconLists: ["/html.svg","/css.svg"],
      link: "https://github.com/happygarg1/Travel-Website",
    },
    {
      id: 4,
      title: "Coming Soon..",
      des: "Many more to come....",
      img: "/footer-grid.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/about",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
      link:"https://www.linkedin.com/in/himani-garg-551937255/",
    },
    {
      id: 2,
      title: "ICPC Regionalist",
      desc: "Participated in the ICPC Regionals, showcasing my competitive programming skills and got 329 rank.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
      link:"https://www.linkedin.com/in/himani-garg-551937255/",
    },
    {
      id: 3,
      title: "LeetCode Profile",
      desc: "Solved 750+ questions and attained a 1750+ rating",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
      link:"https://leetcode.com/u/happygarg/"
    },
    {
      id: 4,
      title: "CodeChef Profile",
      desc: "3* on Codechef,Achieved a 1600+ rating with global rank 129,185,436",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
      link:"https://www.codechef.com/users/himanigarg08",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://www.linkedin.com/in/himani-garg-551937255/",
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://www.linkedin.com/in/himani-garg-551937255/",
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/himani-garg-551937255/",
    },
  ];