import { motion } from "framer-motion";
import log1 from "../../assets/01.jpg"
import log2 from "../../assets/02.jpg"
import log3 from "../../assets/log.png"
const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center flex justify-center items-center flex-col py-12 w-full min-h-[50vh] bg-[url(https://img.freepik.com/free-photo/top-view-pullovers-with-copy-space_23-2148791076.jpg?uid=R181781845&ga=GA1.1.664505187.1740726988&semt=ais_hybrid)] bg-cover bg-center bg-no-repeat object-cover"
        >
          <h1 className="text-4xl font-bold text-black">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover the story behind our brand and our passion for fashion.
          </p>
        </motion.div>
      </div>

      {/* Brand Story */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center py-10">
        <motion.img
          src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Brand Story"
          className="rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-white">Our Story</h2>
          <p className="text-gray-400 mt-4">
            We started our journey with a mission to redefine fashion, creating
            stylish and sustainable clothing for everyone.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center my-16">
        <h2 className="text-3xl font-semibold text-white">Why Choose Us?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Premium Quality', 'Eco-Friendly Materials', 'Trendy & Comfortable'].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 text-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white">Meet Our Team</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Krishna", role: "Lead Designer", img: log2 },
            { name: "Namu More", role: "Marketing Head", img: log1 },
            { name: "Sakshi More", role: "Creative Director", img: log3 }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 shadow-sm shadow-cyan-200 rounded-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
