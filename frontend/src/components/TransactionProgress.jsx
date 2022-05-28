export default function TransactionProgress() {
  return (
    <div className="fixed inset-0 h-full z-50 flex flex-col justify-center items-center">
      <progress class="progress w-56"></progress>
      <p>Transaction in Progress</p>
    </div>
  );
}
