import React from "react";

export default function DashboardHeader() {
  return (
    <div className="w-full bg-white py-4 px-6 flex items-center justify-between">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold text-indigo-900">Dashboard</h1>

      {/* Search Bar */}
      <div className="relative max-w-md w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          type="text"
          className="bg-gray-100 h-10 pl-10 pr-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-500"
          placeholder="Search here..."
        />
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
          <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
            >
              <path
                fill="blue"
                d="M256 18v29h238V18zm-208 .002l-9.404 19.053l-21.03 3.056l15.217 14.833L29.19 75.89l18.812-9.892l18.807 9.89l-3.593-20.945L78.434 40.11l-21.032-3.055zm80 0l-9.404 19.053l-21.032 3.056l15.217 14.833l-3.59 20.946L128 65.997l18.807 9.89l-3.592-20.945l15.217-14.832l-21.03-3.055zm80 0l-9.404 19.053l-21.032 3.056l15.217 14.833l-3.59 20.946L208 65.997l18.807 9.89l-3.592-20.945l15.217-14.832l-21.03-3.055zm-39.404 54.385L159.19 91.44l-21.028 3.056l15.217 14.832l-3.593 20.945l18.81-9.89l18.807 9.89l-3.59-20.945l15.215-14.832l-21.032-3.057l-9.402-19.053zm-79.998 1.998L79.193 93.44l-21.03 3.056l15.218 14.832l-3.593 20.945l18.81-9.89l18.807 9.89l-3.59-20.945l15.215-14.832L98 93.44zM256 81v30h238V81zM48 130.004l-9.404 19.053l-21.03 3.056l15.217 14.832l-3.592 20.946L48.003 178l18.807 9.89l-3.593-20.945l15.217-14.832l-21.032-3.056zm80 0l-9.404 19.053l-21.032 3.056l15.217 14.832l-3.59 20.946L128 178l18.807 9.89l-3.592-20.945l15.217-14.832l-21.03-3.056zm80 0l-9.404 19.053l-21.032 3.056l15.217 14.832l-3.59 20.946L208 178l18.807 9.89l-3.592-20.945l15.217-14.832l-21.03-3.056zM256 145v30h238v-30zM88.598 186.385l-9.405 19.054l-21.03 3.056l15.218 14.832l-3.593 20.945l18.81-9.89l18.807 9.89l-3.59-20.945l15.215-14.832L98 205.44zm79.998.002l-9.405 19.052l-21.028 3.056l15.217 14.832l-3.593 20.945l18.81-9.89l18.807 9.89l-3.59-20.945l15.215-14.832l-21.032-3.057l-9.402-19.053zM256 209v30h238v-30zM18 273v30h476v-30zm0 64v30h476v-30zm0 64v30h476v-30zm0 64v29h476v-29z"
              />
            </svg>
          </div>
          <span className="mr-1">Eng (US)</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Notifications */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="yellow"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600 bg-yellow-50 rounded-md p-2 hover:text-gray-900 cursor-pointer"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-orange-500 rounded-full w-2.5 h-2.5"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer">
          <div className="  overflow-hidden mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="6" r="4" />
                <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
              </g>
            </svg>
          </div>
          <div>
            <p className="font-medium text-indigo-900">Musfiq</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 text-gray-400"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
