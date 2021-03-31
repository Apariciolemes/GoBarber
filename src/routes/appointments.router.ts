import { Request, Response, Router } from 'express';

import AppointmentRepository from '../repositories/AppointmentsRepository';
import { startOfHour, parseISO } from 'date-fns'

const appointmentsRouter = Router();
const classAppointmentsRepository = new AppointmentRepository();


appointmentsRouter.post('/', (req: Request, res: Response) => {
    const { provider, date } = req.body;
    const parsedDate = startOfHour(parseISO(date))
    if (classAppointmentsRepository.findByDate(parsedDate)) {
        return res.status(400).json({ message: 'This appointment is already booked' });
    }
  return res.json(classAppointmentsRepository.create(provider, parsedDate))
})

export default appointmentsRouter;