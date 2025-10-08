import "./index.css"
import serviceConnect from '../../assets/Images/ServiceConnect.png';

const AuthLogo = () => {
  return (
    <div className="flex flex-col items-center mt-4 w-full">
        <img src={serviceConnect} alt="service-connect-logo" className="w-2/3 md:w-1/2 h-auto mb-4 my-14" />

    </div>
  );
};

export default AuthLogo;