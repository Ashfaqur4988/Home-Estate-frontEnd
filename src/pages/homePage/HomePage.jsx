import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Finding Your Perfect Place with a Touch of Sweetness
          </h1>
          <p className="desc">
            Discover a place where comfort, style, and happiness come together
            seamlessly. Let us guide you to a place where comfort and happiness
            meet.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>100+</h2>
              <h3>Happy Customers</h3>
            </div>
            <div className="box">
              <h2>20</h2>
              <h3>Awards</h3>
            </div>
            <div className="box">
              <h2>800+</h2>
              <h3>Property Ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};
export default HomePage;
