import React from "react";

const Loader = () => {
  return (
    <div className="mx-auto">
      <div className="border-2 mx-auto m-4 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>

          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700  rounded"></div>
            <div className="h-56 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-10">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
