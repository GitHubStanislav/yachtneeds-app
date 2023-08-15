const PopupBanner = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="flex flex-wrap bg-orange-600 text-white p-2 flex justify-center items-center">
          <div>
            <p className="text-xs font-bold">
              FREE SHIPPING ON ALL ORDERS. SHOP NOW!
            </p>
          </div>
          <div className="bg-white text-orange-500 p-2 ml-10">
            <p className="text-xs font-bold">FIND OUT MORE 👇</p>
          </div>
          <button
            onClick={onClose}
            className="text-white text-lg font-bold absolute top-2 right-4"
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
};
export default PopupBanner;
