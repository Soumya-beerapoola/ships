import React from "react";
import about from "./assets/about.jpeg";
import "./about.css";
import git from "./assets/git.png";
import linked from "./assets/linked.png";
import resume from "./assets/resume.png";


const About = () => {

    let techstacks = ["Javascript","React","HTML 5","CSS","Typescirpt","Tailwind CSS","SASS","GraphQL"]
    let contact =[
        {
        
        img:resume,
        url:"/src/assets/Beerapoola_Soumya.pdf"
    },
    {
        img:linked,
        url:"https://www.linkedin.com/in/beerapoola-soumya-a767a4241/"
    },
    {
        img :git,
        url:"https://github.com/Soumya-beerapoola/"
    }
]
    return (
        <>
        <div className="about">
            <div>
            <div className="top">
                <div className="image">
                </div>
                <div className="rightContent">
                    <h1> Hello I'm Beerapoola Soumya</h1>
                    <h5>beerapoolasoumya16@gmail.com</h5>
                    <div className="para">
                    <div> I'm a passionate FRONTEND DEVELOPER with 2.6 years of experience mostly worked on JavaScript/React.js.</div>
                    <div>
                        -Good Industrial experience in Agile Methodologies
                    </div>
                    <div>-Mentored Freshers and guided them with the</div>
                    <div>
                        Enthusiastic towards learning and exploring new technologies, and being updated
                    </div>
                    </div>     
                </div>
            </div>
            <div className="techstacks">
                <h2>Techstacks</h2> 
                {techstacks.map((e) => {
                    return <button>{e}</button>
                })}
            </div>
            <div className="contact">     
                <h2>Contact</h2>  
                {contact.map((e)=>{
                   return <a href={e.url} style={{margin:"5px"}} target="_blank"><img src={e.img} height="35px" width="40px"></img></a>
                })}
            </div>
            </div>
            </div>
        </>
    )
}

export default About;