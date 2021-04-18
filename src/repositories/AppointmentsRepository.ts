import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns'

interface AppointmentCreateDTO {
    provider: string;
    date: Date;
}
class AppointmentRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public findByDate(date: Date): Appointment | null {
        console.log(this.appointments);
        return this.appointments.find((appointment) => isEqual(appointment.date, date)) || null;
    }

    public create({provider, date}: AppointmentCreateDTO): Appointment {
        const appointment = new Appointment({provider, date})
        this.appointments.push(appointment);
        return appointment;
    }

    public listAppointment(): Appointment[] {
        return this.appointments;
    }
}

export default AppointmentRepository;