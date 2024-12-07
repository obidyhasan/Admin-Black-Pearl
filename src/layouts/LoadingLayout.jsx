import Lottie from "lottie-react";
import notFound from "../json/AnimationLoading.json";

const LoadingLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col font-interFont">
      <Lottie className="max-w-sm" animationData={notFound} loop={true} />
    </div>
  );
};

export default LoadingLayout;
