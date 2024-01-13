import resList from "../utils/mockData";
import RestuatantCard from "./RestuatantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restro) => (
          <RestuatantCard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
