import {CloseButton} from '../CloseButton';
import problemaPng from '../../assets/problema.png'
import ideiaPng from '../../assets/ideia.png'
import balaoPensamentoPng from '../../assets/balao-de-pensamento.png'
import { useState } from 'react';
import { FeedbackTypeStep } from './step/FeedbackTypeStep';
import { FeedbackContentStep } from './step/FeedbackContentStep';
import { FeedbackSuccessStep } from './step/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: problemaPng,
            alt: 'Imagem de um exclamacao vermelha'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image:{
            source: ideiaPng,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image:{
            source: balaoPensamentoPng,
            alt: 'Imagem de um pensamentto'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback (){
        setFeedbackType(null)
        setFeedbackSent(false)
    }
    return(            
            <div className="__bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                {feedbackSent? (
                    <FeedbackSuccessStep  onFeedbackSuccessRestartRequest={handleRestartFeedback}/>
                ): (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ): (
                    <FeedbackContentStep 
                        feedbackType = {feedbackType}
                        onFeedbackRestartRequested = {handleRestartFeedback}
                        setFeedbackSent = {() => setFeedbackSent(true)}
                    /> 
                    )}
                    </>
                )}
                <footer className="text-xs text-neutral-400">
                    Feito com amor pelo <a className="underline underline-offset-2" href="https://github.com/alanaguiar01"> Alan</a>
                </footer>
            </div>
    )
}