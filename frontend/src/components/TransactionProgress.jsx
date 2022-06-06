import AnimatedPig from "./AnimatedPig/AnimatedPig";

export default function TransactionProgress() {
  return (
    <>
      <div class="badge badge-ghost animate-bounce text-center text-xs text-white p-2">
        Transaction in Progress
      </div>
      <div className="w-1/2">
        <AnimatedPig />
      </div>
    </>
  );
}
