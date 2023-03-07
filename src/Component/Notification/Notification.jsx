import React from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../../redux/actions/Player";

export default function Notification() {
  const { Notification } = useSelector((state) => state.playerReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getNotification());
  }, []);

  function RemoveNotification(id) {
    let NewNot = Notification?.data.map((n) => {
      console.log(n);
      if (n.id == id) {
        n.isSeen = true;
        return n;
      } else {
        return n;
      }
    });
  }

  console.log(Notification);
  return (
    <div className="px-3 py-8 ">
      <h1 className="text-red-700 text-xl font-bold text-center">
        Notification{" "}
      </h1>
      <div className="px-4 mt-8 max-h-60 overflow-y-scroll flex space-y-3 flex-col items-center">
        {Notification?.data?.length < 1 ? (
          <div className="font-semibold text-gray-600 w-full text-center">
            No Notifications Available
          </div>
        ) : (
          Notification?.data?.map((n) => {
            if (!n.isSeen) {
              return (
                <div
                  key={n?.id}
                  className="py-2 px-8  font-semibold w-3/4 flex items-center justify-between bg-white rounded shadow-2xl text-gray-700 text-sm
            "
                >
                  <div>{n?.msg}</div>
                  <div onClick={(e) => RemoveNotification(n.id)}>
                    <MdCancel className="text-lg text-red-600 cursor-pointer" />
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
}
