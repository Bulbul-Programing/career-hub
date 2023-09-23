import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {
    const {id , logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = featuredJob
    return (
        <div className='p-6 shadow-md rounded-lg'>
            <img className='my-4' src={logo} alt="" />
            <h4 className='text-[#474747] text-xl font-extrabold'>{job_title}</h4>
            <p className='text-[#757575]'>{company_name}</p>
            <div className=' flex gap-2 my-4'>
                <h5 className='text-[#7E90FE] inline-block rounded-lg border border-[#7E90FE] font-extrabold px-3 py-2'>{remote_or_onsite}</h5>
                <h5 className='text-[#7E90FE] inline-block rounded-lg border border-[#7E90FE] font-extrabold px-3 py-2'>{job_type}</h5>
            </div>
            <div className='flex gap-4'>
                <div className='flex gap-1 items-center'>
                    <GrLocation></GrLocation>
                    <p className='text-[#757575]'>{location}</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <AiOutlineDollarCircle></AiOutlineDollarCircle>
                    <p className='text-[#757575]'>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className='bg-gradient-to-r from-[#7E90FE] to-[#7E90FE] px-3 py-2 my-3 rounded-md text-white font-extrabold'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob; <h1> fd</h1>