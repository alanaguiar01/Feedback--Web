import { CloseButton } from "../../CloseButton";
import Certo from './../../../assets/certo.png'

interface FeedbackSuccessStepProps {
    onFeedbackSuccessRestartRequest: () => void;
}

export function FeedbackSuccessStep ({onFeedbackSuccessRestartRequest}: FeedbackSuccessStepProps){
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={Certo} className="h-12 w-12"/>
            </div>
            <span className="text-xl mt-2">Agradecemos o Feedback</span>
            <button 
            type="button"
            onClick={onFeedbackSuccessRestartRequest}
            className="py-2 px-6 mt-6 bg-zinc-rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                Quero enviar outro    
            </button>
        </>
    )
}