import React, { useEffect, useState } from "react";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error in fetching user data:", error));
  }, []);

  if (!user) {
    return (
      <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="text-4xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div class="flex justify-center items-center min-h-screen  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  ">
      <div class="bg-white shadow-2xl rounded-lg overflow-hidden w-[600px] h-[300px] flex">
        <div class="flex-shrink-0 h-full w-1/3 flex justify-center items-center bg-gray-200">
          <img src={user.picture.large} alt="Profile Card" class="w-40 h-40 object-cover border border-gray-300 rounded-2xl"
          />
        </div>
        <div class="flex flex-col justify-center p-8 w-2/3">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl font-bold text-gray-800"> {user.name.first} </span>
            <span class="text-2xl font-bold text-gray-800"> {user.name.last} </span>
          </div>
          <div class="mb-4">
            <span class="text-lg text-gray-600"><b>Gender:</b> {user.gender} </span>
          </div>
          <div class="mb-4">
            <span class="text-lg text-gray-600"><b>Phone:</b> {user.phone} </span>
          </div>
          <div>
            <span class="text-lg text-gray-600"><b>Email:</b> {user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;