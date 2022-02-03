import CategoryIcon from '@mui/icons-material/Category';
import ScaleIcon from '@mui/icons-material/Scale';
import dayjs from 'dayjs';
import Link from 'next/link';

function Recolte({recolte}) {
    return (
        <Link passHref href={`/recoltes/${recolte._id}`}>
            <div className="w-full flex justify-center mt-4 cursor-pointer max-w-[400px]">
                
                <div className="flex flex-col gap-4 items-center bg-white drop-shadow-xl justify-around rounded-xl p-2">
                    <h2 className='text-brownSemis font-semibold'>{dayjs(recolte.date).format("D-MMM-YYYY")}</h2>
                    <div className='flex items-center space-x-6'>
                        <span className='flex items-center'>
                            <img src="./pictures/carrot.svg" alt={recolte.product}/>
                            <h3>{recolte.product}</h3>
                        </span>
                        <span className='flex items-center'>
                            <CategoryIcon sx={{fontSize:30}}/>
                            <h3>{recolte.quantity !== "" ? recolte.quantity : "--"}</h3>
                        </span>
                        <span className='flex items-center'>
                            <ScaleIcon sx={{fontSize:30}}/>
                            <h3>{recolte.weight !== "" ? recolte.weight : "--"} kg</h3>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Recolte