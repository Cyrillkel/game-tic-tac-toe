export function ResetButton({ onClick }) {
  return (
    <button
      className="cursor-pointer mt-5 bg-violet-600 px-[10px] py-[5px] text-white rounded-md"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
