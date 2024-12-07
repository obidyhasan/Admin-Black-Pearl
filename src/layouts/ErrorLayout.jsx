import Lottie from "lottie-react";
import notFound from "../json/AnimationNotFound.json";
import { Link } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col font-interFont">
      <Lottie className="max-w-2xl" animationData={notFound} loop={true} />
      <h1 className="font-semibold text-3xl my-5 text-center">
        Page Not Found
      </h1>
      <Link to={"/"} className="btn">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorLayout;
