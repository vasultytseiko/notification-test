import NotificationsModal from "@/features/NotificationsModal";
import { useEffect } from "react";
//import cron from 'node-cron';

export default function Home() {
 // useEffect(() => {cron.schedule('* * * * *', ()=>console.log('frefwwffw'))}, [])
  return (
    <div className="h-[100vh] w-[100vw] relative">
      <NotificationsModal />
    </div>
  );
}
