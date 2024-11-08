import { motion } from "framer-motion";




const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="flex text-white flex-col w-full items-center mt-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="lg:text-6xl sm:text-5xl font-bold text-center">M. Hassaan Qureshi</h1>
        <p className="text-red-600 lg:text-3xl text-center mt-4">I build things on the internet</p>
      </motion.div>

    

      
     
      
    </div>
  );
};

export default Home;
