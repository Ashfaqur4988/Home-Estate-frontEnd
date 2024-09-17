const Slider = ({ images }) => {
  return (
    <div>
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages"></div>
    </div>
  );
};
export default Slider;
