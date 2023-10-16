import { motion } from "framer-motion";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <motion.main
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ scale: 0 }}
      className="grow p-4  text-center flex flex-col  items-center w-full  "
    >
      {children}
    </motion.main>
  );
}

export default Container;
