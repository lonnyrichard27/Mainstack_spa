import Cross from "../assets/cross.png";
import Pencil from "../assets/pencil.png";
import Trash from "../assets/trash.png";
import image_1 from "../assets/image_1.png";
import image_2 from "../assets/image_2.png";


const ImagesSection = () => {
  return (
    <div className="border-dashed border-2 rounded-2xl border-gray-300 mt-6">
      <section className="my-8 mx-8">
        <h1 className="font-extrabold mt-7 text-2xl">Images</h1>
        <section className="flex gap-4 mt-6">
          <img src={image_1} alt="" />
          <img src={image_2} alt="" />
        </section>
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

export default ImagesSection;