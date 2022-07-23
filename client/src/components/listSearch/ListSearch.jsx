import "./listSearch.scss";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const ListSearch = ({ destination, setMin, setMax, fetchData }) => {
  const [openDate, setOpenDate] = useState(false);

  const location = useLocation();
  const [dates, setDates] = useState(location.state.dates);
  const [options] = useState(location.state.options);

  const ListOptionItem = (content, min, placeholder) => {
    return (
      <div className="lsOptionItem">
        <span className="lsOptionText">{content}</span>
        <input
          type="number"
          min={min}
          className="lsOptionInput"
          placeholder={placeholder}
        />
      </div>
    );
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="listSearch">
      <h1 className="lsTitle">Search</h1>

      <div className="lsItem">
        <label>Destination</label>
        <input defaultValue={destination} type="text" />
      </div>

      <div className="lsItem">
        <label>Check-in Date</label>
        <span className="lsDate" onClick={() => setOpenDate(!openDate)}>
          {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
            dates[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        {openDate && (
          <DateRange
            onChange={(item) => setDates([item.selection])}
            minDate={new Date()}
            ranges={dates}
          />
        )}
      </div>

      <div className="lsItem">
        <label>Options</label>

        <div className="lsOptions">
          <div className="lsOptionItem">
            <span className="lsOptionText">
              Min price <small>per night</small>
            </span>
            <input
              type="number"
              onChange={(e) => setMin(e.target.value)}
              className="lsOptionInput"
            />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionText">
              Max price <small>per night</small>
            </span>
            <input
              type="number"
              onChange={(e) => setMax(e.target.value)}
              className="lsOptionInput"
            />
          </div>

          {ListOptionItem("Adult", 1, options.adult)}
          {ListOptionItem("Children", 0, options.children)}
          {ListOptionItem("Room", 1, options.room)}
        </div>
      </div>

      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default ListSearch;
