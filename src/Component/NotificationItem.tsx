import React from 'react';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { format } from 'date-fns';

type NotificationItemProps = {
  message: string;
  timestamp: Date;
};

const NotificationItem: React.FC<NotificationItemProps> = ({ message, timestamp }) => (
  
  <div className=''>
  <div className="flex items-start pt-3 pb-4 border-b border-[#E3E3E3] hover:bg-gray-100">
    <MdOutlineNotificationsActive className="text-4xl bg-[#CFFDEB] p-2 text-[#01976B] mr-3" />
    <div>
      <div className='text-[#434343] text-xs'>{message}</div>
      <div className="text-xs text-gray-500">
        {format(new Date(timestamp), 'MMM dd, yyyy • hh:mm a')}
      </div>
    </div>
  </div>
  </div>
);

export default NotificationItem;
