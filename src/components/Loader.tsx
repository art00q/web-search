import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex flex-wrap justify-between items-start">
      <div className="mx-auto">
        <Oval
          height={ 60 }
          width={ 60 }
          color="#4fa94d"
          wrapperStyle={ {} }
          wrapperClass=""
          visible={ true }
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={ 2 }
          strokeWidthSecondary={ 2 }
        />
      </div>
    </div>
  )
}

export default Loader;
