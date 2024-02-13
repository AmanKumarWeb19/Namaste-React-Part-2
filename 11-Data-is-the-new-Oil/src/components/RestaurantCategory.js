const RestaurantCategory = ({ data }) => {
  console.log({ categorydata: data });
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between w-6/12 mx-auto my-4 p-4 shadow-lg rounded-lg">
        <span className="font-bold text-gray-500 text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Accrodion Body */}
    </div>
  );
};
export default RestaurantCategory;
