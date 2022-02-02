import Link from "next/link";

function MainSection({path, title, icon}) {
    return (
        <Link passHref href={path}>
        <div className="bg-white w-1/3 h-40 rounded-xl text-secondary flex flex-col justify-center items-center p-2 drop-shadow-xl cursor-pointer">
            <img src={icon} alt={title} className="w-2/3 h-2/3"/>
            {title}
        </div>
        </Link>
    );
}

export default MainSection;