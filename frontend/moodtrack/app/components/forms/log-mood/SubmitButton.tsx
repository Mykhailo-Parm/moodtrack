export default function SubmitButton({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="flex w-full">
      <div
        className="px-5 py-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out bg-mint-green-700 hover:bg-mint-green-600"
        onClick={onSubmit}
      >
        Submit
      </div>
    </div>
  );
}
