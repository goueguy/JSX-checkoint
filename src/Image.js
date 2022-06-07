import flag from './ivory-coast.png';
const employeePicture = "/employee.png";
const video = "https://www.youtube.com/embed/XewKPAClkSw";
function Image(){
    return (
        <div>
            <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
            <br />

            <img src={flag} alt="flag"/>

            <br />

            <img src={employeePicture} alt="flag"/>

          </div>
        <iframe width="500" height="500" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <video width="320" height="240" controls>

          <source src={video} type="video/mp4" />

          </video> */}
        </div>
    )
}

export default Image;