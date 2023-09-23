import { useLoaderData } from "react-router-dom";
import getLocalStore from "../../LocalStore";
import { useEffect, useState } from "react";
import DetailAppliedJob from "../DetailAppliedJob/DetailAppliedJob";

const AppliedJob = () => {
    const allJobs = useLoaderData()
    const localIds = getLocalStore()
    const [jobApplied, setAppliedJob] = useState([])

    useEffect(() => {
        if (localIds.length > 0) {
            const exist = allJobs.filter(job => localIds.includes(job.id))
            setAppliedJob(exist)
        }
    }, [])

    return (
        <div>
            <div>
                <div className="relative">
                    <h1 className="text-2xl font-extrabold text-center bg-[#9873FF0D] pb-16">Applied Job</h1>
                </div>
                <img className="w-[200px] absolute top-[115px]" src='https://i.ibb.co/mHf7V5t/bg1.png' alt="" />
                <img className="w-[200px] absolute top-0 right-[0]" src="https://i.ibb.co/T2LZVzT/bg2.png" alt="" />
            </div>
            <div className="mx-36 my-16">
                {
                    jobApplied.map(job => <DetailAppliedJob key={job.id} jobDetails = {job}></DetailAppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;