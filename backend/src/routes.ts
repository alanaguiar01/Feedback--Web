import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-case/submit-feedback-use-case';
import {NodemailerMailAdapter} from './adaptors/nodemailer/nodemailer-mail-adapter'
import { json } from 'stream/consumers';

export const routes = express.Router();



routes.post('/feedbacks', async(req, res) => {

    const {type, comment, screenshot} = req.body

    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUserCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter)

    await submitFeedbackUserCase.execute({
      type,
      comment,
      screenshot
    })
    console.log(screenshot);
    return res.send()
    // return res.send(screenshot)
    // return res.status(201).send()

})
