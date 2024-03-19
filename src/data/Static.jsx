import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";

import css from "../assets/langues/css.png";

import js from "../assets/langues/js.png";

import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import php from "../assets/langues/php.png";
import java from "../assets/langues/java.png";
import dekut from "../assets/dekut.png";
import garage from "../assets/garage.webp"
import hosi from"../assets/hosi.png";
import ibm from "../assets/ibm.png";
import hotel from"../assets/hotel.png";
import travel from"../assets/travel.jpg";
import net from "../assets/net.png";
import cisco from "../assets/cisco.jpg"
// Array of work objects
export const works = [
  {
    title: "Hospital Management System",
    imgUrl:hosi,
    tech: ["HTML", "Javascript", "CSS"],
   
    duration: "400",
  },

  {
    title: "Garage management System",
    imgUrl: garage,
    tech: ["HTML", "CSS", "Bootstrap 5"],
    
    duration: "500",
  },
  {
    title: "My Autobiography Essay",
    imgUrl:hotel,
    tech: ["see my work "],
    workUrl:"https://eu.docworkspace.com/d/sIAK5iq_dAcGv5q8G",
    duration: "600",
  },
  {
    title: "My Photographic Essay",
    imgUrl:travel,
    tech: ["see my work "],
    workUrl:"https://eu.docworkspace.com/d/sIAK5iq_dAcGv5q8G",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "May 2022 - August 2022",
    company: "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
    position: "Internal Attachment",
    description:
      "Attended various technology trainings at Dedan kimathi University of Technology such as training on Cisco Networking skills, Hackaton, Huawei and GDSC training at dedan kimathi university of technology.Build Mobile application in team group.",
  },
  {
    date: "May 2023-August 2023",
    company: "LONDIANI SUBCOUNTY HOSPITAL",
    position: "External Attachment",
    description:
      "I actively participated in network configuration tasks. I assisted in setting up new network devices, including switches and access points, and I gained hands-on experience in configuring VLANs and implementing network security measures such as ACLs and firewalls. I also had the opportunity to troubleshoot connectivity issues and collaborate with the team to identify and resolve network-related problems.ii.I assisted in diagnosing hardware failures and replacing faulty components. This experience taught me the importance of following manufacturer's guidelines for repairs and the significance of proper handling and disposal of electronic waste. I also learned about the importance of documentation in maintaining an accurate record of hardware maintenance activities.",
  },
  
];

// Array of education objects
export const works1 = [
  {
    title: "DEDAN KIMATHI UNIVERSITY",
    imgUrl:dekut,
    tech: ["BACHELOR OF BUSINESS INFORMATION TECHNOLOGY"],
    title1:"September 2020- Current",
    workUrl:
      "https://www.dkut.ac.ke/",
    duration: "400",
  },

  {
    title: "IBM DATA SCIENCE CERTIFICATION",
    imgUrl: ibm,
    title2:"May 2021-July 2021",
    tech: ["Data Analysis"],
   
    duration: "500",
  },
  {
    title: "IBM ",
    imgUrl:net,
    title3:"September 2021-November 2021",
    tech: ["System Administrator"],
   
    duration: "600",
  },
  {
    title: "CISCO NETWORKING",
    imgUrl:cisco,
    title4:"September 2021-November 2021",
    tech: ["Cyber Security"],
    
    duration: "700",
  },
];

// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  
  
  {
    id: 7,
    src: angular,
    title: "Angular",
    style: "shadow-rose-500",
  },
  {
    id: 8,
    src: django,
    title: "Django",
    style: "shadow-emerald-700",
  },
  
  
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  
  {
    id: 13,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },

  {
    id: 14,
    src: php,
    title: "Php",
    style: "shadow-violet-400",
  },
  {
    id: 15,
    src: c,
    title: "C",
    style: "shadow-blue-400",
  },
  {
    id: 16,
    src: java,
    title: "Java",
    style: "shadow-orange-500",
  },
];
