import { useEffect, useState } from "react";
import CategoryItem from "../categoryItem/CategoryItem";

const JobCategory = () => {

    const [categoryItem, setCategoryItem] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategoryItem(data))
    },[])

    return (
        <div className="px-32 py-24">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold mb-3">Job Category List</h1>
                <p className="text-[#757575] text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex gap-5 mt-8 justify-center">
                {
                    categoryItem.map(category => <CategoryItem key={category.id} category={category}></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default JobCategory;