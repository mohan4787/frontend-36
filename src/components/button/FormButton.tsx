import { SendOutlined, UndoOutlined } from "@ant-design/icons";

export const CancleButton = ({
  isSubmitting,
  btnTxt = "Cancle",
}: Readonly<{ isSubmitting: boolean; btnTxt?: string }>) => {
  return (
    <>
      <button
        type="reset"
        disabled={isSubmitting}
        className="disabled:bg-red-800/50 disabled:cursor-not-allowed p-2 rounded-md flex w-full items-center justify-center bg-red-800 text-white gap-1 transition hover:cursor-pointer hover:bg-red-900 hover:scale-96"
      >
        <UndoOutlined /> <span>{btnTxt}</span>
      </button>
    </>
  );
};

export const SubmitButton = ({
  isSubmitting,
  btnTxt = "Submit",
}: Readonly<{ isSubmitting: boolean; btnTxt?: string }>) => {
  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        className="disabled:bg-teal-800/50 disabled:cursor-not-allowed p-2 rounded-md flex w-full items-center justify-center bg-teal-800 text-white gap-1 transition hover:cursor-pointer hover:bg-teal-900 hover:scale-96"
      >
        <SendOutlined /> <span>{btnTxt}</span>
      </button>
    </>
  );
};