import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../Job-Categori/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <div className='bg-[#9873FF0D] px-32'>
                <Banner></Banner>
            </div>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;