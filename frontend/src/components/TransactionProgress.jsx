import AnimatedPig from "./AnimatedPig/AnimatedPig";

export default function TransactionProgress() {
  return (
    <>
      <div class="badge badge-ghost animate-bounce text-center text-[8px] text-white p-1">
        Transaction in Progress
      </div>
      <div className="w-1/2">
        <AnimatedPig />
      </div>
    </>
  );
}
