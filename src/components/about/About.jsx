import "./about.scss"
import {School} from "@material-ui/icons"


export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/image.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>I'm a</h2>
                    <h1>Computer Science Major</h1>
                    <h2>at Georgia State University<School/></h2>
                    <br/>
                    <p>I am interested in creating rich and responsive UI/UX applications 
                with a focus in front-end web development and mobile app development.</p>
                </div>
            </div>
        </div>
    )
}