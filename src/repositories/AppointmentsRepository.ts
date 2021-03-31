import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns'

class AppointmentRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public findByDate(date: Date): Appointment | null {
        return this.appointments.find((appointment) => isEqual(appointment.date, date)) || null;
    }

    public create(provider: string, date: Date | any): Appointment {
        const appointment = new Appointment(provider, date)
        this.appointments.push(appointment);
        console.log(this.appointments);

        return appointment;
    }
}

export default AppointmentRepository;