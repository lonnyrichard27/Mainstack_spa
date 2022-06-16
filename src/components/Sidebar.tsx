import Logo from "../assets/logo.png";
import Dashboard from "../assets/dashboard_.png";
import Edit from "../assets/edit.png";
import Shape from "../assets/Shape.png";
import { MdArrowDropDown } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="pt-10 px-8 h-full" style={{ backgroundColor: "#FAFAFA"}}>
      <img src={Logo} alt='logo' />
      <section className="mt-12">
        <span className="flex">
          <img src={Dashboard} alt='logo' />
          <p className="px-3 font-semibold text-gray-600">Dashboard</p>
        </span>

        <span className="flex mt-9">
          <img src={Edit}  alt='logo' />
          <p className="px-3 text-pink-500 font-semibold">Editor</p>
        </span>

        <p className="mt-20 truncate font-semibold text-gray-600">Account Settings</p>
        <p className="mt-8 font-semibold truncate text-gray-600">Suggest a Feature</p>
        <p className="mt-8 font-semibold text-gray-600">Report Bug</p>
      </section>

      <section className="mt-96">
        <section className="flex">
          <img src={Shape} className="object-contain" alt="" />
          <p className="ml-1 text-gray-600 text-sm">Marvellous Joseph</p>
          <MdArrowDropDown />
        </section>
      </section>
    </div>
  )
}

export default Sidebar;