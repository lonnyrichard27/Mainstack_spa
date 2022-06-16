
import Cross from "../assets/cross.png";
import Pencil from "../assets/pencil.png";
import Trash from "../assets/trash.png";
import { FiLink } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import '../App.css';

const Link = () => {
  const styles = {
    linkbutton:{
      backgroundColor: "#C91C5A",
      width: "90%", 
    },
  }
  return (
    <div className="border-dashed border-2 rounded-2xl border-gray-300 mt-6">
      <section className="mx-5 mt-8 text-md truncate text-white rounded-xl py-4 px-5 cursor-pointer flex" style={styles.linkbutton}>
        <p className="">Link Text</p>
        <span className="ml-3 mt-1">
          <FiLink />
        </span>
        <span className="md:ml-72 ml-40">
          <BsArrowUpRight color="white" />
        </span>
      </section>

      <section className="mx-5 truncate mt-8 text-md text-white py-4 px-5 rounded-xl cursor-pointer flex linkbutton" style={styles.linkbutton}>
        <p className="">Link Text</p>
        <span className="ml-3 mt-1">
          <FiLink />
        </span>
        <span className="md:ml-72 ml-40">
          <BsArrowUpRight color="white" />
        </span>
      </section>

      {/* icons */}
      <div className="flex mt-6 justify-center mb-8">
        <span className="h-9 w-9 px-3 py-3 rounded-full bg-gray-300">
          <img src={Cross} className="object-fill" alt="profile" />
        </span>
        <span className="h-9 w-9 px-3 py-3 mx-3 rounded-full bg-gray-300">
          <img src={Trash} className="object-fill" alt="profile" />
        </span>
        <span className="h-9 w-9 px-3 py-3 rounded-full bg-gray-300">
          <img src={Pencil} className="object-fill" alt="profile" />
        </span>
      </div>
    </div>
  )
}

export default Link