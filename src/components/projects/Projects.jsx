import "./projects.scss"
import {VideogameAsset, ArrowBackIos, ArrowForwardIos, NewReleases} from "@material-ui/icons"
import { useState } from "react";

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: <VideogameAsset style={{fontSize: 30}}/>,
            title: "Side-scrolling Game in Javascript",
            sub: "Project",
            desc: "This is a 2D platformer game made entirely with vanilla javascript. I was responsible for level implementation and programming game objects such as interactable buttons and doors, as well as, moving platforms for the player to jump on.",
            img: "/assets/game2.png",
            a: "https://tntpc.csb.app/",
            b: "Go!",
        },
        {
            id: "2",
            icon: <NewReleases style={{fontSize: 30}}/>,
            title: "Portfolio Website",
            sub: "Project",
            desc: "Portfolio website created with React.js, HTML, and Sass.",
            img: "/assets/chlogo-black.png",
            a: "#intro",
            b: "Visit",
        },
    ];

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="projects" id="projects">
            <div className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    >
                        {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {d.icon}
                                </div>
                                <h2>{d.title}</h2>
                                <h4>{d.sub}</h4>
                                <p>{d.desc}</p>
                                <a href={d.a}><button>{d.b}</button></a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                        ))}
            </div>
            <ArrowBackIos className="arrow left" style={{fontSize: 50}} onClick={() => handleClick("left")}/>
            <ArrowForwardIos className="arrow right" style={{fontSize: 50}} onClick={() => handleClick()}/>
        </div>
    );
}