
const CategoryItem = ({ category }) => {
    const { logo, category_name, availability } = category
    return (
        <div className="bg-[#9873FF0D] p-6 rounded-lg">
            <img src={logo} alt="" />
            <h3 className="text-lg font-extrabold">{category_name}</h3>
            <p className="text-[#A3A3A3]">{availability}</p>
        </div>
    );
};

export default CategoryItem;