import socialbook from "../assets/socialbook.png";
import plant from "../assets/plant.png";
import whereTo from "../assets/PostsScreen.png";
import oldPortfolio from "../assets/oldPortfolio.png";
const ProjectCardData = [
  {
    id: 1,
    img: socialbook,
    title: "Socialbook",
    text: "A social media platform where you can upload photos, add a description and category, save or comment on others photos. This website was built through ReactJS using HTML, Tailwind CSS, Javascript. Relevant libraries such as react-router-Dom and hooks such as UseState and UseEffect were used. The backend of this website was built using Sanity.io by creating schemas, Logging in with Google accomplished by Google cloud platform.",
    view: "https://socialbookk.netlify.app",
    more: "",
  },
  {
    id: 2,
    img: plant,
    title: "Autonomous Plant Watering",
    text: "This was a semester long project where we had an Arduino board in which soil moisture levels are measured consistently and below a certain level water automatically gets pumped through a tube to the plant. This project was created through Arduino IDE using C as well as IntelliJ IDE using Java.",
    view: "",
    more: "",
  },
  {
    id: 3,
    img: whereTo,
    title: "WhereTo",
    text: "Consists of a login and registration system using JWT and PostgreSQL to store the data, in addition to hashing the passwords. Once you log in you can post trips and see who has posted trips. The frontend of this website was implemented with ReactJS and bootstrap for styling. The backend server is Express and nodeJS. Used React context to pass trips and render in different components. Axios for making requests to the server.",
    view: "",
    more: "",
  },
  {
    id: 4,
    img: oldPortfolio,
    title: "My Old Portfolio",
    text: "This is my first Portfolio that I created which I have since decided to create a new one to reinforce some of my knowledge *Note that some data here may not be as accurate anymore",
    view: "https://abdallasoldportfolio.netlify.app/",
    more: "",
  },
];

export default ProjectCardData;
