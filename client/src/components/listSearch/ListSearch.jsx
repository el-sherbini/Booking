import "./listSearch.scss";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const ListSearch = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
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

  return (
    <div className="listSearch">
      <h1 className="lsTitle">Search</h1>

      <div className="lsItem">
        <label>Destination</label>
        <input value={destination} type="text" />
      </div>

      <div className="lsItem">
        <label>Check-in Date</label>
        <span className="lsDate" onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </div>

      <div className="lsItem">
        <label>Options</label>

        <div className="lsOptions">
          {ListOptionItem(
            <code>
              Min price <small>per night</small>
            </code>
          )}

          {ListOptionItem(
            <code>
              Max price <small> per night</small>
            </code>
          )}

          {ListOptionItem("Adult", 1, options.adult)}
          {ListOptionItem("Children", 0, options.children)}
          {ListOptionItem("Room", 1, options.room)}
        </div>
      </div>

      <button>Search</button>
    </div>
  );
};

export default ListSearch;
