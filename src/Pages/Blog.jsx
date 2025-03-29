import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Blog = () => {
  const [sections, setSections] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const dataContainer = async () => {
      try {
        const response = await fetch("/API/Alldata.json");
        const data = await response.json();
        setSections(data.section);
        setBlogs(data.bottom);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    dataContainer();
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="w-full min-h-[50vh] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/09/64/08/69/240_F_964086994_w4BJqMgO2oq6NyY9ud0wNtl8qjnNCifD.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="px-4 flex flex-col h-full w-full justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-semibold mb-2">Latest Repair Services</p>
          <h1 className="text-4xl font-bold text-white">Latest Blog Posts</h1>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 space-y-12">
          {sections.map(({ id, image, title, content, reverse }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: reverse ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={image}
                  alt={title}
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <p className="text-gray-400">{content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fashion Blog Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Fashion Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
                  <p className="text-gray-300 mt-2">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="border-2 text-white text-xl font-bold border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-2 rounded transition">
            Explore Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;

