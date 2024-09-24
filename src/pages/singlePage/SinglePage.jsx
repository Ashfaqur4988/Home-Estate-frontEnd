import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";
import "./singlePage.scss";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const post = useLoaderData();
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetail.desc}</div>
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
                <p>{post.postDetail.utilities}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.postDetail.pet}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <div className="sizeText">
                <span>{post.postDetail.size} sqft</span>
              </div>
            </div>

            <div className="size">
              <img src="/bed.png" alt="" />
              <div className="sizeText">
                <span>{post.bedroom} beds</span>
              </div>
            </div>

            <div className="size">
              <img src="/bath.png" alt="" />
              <div className="sizeText">
                <span>{post.bathroom} bath</span>
              </div>
            </div>
          </div>
          <p className="title">Nearby places</p>
          <div className="listHorizontal">
            <div className="size">
              <img src="/school.png" alt="" />
              <div className="sizeText">
                <span>School {post.postDetail.school}m away</span>
              </div>
            </div>

            <div className="size">
              <img src="/restaurant.png" alt="" />
              <div className="sizeText">
                <span>{post.postDetail.restaurant} Restaurant</span>
              </div>
            </div>

            <div className="size">
              <img src="/bus.png" alt="" />
              <div className="sizeText">
                <span>{post.postDetail.bus} Bus Stop</span>
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
