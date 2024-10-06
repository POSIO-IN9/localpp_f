import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PdfInputNotification from "./Pdfinput";

export default function JobPositionAccountPDFInput() {
  const [file, setFile] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    success: true,
    message: "",
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setNotification({
        show: true,
        success: false,
        message: "PDF 파일을 첨부해주세요.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await fetch("http://localhost:8080/api/account/", {
        method: "POST",
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        const result = await response.json();
        const code = result["uniqueId"];
        localStorage.setItem("code", code);
        setNotification({
          show: true,
          success: true,
          message: "성공적으로 파일이 업로드 되었습니다.",
        });
        setTimeout(() => {
          window.location.href = "http://localhost:3000/account/chatbot/";
        }, 2000);
      } else {
        setNotification({
          show: true,
          success: false,
          message: "파일 업로드에 실패했습니다.",
        });
      }
    } catch (error) {
      console.error("업로딩 파일 에러:", error);
      setNotification({
        show: true,
        success: false,
        message: "업로드 중 문제가 발생했습니다.",
      });
    }
  };

  return (
    <>
      <div className="mt- flex items-center justify-center sm:mt-6">
        <form className="m-10" onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="flex flex-col items-center justify-center col-span-full">
                <div className="mt-2 border bg-slate-50 flex justify-center rounded-xl px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-5 flex flex-col items-center justify-center leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-lime-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>직무능력계좌 첨부</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="application/pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>

                    {!file && (
                      <div className="mt-2 text-sm leading-5 text-gray-600">
                        [성함_날짜.pdf]
                        <p className="text-xs">ex) 홍길동_240205.pdf</p>
                        <p className="mt-1">파일명으로 첨부 해주세요</p>
                      </div>
                    )}

                    {file && (
                      <div className="mt-1 text-xs leading-5 text-gray-600">
                        첨부된 파일: {file.name}
                      </div>
                    )}
                    <div className="mt-5 flex items-center justify-center">
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        전송하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {notification.show && (
        <PdfInputNotification
          success={notification.success}
          message={notification.message}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}
    </>
  );
}
