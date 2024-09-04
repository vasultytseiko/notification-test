import Select from "@/components/Select";
import React, { useState } from "react";
import { X } from "react-feather";
import { intervals } from "../data/intervals";
import { days } from "../data/days";
import SelectTime from "@/components/SelectTime";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { handleSubmit } from "./services";

export default function NotificationsModal() {
  const [interval, setInterval] = useState("Set interval");
  const [day, setDay] = useState("Select day");
  const [time, setTime] = useState("10:00");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailList, setEmailList] = useState("");
  const [relevancyScore, setRelevancyScore] = useState("0");

  const handleSetInterval = (value: string) => {
    setInterval(value);
  };

  const handleSetDay = (value: string) => {
    setDay(value);
  };

  const handleSetTime = (value: string) => {
    setTime(value);
  };

  const handleSetSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const handleSetEmailList = (value: string) => {
    setEmailList(value);
  };

  const handleSetRelevancyScore = (value: string) => {
    setRelevancyScore(value);
  };

  return (
    <div className="bg-gray-500 bg-opacity-50 backdrop-blur-sm h-[100vh] w-[100vw] flex justify-center items-center fixed inset-0 z-50">
      <div className="bg-white px-20 py-10 rounded-lg shadow-xl relative w-[80vw] h-fit pb-20">
        <button className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 focus:outline-none">
          <X />
        </button>
        <div className="flex flex-col space-y-4 mt-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Manage Bid Notifications
          </h2>
          <p className="text-gray-600 font-satoshi-medium">
            Configure your email notification settings for relevant business
            bids.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-7">
          <div className="w-full">
            <div className="font-satoshi-bold text-lg mb-4 text-gray-500">
              Notification interval
            </div>

            <Select
              value={interval}
              setValue={handleSetInterval}
              list={intervals}
            />

            <div className="font-satoshi-bold text-lg mb-4 text-gray-500 mt-4">
              Weekly Notification Day
            </div>

            <Select value={day} setValue={handleSetDay} list={days} />

            <div className="font-satoshi-bold text-lg mb-2 text-gray-500 mt-4">
              Notification Time
            </div>
            <SelectTime time={time} setTime={handleSetTime} />
          </div>

          <div className="w-full">
            <div className="font-satoshi-bold text-lg mb-4 text-gray-500">
              Search Query
            </div>
            <Input
              value={searchQuery}
              setValue={handleSetSearchQuery}
              type="text"
              placeholder=". . ."
            />

            <div className="font-satoshi-bold text-lg mb-4 text-gray-500 mt-4">
              Email List
            </div>

            <TextArea value={emailList} setValue={handleSetEmailList} />

            <div className="font-satoshi-bold text-lg mb-4 text-gray-500 mt-4">
              Relevancy Score
            </div>

            <Input
              value={relevancyScore}
              setValue={handleSetRelevancyScore}
              type="number"
              placeholder="Score"
            />
          </div>
        </div>

        <div className="w-full flex justify-end mt-10">
          <div className="flex gap-[10px] items-center ">
            <button className="text-blue-500 px-5 py-3 text-md bg-white border border-blue-500 font-satoshi rounded-lg hover:bg-blue-500 hover:text-white duration-300">
              Cancel
            </button>
            <button onClick={()=>handleSubmit(emailList, interval, day, time, searchQuery, relevancyScore)} className="text-white px-5 py-3 text-md bg-blue-600 border border-blue-600 font-satoshi rounded-lg hover:bg-blue-700 duration-300">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
