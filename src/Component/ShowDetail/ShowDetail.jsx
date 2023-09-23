import { Link, useLoaderData, useParams } from "react-router-dom";
import getLocalStore from '../../LocalStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowDetail = () => {
    const data = useLoaderData()
    const { showDetail } = useParams()
    const showDetailNum = parseInt(showDetail)
    const matchId = data.find(item => item.id === showDetailNum)

    const { id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = matchId

    const setLocalStore = (id) => {
        const localData = getLocalStore()

        const exist = localData.find(localId => localId === id)
        if (exist) {
            return toast('Already Applied this job. Please try another one.')
        }
        else {
            localData.push(id)
            const setDataStringify = JSON.stringify(localData)
            localStorage.setItem('localItem', setDataStringify)
            return toast('Amazing you are applied this job')
        }
    }

    return (
        <div className="mx-32">
            <div>
                <h1 className="text-center text-2xl font-extrabold my-7">Job Details</h1>
            </div>
            <div className="flex">
                <div className="w-2/3 mr-8">
                    <p className="mb-3 text-[#757575]"><span className="text-lg font-extrabold text-black">Job description: </span>{job_description}</p>
                    <p className="text-[#757575]"><span className="text-lg font-extrabold text-black">Job responsibility: </span>{job_responsibility}</p>
                    <h5 className="text-lg mt-3 text-[#757575]"><span className="text-lg font-extrabold text-black">Educational Requirements: </span> <br />{educational_requirements}</h5>
                    <p className="mt-3 text-[#757575]"><span className="text-lg font-extrabold text-black">Experiences:</span><br />{experiences}</p>
                </div>
                <div className="w-1/3 ">
                    <div className="bg-gradient-to-r from-[#6f82fe1a] to-[#916bfa1a] px-6 py-3 rounded-md">
                        <h3 className="text-xl font-extrabold pb-1">Job Details</h3><hr />
                        <p className="text-black font-bold mt-2">Salary: <span className="text-[#757575]">{salary}</span></p>
                        <p className="text-black font-bold mt-2">Job Title: <span className="text-[#757575]">{job_title}</span></p>

                        <h3 className="text-xl font-extrabold pb-1 mt-6">Contact Information</h3><hr />
                        <p className="text-black font-bold mt-1">Phone: <span className="text-[#757575]">{contact_information.phone}</span></p>
                        <p className="text-black font-bold mt-1">Email: <span className="text-[#757575]">{contact_information.email}</span></p>
                        <p className="text-black font-bold mt-1">Address: <span className="text-[#757575]">{contact_information.address}</span></p>
                    </div>
                    <Link>
                        <button onClick={() => setLocalStore(id)} className="w-full btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-4 text-white">Apply Now</button>
                    </Link>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowDetail;