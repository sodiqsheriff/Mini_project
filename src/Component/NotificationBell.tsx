import React, { useState } from 'react';
import { MdOutlineNotificationsActive } from "react-icons/md";
import NotificationItem from './NotificationItem';
import { format } from 'date-fns';

type Notification = {
  id: number;
  message: string;
  timestamp: Date;
};

const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const addNotification = (message: string) => {
    const newNotification: Notification = {
      id: notifications.length,
      message,
      timestamp: new Date()
    };
    setNotifications([...notifications, newNotification]);
  };
 const handleBellClick =()=>{
    setIsDropdownVisible(!isDropdownVisible);
    if(!isDropdownVisible) {
        addNotification("your wallet has been funded")
    }
 }
  return (
    <div className="relative">
      <button
        onClick={handleBellClick}
        className="relative focus:outline-none"
      >
        <MdOutlineNotificationsActive className="w-6 h-6 text-gray-600" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        )}
      </button>
{isDropdownVisible && (
      <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg">
        <div className="py-2 px-5 pt-2 pb-4">
        <h2 className="text-2xl font-medium">Notifications</h2>

          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem 
                key={notification.id} 
                message={notification.message} 
                timestamp={notification.timestamp} 
              />
            ))
          ) : (
            <div className="px-4 py-2 text-gray-700">No notification</div>
          )}
        </div>
      </div>
)}
    </div>
  );
};

export default NotificationBell;
