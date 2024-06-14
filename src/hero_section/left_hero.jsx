import Img1 from "../assets/images/amazon.png";
import Img2  from "../assets/images/flipkart.png";
function HeroLeft() {
    return(
        <div className="left_hero">
       <h1 className="left_text_1">
        YOUR FEET DESERVE THE BEST
       </h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi maiores dignissimos quas vitae officiis fugit amet saepe praesentium consectetur.</p>
       <div className="buttons">
        <button>Shop Now</button>
        <button>Categories</button>
        </div>
        <p>Also avaible on</p>
        <div className="imges_logo">
            <div className="left_img">
                  <img src={Img1} alt="" />
            </div>
            <div className="rigth_img">
                <img src={Img2} alt="" />
            </div>
        </div>
      
        </div>
    )
}
export default HeroLeft