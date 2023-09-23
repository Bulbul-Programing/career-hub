import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [showMore, setShowMore] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    const showMoreHandleClick =() => {
        setShowMore(featuredJobs.length)
    }
    
    return (
        <div className="px-32">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold mb-3">Featured Jobs</h1>
                <p className="text-[#757575] text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" grid grid-cols-2 gap-5 mt-8 justify-center">
                {
                    featuredJobs.slice(0,showMore).map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
                }
            </div>
            <div className="flex justify-center my-4">
                <button onClick={showMoreHandleClick} className='bg-gradient-to-r from-[#7E90FE] to-[#7E90FE] px-3 py-2 my-3 rounded-md text-white font-extrabold'>Show More</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;