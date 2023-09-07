const RadioButton = ({ valueRadio }) => {
  return (
    <>
      {valueRadio.map((list, index) => (
        <div className="grid space-y-2 mb-2" key={index}>
          <label
            htmlFor={`hs-vertical-radio-in-form-${index}`}
            className="flex items-center justify-between gap-10 p-3 w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 cursor-pointer"
          >
            <div className="flex items-center">
              <img src={list.image} alt="" className="h-fit" />
              <span className="text-sm text-gray-500 ml-3 ">{list.bank}</span>
            </div>
            <input
              type="radio"
              name={`bank-option`}
              className="shrink-0 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 "
              id={`hs-vertical-radio-in-form-${index}`}
            />
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioButton;
