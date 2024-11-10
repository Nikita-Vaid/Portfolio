/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";
import "./Portfolio.css";


const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Confluence 2k24 website",
    description: "This was the official website for the cultural fest of NIT Kurukshetra 2024.It got footfall of around 10k+ people.", 

    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Real-time chat application",
    description:
      "Leveraged ReactJS, NodeJS, ExpressJS, and MongoDB to build a scalable, real-time chat application, enabling instantmessaging with seamless user experience across multiple devices.",
    url: "https://chatx-frontend1.onrender.com/",
  },
  {
    title: "Gym Website using React",
    description:
      " Created a user-friendly gym website utilizing React, focusing on creating a seamless and engaging user experience.",
    url: "https://gym-website-red-iota.vercel.app/",
  },
  {
    title: "Bubble Shooter Game using JavaScript",
    description:
    "Designed a bubble-shooting game to showcase skills in JavaScript and CSS.",
    url: "https://bubble-shooter-game-weld.vercel.app/bubble-shooter.html",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{paddingTop:"35px"}}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            className="image-slide"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
