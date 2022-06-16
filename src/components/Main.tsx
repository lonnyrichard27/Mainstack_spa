import Shape from "../assets/Shape.png";
import header from "../assets/header.png";
import user from "../assets/johndoe.png"
import arrow from "../assets/arrow_curve.png"
import Link from "./Link";
import Text from "./Text";
import ImagesSection from "./ImagesSection";

const Main = () => {
  return (
    <div>
      {/* mininav */}
      <nav className="flex py-6 border md:justify-around">
        <div className="flex">
          <img src={Shape} className="md:ml-0 ml-3 object-contain" alt="profile" />
          <h3 className="md:ml-5 ml-3 mt-3 font-normal text-sm">mainstack.com/marv</h3>
        </div>
        <div>
        <button className="rounded-full ml-11 bg-pink-700 text-white px-5 py-3">Publish</button>
        </div>
      </nav>
    <div className="md:mx-6 w-5/5 md:w-full ">
      <div className="border-current">
        {/* profile */}
        <div className="px-8 pt-5">
          <img src={header} alt="" />
          <div className="ml-4 md:ml-8 -mt-10">
            <img src={user} alt="" />
            <section className="flex justify-end -mt-10">
              <button className="rounded-full justify-start md:justify-around bg-gray-300 text-gray-600 font-semibold px-5 py-3">Edit profile</button>
            </section>
          </div>

          <h1 className="font-extrabold mt-7 text-2xl md:text-3xl">Marvellous  Joseph</h1>
          <p className="mt-3">Your bio goes here 🎉<br />Click the "Edit Profile" above to tell your audience about yourself and<br /> your incredible works. You can also add social media icons for yourself<br /> or business as well. ❤️️️ </p>
        </div>
      </div>

      {/* second section */}
      <Link />
      <Text />
      <ImagesSection />
      <div className="text-center mt-8">
        <h1 className="font-extrabold mt-7 text-2xl">Add more element </h1>
        <p className="">Tap the + floating button to add more elements such as<br /> mailing list, 
        image carousel, podcasts, <br />videos and more to your page.</p>
        <div className="flex justify-end">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main;