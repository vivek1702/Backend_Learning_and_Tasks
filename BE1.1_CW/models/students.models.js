import { Schema } from "mongoose"


const StudentSchema = new Schema(
    {
        studentRegistrationNumber: String,
        studentId: String,
        studentName: String,
        fatherGaurdianName: String,
        class: String,
        emergencyContact: Number,
        studentProfileImgUrl: String
    }
)

const Students = mongoose.model("student", StudentSchema)

module.exports = Students