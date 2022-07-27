import { useContext, useState } from "react";
import "./header.scss";

import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [destination, setDestination] = useState("");

  const headerListItem = (icon, title) => {
    return (
      <div className={`headerListItem ${title === "Stays" && "active"}`}>
        <FontAwesomeIcon icon={icon} />
        <span>{title}</span>
      </div>
    );
  };

  const optionItem = (type, optionNum) => {
    return (
      <div className="optionItem">
        <span className="optionText">{type}</span>
        <div className="optionCounter">
          <button
            disabled={type === "children" ? optionNum <= 0 : optionNum <= 1}
            className="optionCounterButton"
            onClick={() => handleOption(type, "d")}
          >
            -
          </button>
          <span className="optionCounterNumber">{optionNum}</span>
          <button
            className="optionCounterButton"
            onClick={() => handleOption(type, "i")}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  const handleOption = (type, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: operation === "i" ? options[type] + 1 : options[type] - 1,
      };
    });
  };

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          {headerListItem(faBed, "Stays")}
          {headerListItem(faPlane, "Flights")}
          {headerListItem(faCar, "Car rentals")}
          {headerListItem(faBed, "Attractions")}
          {headerListItem(faTaxi, "Airport taxis")}
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>

            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>

            {!user && (
              <Link to="/login">
                <button className="headerBtn">Sign in</button>
              </Link>
            )}

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />

                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />

                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>

                {openOptions && (
                  <div className="options">
                    {optionItem("adult", options.adult)}
                    {optionItem("children", options.children)}
                    {optionItem("room", options.room)}
                  </div>
                )}

                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
