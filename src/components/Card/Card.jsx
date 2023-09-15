import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
    return (
        <div className="w-[280px] h-[350px]">
            <img src="" alt="" className="w-full rounded-md"/>
            <h2 className='text-[18px] font-semibold'>ss</h2>
            <p></p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon className='text-2xl' icon={faDollarSign} />
                    <p>Price: </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon className='text-2xl' icon={faBookOpen} /> 
                    <p>Credit: hr</p>
                </div>
            </div>
            <button className='w-full bg-[#2F80ED] text-white text-[18px] py-2.5 rounded-md'>Select</button>
        </div>
    );
};

export default Card;