import { MailAdapter } from '../adaptors/mail-adapter'
import {FeedbacksRepository} from '../repositories/feedback-repository'

interface SubmitFeedbackUseCaseRequest {
    type: string
    comment: string
    screenshot: string
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,        
    ){}      
    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request

        if(!type){
            throw new Error('type is required')
        }
        if(!comment){
            throw new Error('type is required')
        }
        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Format invalid screenshot')
        }

        await this.feedbackRepository.create({
            type, 
            comment, 
            screenshot
        })
        await this.mailAdapter.sendMail({
            subject: 'Novo feddback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;"`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : ``,
                `</div>`
            ].join('\n')
        })
    }
}