import { Puff } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-200px)]">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
