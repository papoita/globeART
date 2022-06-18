import AnimatedPig from "./AnimatedPig/AnimatedPig";

export default function TransactionProgress() {
  return (
    <>
      <div className="flex w-36 items-end tooltip tooltip-primary" data-tip="Transaction in Progress">
        <div className="loader-dots relative mb-4">
          <div className="absolute rounded-full bg-white w-2 h-2"></div>
          <div className="absolute rounded-full bg-white w-2 h-2"></div>
          <div className="absolute rounded-full bg-white w-2 h-2"></div>
          <div className="absolute rounded-full bg-white w-2 h-2"></div>
        </div>
        <div className="w-24">
          <AnimatedPig />
        </div>
      </div>
    </>
  );
}
