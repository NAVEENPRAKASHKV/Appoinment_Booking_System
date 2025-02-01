const bookingModel = require("../model/bookingModel");

class BookController {
  generateSlots = () => {
    const slots = [];
    for (let hour = 10; hour < 17; hour++) {
      if (hour === 13) continue;
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour;
      slots.push(`${displayHour}:00 ${period}`);
      slots.push(`${displayHour}:30 ${period}`);
    }
    return slots;
  };

  get_book = async (req, res) => {
    const date = req.query.date || new Date().toISOString().split("T")[0];
    console.log("inside the get book");

    try {
      const appointments = await bookingModel.find({ date });
      const bookedSlots = appointments.map((appointment) => appointment.slot);
      const availableSlots = this.generateSlots().filter(
        (slot) => !bookedSlots.includes(slot)
      );
      res.status(200).json({ slots: availableSlots });
    } catch (error) {
      res.status(500).json({ message: "Error fetching appointments", error });
    }
  };

  bookAppoinment = async (req, res) => {
    const { name, phone, slot, date } = req.body;
    console.log("this is in book appoinmnet");
    try {
      const existingAppointment = await bookingModel.findOne({ date, slot });
      if (existingAppointment) {
        return res.status(400).json({ message: "Slot already booked" });
      }
      const appointment = new bookingModel({ name, phone, slot, date });
      await appointment.save();
      res.status(201).json({ message: "Appointment booked successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error booking appointment", error });
    }
  };
}

module.exports = new BookController();
