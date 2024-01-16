import resList from "../utils/mockData";
import RestuatantCard from "./RestuatantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restro) => (
          <RestuatantCard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
