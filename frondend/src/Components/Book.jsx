import React, { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const [date, setDate] = useState(new Date());

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvilableSlots] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // const availableSlots = generateSlots();
  const handleBookAppointment = async () => {
    if (!name || !phone || !selectedSlot) {
      setError("Date, slote ,name and phone number is mandatory");
      setSuccessMessage("");
      return;
    }
    const obj = { name, phone, slot: selectedSlot, date };
    try {
      await axios.post("http://localhost:5000/book", obj);
      setError("");
      setName("");
      setPhone("");
      setSelectedSlot(null);
      setSuccessMessage("successfully submitted");
    } catch (error) {
      setError("Slot already booked or an error occurred");
    }
  };
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/slots?date=${date}`
        );
        console.log(response);
        setAvilableSlots(response.data.slots);
      } catch (error) {
        console.error("Error fetching slots", error);
      }
    };
    fetchAppointments();
  }, [date, selectedSlot]);

  return (
    <div className="w-full h-screen bg-green-100 flex justify-center py-10">
      <div className="bg-green-300 w-auto rounded-lg ">
        <div className=" flex flex-col px-10 justify-center gap-5 ">
          <h4 className="text-center  font-bold text-lg">BOOK YOUR SLOTS</h4>

          <div className=" flex justify-center gap-5  ">
            <label className="font-semibold" htmlFor="date">
              {" "}
              Select the date
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              name="date"
              className="px-2 rounded-md"
              type="date"
            />
          </div>
          {/* slots */}
          <div className=" flex flex-wrap w-[400px] gap-4 justify-center">
            {availableSlots.map((slot) => {
              return (
                <div
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={` cursor-pointer px-2 py-1 bg-white w-24 rounded-md ${
                    selectedSlot === slot ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {slot}
                </div>
              );
            })}
          </div>
          {/* name and number */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-5 ">
              <label className="font-semibold" htmlFor="name">
                Enter your name
              </label>
              <input
                className="rounded-md px-2 py-1"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
            </div>
            <div className="flex justify-between gap-5 ">
              <label className="font-semibold" htmlFor="phone">
                Enter your Number
              </label>
              <input
                className="rounded-md px-2 py-1"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                id="phone"
              />
            </div>
            {/* button */}
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={handleBookAppointment}
              className="bg-blue-600  py-2 px-3 text-white rounded-md"
            >
              sumbit
            </button>
          </div>
          {error && <div className="text-red-600">{error}</div>}
          {successMessage && (
            <div className="text-lime-500-600">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
