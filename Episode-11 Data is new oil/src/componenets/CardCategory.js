import ItemList from "../componenets/ItemList";

const CardCategory = ({ data, setShowIndex, showItems }) => {
  const { title, itemCards } = data;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems === true && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default CardCategory;
