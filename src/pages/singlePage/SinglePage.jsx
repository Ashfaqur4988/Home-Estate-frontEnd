import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";
import "./singlePage.scss";
import Map from "../../components/map/Map";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets are allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <div className="sizeText">
                <span>80sqft</span>
              </div>
            </div>

            <div className="size">
              <img src="/bed.png" alt="" />
              <div className="sizeText">
                <span>2 beds</span>
              </div>
            </div>

            <div className="size">
              <img src="/bath.png" alt="" />
              <div className="sizeText">
                <span>1 bath</span>
              </div>
            </div>
          </div>
          <p className="title">Nearby places</p>
          <div className="listHorizontal">
            <div className="size">
              <img src="/school.png" alt="" />
              <div className="sizeText">
                <span>School</span>
              </div>
            </div>

            <div className="size">
              <img src="/restaurant.png" alt="" />
              <div className="sizeText">
                <span>Restaurant</span>
              </div>
            </div>

            <div className="size">
              <img src="/bus.png" alt="" />
              <div className="sizeText">
                <span>Bus Stop</span>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
