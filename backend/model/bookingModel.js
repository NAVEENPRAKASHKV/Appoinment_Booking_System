const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    slot: { type: String, required: true },
  },
  { timestamps: true }
);

appointmentSchema.index({ date: 1 });

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
