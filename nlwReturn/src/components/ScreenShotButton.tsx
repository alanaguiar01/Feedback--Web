import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenShotButtonProps{
    onScreenShotTook: (screenShot: string | null) => void
    screenShot: string | null
}


export function ScreenShotButton ({screenShot, onScreenShotTook}: ScreenShotButtonProps){
    const[isTakingScreenShot, setIsTakingScreenShot] = useState(false)


    async function handleTakeScreenshot(){
        setIsTakingScreenShot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        onScreenShotTook(base64image)
        setIsTakingScreenShot(false)
    }
    if(screenShot){
        return (
            <button 
            type="button"
            className="p-1 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => onScreenShotTook(null)}
            style={{
                backgroundImage: `url(${screenShot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 180
            }}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return(
        <button 
        type="button" 
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={handleTakeScreenshot}>
            {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6 tex-zinc"/>}
            
        </button>
    )
}