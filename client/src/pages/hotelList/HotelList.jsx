import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, ListSearch, Navbar, SearchItem } from "../../components";
import useFetch from "../../hooks/useFetch";
import "./hotelList.scss";

const HotelList = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, fetchData } = useFetch(
    `hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <ListSearch
            destination={destination}
            setMin={setMin}
            setMax={setMax}
            fetchData={fetchData}
          />
          <div className="listResult">
            {loading ? (
              "loading ..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
