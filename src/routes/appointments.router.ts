import { Request, Response, Router } from 'express';

import appointmentRepository from '../repositories/AppointmentsRepository'
import AppointmentService from '../services/CreateAppointmentService'
import { parseISO } from 'date-fns'


//Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
const appointmentsRouter = Router();
const AppointmentRepository = new appointmentRepository();

appointmentsRouter.get('/', (req: Request, res: Response) => {
  const appointments = AppointmentRepository.listAppointment();
  return res.json(appointments);
})

appointmentsRouter.post('/', (req: Request, res: Response) => {
  try {
    const { provider, date } = req.body;
    const parsedDate = parseISO(date)
    const createAppointment = new AppointmentService(AppointmentRepository);
    createAppointment.execute({ provider, date: parsedDate })
    res.status(201).json('Cadastrado com sucesso');
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
})

export default appointmentsRouter;