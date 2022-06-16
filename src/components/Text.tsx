import Cross from "../assets/cross.png";
import Pencil from "../assets/pencil.png";
import Trash from "../assets/trash.png";
import Design from "../assets/design.png";
import { AiOutlinePlus } from "react-icons/ai";

const Text = () => {
  return (
    <div className="border-dashed border-2 rounded-2xl border-gray-300 mt-6">
      <section className="my-8 mx-8">
        <h1 className="font-extrabold mt-7 text-2xl">Text</h1>
        <p>This is a text area where you can write more about yourself or<br /> business. Tap the edit icon to add your paragraph text in here ✍️. <br />You can also move this up or down, depending on how<br /> you will like your page to look 😍.</p>
      </section>

      {/* buttons */}
      <section className="flex absolute md:-mt-40 -mt-72 md:ml-20 ml-48 mx-1">
        <button className="bg-white shadow-lg text-gray-500 py-4 md:px-7 px-4 border-gray-700 inline-flex rounded-full items-center">
          <img src={Design} alt="" />
          <span className="ml-4 md:block hidden font-semibold">Change theme</span>
        </button>
        <button className="bg-white shadow-lg text-gray-500 py-4 md:px-7 px-4 border-gray-700 inline-flex rounded-full items-center ml-4">
          <AiOutlinePlus />
          <span className="ml-4 md:block hidden font-semibold">Add element</span>
        </button>
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

export default Text;