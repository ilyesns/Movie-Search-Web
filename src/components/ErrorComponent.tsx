import React from "react";

export const ErrorComponent = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="mt-20 flex justify-center items-center ">
      <div
        className="p-4  mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span className="font-medium">{errorMessage}</span> Please reflesh the
        page.
      </div>
    </div>
  );
};
