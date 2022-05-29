import AnimatedPig from "./AnimatedPig/AnimatedPig";

export default function TransactionProgress() {
  return (
    <div className="z-50 bg-white opacity-70 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
      <div className="bg-black opacity-100 animate-bounce rounded-lg py-2 px-4">
        <p className="text-white text-2xl font-bold">Transaction in Progress</p>
      </div>
      <div className="w-1/2">
        <AnimatedPig />
      </div>
    </div>
  );
}
