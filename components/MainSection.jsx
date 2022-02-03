import Link from "next/link";

function MainSection({path, title, icon}) {
    return (
        <Link passHref href={path}>
        <div className="bg-white w-2/5 max-w-[250px] h-40 rounded-xl text-secondary flex flex-col justify-center items-center p-2 drop-shadow-xl cursor-pointer">
            {icon}
            <h2 className="text-xl font-medium">{title}</h2>
        </div>
        </Link>
    );
}

export default MainSection;