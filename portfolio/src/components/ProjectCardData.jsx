import socialbook from "../assets/socialbook.png";
import plant from "../assets/plant.png";
import whereTo from "../assets/PostsScreen.png";
import oldPortfolio from "../assets/oldPortfolio.png";
import campUnity from "../assets/CampUnity.png";
const ProjectCardData = [
  {
    id: 1,
    img: socialbook,
    title: "Socialbook",
    text: "A social media platform where you can upload photos, add a description and category, save or comment on others photos. -Developed using React.JS and Tailwind CSS for styling. -Created the backend of this website using Sanity.io (CMS) using schemas. -Accomplsihed user authentication with Google using Google Cloud Platform.",
    view: "https://socialbookk.netlify.app",
    more: "",
  },
  {
    id: 2,
    img: campUnity,
    title: "CampUnity",
    text: "Mobile application for university buy and sell marketplace -Developed Frontend using React Native CLI and Firebase for the backend (Firestore, Storage, Authentication). -Used Firestore to read and write users data, posts, and services. Utilized Firebase storage for storing images. -Created Custom React Hooks for different categories of data such as products, services, users.",
    view: "",
    more: "",
  },
  {
    id: 3,
    img: whereTo,
    title: "WhereTo",
    text: "A travel sharing web application -Frontend implemented using React.JS and Bootstrap for styling. -Used React context to pass trips and render in different components. Axios for making requests to the server. -Backend server built using Express and Node.JS. -Accomplished login and registration system using JWT and PostgreSQL to store the data, in addition to hashing the passwords.",
    view: "",
    more: "",
  },
  {
    id: 4,
    img: oldPortfolio,
    title: "My Old Portfolio",
    text: "This is my first Portfolio. Note that some data here may not be updated anymore",
    view: "https://abdallasoldportfolio.netlify.app/",
    more: "",
  },
  {
    id: 5,
    img: plant,
    title: "Autonomous Plant Watering",
    text: "This was a semester long project where we had an Arduino board in which soil moisture levels are measured consistently and below a certain level water automatically gets pumped through a tube to the plant.",
    view: "",
    more: "",
  },
];

export default ProjectCardData;
