import "./hotelData.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../reserve/Reserve";

const HotelData = ({ setOpen, setSlideNum, data, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (i) => {
    setSlideNum(i);
    setOpen(true);
  };

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="hotelWrapper">
      <button className="bookNow">Reserve or Book Now!</button>
      <h1 className="hotelTitle">{data.name}</h1>
      <div className="hotelAddress">
        <FontAwesomeIcon icon={faLocationDot} />
        <span>{data.address}</span>
      </div>
      <span className="hotelDistance">
        Excellent location – {data.distance}m from center
      </span>
      <span className="hotelPriceHighlight">
        Book a stay over ${data.cheapestPrice} at this property and get a free
        airport taxi
      </span>
      <div className="hotelImages">
        {data.photos?.map((photo, i) => (
          <div className="hotelImgWrapper" key={i}>
            <img
              onClick={() => handleOpen(i)}
              src={photo}
              alt=""
              className="hotelImg"
            />
          </div>
        ))}
      </div>
      <div className="hotelDetails">
        <div className="hotelDetailsTexts">
          <h1 className="hotelTitle">{data.title}</h1>
          <p className="hotelDesc">{data.desc}</p>
        </div>
        <div className="hotelDetailsPrice">
          <h1>Perfect for a {days}-night stay!</h1>
          <span>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </span>
          <h2>
            <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
          </h2>
          <button onClick={handleClick}>Reserve or Book Now!</button>
        </div>
      </div>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default HotelData;
