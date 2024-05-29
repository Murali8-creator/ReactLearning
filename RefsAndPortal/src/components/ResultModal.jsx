import { forwardRef,useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef( function ResultModal({remainingTime, targetTime, onReset}, ref){
    const dialog = useRef();

    const timeInSeconds = (remainingTime /1000 ).toFixed(2);
    const userLost = timeInSeconds <= 0;
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            } 
        }
    });

    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong></p>
            <p>You Stopped the timer with <strong>{timeInSeconds}</strong> second{timeInSeconds>1?'s':''}</p>
            <form action="" method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;