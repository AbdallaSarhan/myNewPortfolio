import socialbook from '../../assets/socialbook-laptop.png';
import plant from '../../assets/plant.png';
import PostsScreen from '../../assets/wheretoAssets/PostsScreen.png';
import oldPortfolio from '../../assets/oldPortfolio.png';
import CampUnity from '../../assets/campunity-phone.png';
import pinMapDisplay from '../../assets/geosnapAssets/geosnap-phone.png';
import quiqpost from "../../assets/quiqpost-phone.png"
import platepal from "../../assets/platepal-phone.png"
const ProjectCardData = [
	{
		id: 1,
		img: quiqpost,
		title: "Quiqpost",
		text: "A peer-to-peer delivery app that connects people who need items shipped with travelers heading in the same direction. Users can post delivery requests or offer to carry items, making shipping faster, more affordable, and more eco-friendly. ",
		// text: "Mobile application for university buy and sell marketplace -Developed Frontend using React Native CLI and Firebase for the backend (Firestore, Storage, Authentication). -Used Firestore to read and write users data, posts, and services. Utilized Firebase storage for storing images. -Created Custom React Hooks for different categories of data such as products, services, users.",
		view: "",
		more: "",
		github: "https://github.com/AbdallaSarhan/",
		tags: [
			{ label: "React Native", color: "react" },
			{ label: "TypeScript", color: "typescript" },
			{ label: "AWS", color: "aws" },
			{ label: "NodeJS", color: "node" },
			{ label: "MongoDB", color: "mongo" },
			{ label: "Google APIs", color: "googleapis" }
		],
		appStore: "https://apps.apple.com/ca/app/quiqpost/id6737566141",
		features: [

			"Secure user authentication using custom JWT implementation",
			"Real-time chat using WebSockets and OneSignal notifications",
			"Address autocomplete via Google Maps API",
			"Image uploads using pre-signed URLs to AWS S3",
			"Containerized and deployed to AWS EC2 "
		  ]
	},
	{
		id: 2,
		img: platepal,
		title: "PlatePal",
		text: "A fun and interactive meal discovery app that lets users swipe through a variety of meals, saving the ones they like. With each saved meal, users can access detailed recipes and step-by-step cooking instructions, making it easy to explore new dishes and enhance their cooking experience.",
		// text: "Mobile application for university buy and sell marketplace -Developed Frontend using React Native CLI and Firebase for the backend (Firestore, Storage, Authentication). -Used Firestore to read and write users data, posts, and services. Utilized Firebase storage for storing images. -Created Custom React Hooks for different categories of data such as products, services, users.",
		view: "",
		more: "",
		github: "https://github.com/aboudjalal/PlatePal",
		tags: [
			{ label: "Swift", color: "swift" },
			{ label: "UIKit", color: "typescript" },
		],
		appStore: "https://apps.apple.com/ca/app/platepal/id6741442946",
		features: [
			"Built with Swift and UIKit",
			"Recipe API integration",
			"Favorites and offline recipe access using Swift's Codable and local storage"
		  ]
	},
	{
		id: 3,
		img: CampUnity,
		title: "CampUnity",
		text: "Inspired by the vision of a more connected university campus, I developed CampUnity, an app that helps students connect with each other to buy and sell items they no longer need and offer services to eachother.",
		// text: "Mobile application for university buy and sell marketplace -Developed Frontend using React Native CLI and Firebase for the backend (Firestore, Storage, Authentication). -Used Firestore to read and write users data, posts, and services. Utilized Firebase storage for storing images. -Created Custom React Hooks for different categories of data such as products, services, users.",
		view: "",
		more: "",
		github: "https://github.com/AbdallaSarhan/CampUnity",
		tags: [
			{ label: "React Native", color: "react" },
			{ label: "JavaScript", color: "javascript" },
			{ label: "Firebase", color: "firebase" },
		],
		features: [
			"Email/password auth via Firebase Authentication",
			"Real-time data with Firestore",
			"Image uploads using Firebase Storage",
			"Tab-based navigation with React Navigation",
			"Global state via Context API and custom hooks",
			"Form validation and error handling"
		  ]

	},
	{
		id: 4,
		img: pinMapDisplay,
		title: "GeoSnap",
		text: "A mobile app that lets users share and explore photos through a location-based map. Designed around the idea that memories are closely tied to the places they happen.",
		// text: "Developed a mobile application for sharing photos based on location, similar to the iPhone Photos app's image map feature -Utilized React Native CLI for the front end and Node.js with MongoDB for the backend to manage data and functionality. -Integrated Amazon S3 for efficient and secure image storage and retrieval using presigned URLs.",
		view: "",
		more: "",
		github: "https://github.com/AbdallaSarhan/geosnap",
		tags: [
			{ label: "React Native", color: "react" },
			{ label: "TypeScript", color: "typescript" },
			{ label: "AWS", color: "aws" },
			{ label: "NodeJS", color: "node" },
			{ label: "MongoDB", color: "mongo" },
			{ label: "LocationIQ API", color: "googleapis" }
		],
		features: [
			"Map view with Mapbox SDK and dynamic pin clustering",
			"Image uploads to AWS S3 via pre-signed URLs",
			"Real-time post display using MongoDB and Node.js backend",
			"Location tagging and autocomplete with LocationIQ API",
			"Server-side presigned URL generation with AWS SDK"
		  ]
	},
	{
		id: 5,
		img: socialbook,
		title: "Socialbook",
		text: "A social media app where users can upload photos with descriptions and categories, as well as save, comment on, and engage with others' posts.",
		// text: "A social media platform where you can upload photos, add a description and category, save or comment on others photos. -Developed using React.JS and Tailwind CSS for styling. -Created the backend of this website using Sanity.io (CMS) using schemas. -Accomplsihed user authentication with Google using Google Cloud Platform.",
		view: "https://socialbookk.netlify.app",
		more: "",
		github: "https://github.com/AbdallaSarhan/SocialBook",
		tags: [
			{ label: "React", color: "react" },
			{ label: "Tailwind", color: "tailwind" },
			{ label: "Sanity.io", color: "sanity" },
			{ label: "GCP", color: "googleapis" }
		],
		features: [
			"Built with React.js and styled using Tailwind CSS",
			"Content managed via Sanity.io with custom schemas",
			"Google authentication using GCP OAuth",
		
		  ]
	},

	// {
	// 	id: 4,
	// 	img: PostsScreen,
	// 	title: "WhereTo",
	// 	text: "A travel sharing web application -Frontend implemented using React.JS and Bootstrap for styling. -Used React context to pass trips and render in different components. Axios for making requests to the server. -Backend server built using Express and Node.JS. -Accomplished login and registration system using JWT and PostgreSQL to store the data, in addition to hashing the passwords.",
	// 	view: "",
	// 	more: "",
	// },
	// {
	// 	id: 5,
	// 	img: oldPortfolio,
	// 	title: "My Old Portfolio",
	// 	text: "This is my first Portfolio. Note that some data here may not be updated anymore",
	// 	view: "https://abdallasoldportfolio.netlify.app/",
	// 	more: "",
	// },
	// {
	// 	id: 6,
	// 	img: plant,
	// 	title: "Autonomous Plant Watering",
	// 	text: "This was a semester long project where we had an Arduino board in which soil moisture levels are measured consistently and below a certain level water automatically gets pumped through a tube to the plant.",
	// 	view: "",
	// 	more: "",
	// },
];

export default ProjectCardData;
