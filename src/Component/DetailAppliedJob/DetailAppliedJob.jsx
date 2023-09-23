import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const DetailAppliedJob = ({ jobDetails }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jobDetails

    return (
        <div>
            <div className='px-6 py-3 mb-5 shadow-md rounded-lg flex items-center'>
                <div>
                    <img className='my-4 mr-7 w-[100px]' src={logo} alt="" />
                </div>
                <div>
                    <h4 className='text-[#474747] text-lg font-extrabold'>{job_title}</h4>
                    <p className='text-[#757575] text-sm'>{company_name}</p>
                    <div className=' flex gap-2 my-2'>
                        <h5 className='text-sm text-[#7E90FE] inline-block rounded-lg border border-[#7E90FE] font-extrabold px-3 py-1'>{remote_or_onsite}</h5>
                        <h5 className='text-sm text-[#7E90FE] inline-block rounded-lg border border-[#7E90FE] font-extrabold px-3 py-1'>{job_type}</h5>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex gap-1 items-center'>
                            <GrLocation></GrLocation>
                            <p className='text-[#757575] text-xs'>{location}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <AiOutlineDollarCircle></AiOutlineDollarCircle>
                            <p className='text-[#757575] text-xs'>{salary}</p>
                        </div>
                    </div>
                    <Link to={`/job/${id}`}><button className='bg-gradient-to-r from-[#7E90FE] to-[#7E90FE] px-3 py-1 my-2 rounded-md text-white font-extrabold'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailAppliedJob;