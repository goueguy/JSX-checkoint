import flag from './ivory-coast.png';
import './style.css';
const employeePicture = "/employee.png";
const logo = "/logo192.png";
const video = "https://www.youtube.com/embed/XewKPAClkSw";

function Image(){
    return (
        <div>
            <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
            <br />

            <div className='container'>
               <img src={logo} alt="flag"/>
                <img src={flag} alt="flag" style={{ margin:"70px" }}/>
                <img src={employeePicture} alt="flag"/>
                <iframe width="500" height="500" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

           

          </div>
          {/* <video width="320" height="240" controls>

          <source src={video} type="video/mp4" />

          </video> */}
        </div>
    )
}

export default Image;