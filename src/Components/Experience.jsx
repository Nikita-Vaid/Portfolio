import React from "react";
import experienceimage from '../images/experience.jpg'
const Experience = () => {
  return (
    <div id="experience" style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"10px",height:"100vh"}}>
        <h2>Experience</h2>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"10px",gap:"20px",marginTop:"40px"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",gap:"5px", borderRadius: "10px",
            border: "1px solid rgb(204, 204, 204)"}}>
                <h2>SyntHeim</h2>
                <div> Feb 2024– June 2024</div>
                <div>
                    <ul>Collaborated with the development team to design and implement a voice chat application using React Native.</ul>
                    <ul>Wrote clean, maintainable code in React Native and JavaScript.</ul>
                    <ul> Worked with back-end technologies such as Socket.IO, MongoDB, and SQL.</ul>
                    </div>
                
            </div>
            <div><img src={experienceimage} alt="imagehghg" width={500}/></div>
        </div>
    </div>
  );
};

export default Experience;
