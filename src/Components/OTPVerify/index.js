import ConfirmButton from "../ConfirmButton"
import "./index.css"
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "⌫"]


const OTPVerify = () => {
    return (
        <div className='w-full flex justify-center h-fit mt-10 mb-10'>
            <div className='md:w-5/6 flex flex-col justify-around items-center'>
                <p className='text-center my-4'>Code has been Send to ( +1 ) ***-***-*529</p>
                <div className='flex space-x-3 my-4'>
                    <input type="text" maxLength={1} className='md:h-14 md:w-14 w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                    <input type="text" maxLength={1} className='md:h-14 md:w-14 w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                    <input type="text" maxLength={1} className='md:h-14 md:w-14 w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                    <input type="text" maxLength={1} className='md:h-14 md:w-14 w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                </div>
                <p>Resend Code in <span className='font-bold'>59s</span></p>
                <div className='w-full md:w-1/4 flex justify-center my-6'>
                    <ConfirmButton ButtonName="Verify" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-2 max-w-xs md:gap-10">
                    {numbers.map((key) => (
                        <button
                            key={key}
                            className="w-20 h-14 flex items-center justify-center bg-white rounded-lg shadow text-lg font-semibold hover:bg-gray-200 md:w-26 md:h-20 md:auto"
                        >
                            {key}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OTPVerify