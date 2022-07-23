import "./slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slideNum, setOpen, setSlideNum, data }) => {
  const handleMove = (direction) => {
    let newSlideNum;

    if (direction === "l") {
      newSlideNum = slideNum === 0 ? 5 : slideNum - 1;
    } else {
      newSlideNum = slideNum === 5 ? 0 : slideNum + 1;
    }

    setSlideNum(newSlideNum);
  };

  return (
    <div className="slider">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        onClick={() => setOpen(false)}
      />
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="arrow"
        onClick={() => handleMove("l")}
      />
      <div className="sliderWrapper">
        <img src={data.photos[slideNum]} alt="" className="sliderImg" />
      </div>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="arrow"
        onClick={() => handleMove("r")}
      />
    </div>
  );
};

export default Slider;
