import { BsArrowUpRight } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import header from "../assets/header.png";
import user from "../assets/johndoe.png"
import copy from "../assets/copy.png";
import share from "../assets/share.png";

const MainRight = () => {
  return (
    <div>
    <div className="mt-10 ml-16 w-3/4" style={{ border: "6px solid #020409", height: "640px", borderRadius: "20px"}}>
      {/* profile */}
      <div className="rounded px-5 pt-5">
        <img src={header} alt="" />
        <div className="ml-1 -mt-10">
          <img src={user} alt="" />
        </div>

        <section className="truncate mt-8 w-full text-sm text-white rounded-xl py-4 px-3 cursor-pointer flex" style={{ backgroundColor: "#C91C5A"}}>
          <p className="">Link Text</p>
          <span className="ml-3 mt-1">
            <FiLink />
          </span>
          <span className="ml-44">
            <BsArrowUpRight color="white" />
          </span>
        </section>

        <section className="truncate mt-8 text-sm w-full text-white rounded-xl py-4 px-3 cursor-pointer flex" style={{ backgroundColor: "#C91C5A" }}>
          <p className="">Link Text</p>
          <span className="ml-3 mt-1">
            <FiLink />
          </span>
          <span className="ml-44">
            <BsArrowUpRight color="white" />
          </span>
        </section>
      </div>    
    </div>
    <div className="mx-14 rounded-xl flex py-5 mt-24" style={{ backgroundColor: "#E1E4EB"}}>
        <p className="ml-6 font-medium text-base" style={{ color: "#505A73"}}>mainstack.com/marv</p>
        <span className="flex items-end ml-20">
          <img className="-mt-3" src={share} alt="" />
          <img className="ml-5" src={copy} alt="" />
        </span>
      </div>
    </div>
  )
}

export default MainRight;