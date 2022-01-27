import "./hobbies.scss"
import {Headset, Straighten, Theaters, Brush} from "@material-ui/icons"


export default function Hobbies() {
    return (
        <div className="hobbies" id="hobbies">
            <div className="left">
                <span><Headset className="icon" style={{fontSize: 50}}/></span>
                <span><Straighten className="icon" style={{fontSize: 50}}/></span>
                <span><Theaters className="icon" style={{fontSize: 50}}/></span>
            </div>
            <div className="right">
            <h1>Hobbies & Other Interests</h1>
            <br/>
            <h2>For fun, I produce music. I hope to be able to sell instrumentals to artists and content creators in the future. 
                I am also proficient in playing the piano.</h2>
                <br/>
            <h2>I enjoy watching movies and tv shows, and I also write my own screenplays.</h2>
            </div>
         
        </div>
    )
}