import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const UserCard = () => {
  // =============== state
  const [allUsers, setAllUsers] = useState([]);

  // =============== firebase
  const db = getDatabase();

  // =============== realtime database
  useEffect(() => {
    const starCountRef = ref(db, 'Allusers');
    onValue(starCountRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setAllUsers(arr);
    });
  }, [db]);

  console.log(allUsers);

  return (
    <div className=" w-[560px] bg-gradient-to-b from-[#C0DFF8] to-[#A5DD9B] p-4 rounded-lg shadow-lg mt-4">
      <h2 className="text-[#00A9FF] font-semibold text-[20px] mb-4 text-center">All Users Friends</h2>
      {/*  map  */}
      {allUsers.map((item, index) => (
        <div key={index} className="flex items-center space-x-8 mb-4">
           {/* Image */}
          <img
            src={item.userPhoto}
            alt="photo"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div className="flex-2">
            {/* Name   */}
            <h3 className="text-[#5C7BE0] font-semibold text-[18px]">{item.userName}</h3>
            <div className="flex space-x-2 mt-2">
              <button className="bg-[#00A9FF] w-[150px] h-[30px] text-[#000] flex justify-center items-center font-semibold px-4 py-2 rounded-md hover:bg-[#4A6ECD] transition-colors duration-300 ease-in-out">
                Add Friends
              </button>
              
              <button className=" bg-[#033FFF] text-[#000] w-[130px] h-[30px] flex justify-center ml-5 items-center font-semibold px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300 ease-in-out">
                Confrim
              </button>
              <button className=" bg-slate-400 text-[#000] w-[130px] h-[30px] flex justify-center ml-5 items-center font-semibold px-4 py-2 rounded-md hover:bg-[#64638F] transition-colors duration-300 ease-in-out">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
