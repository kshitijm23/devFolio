import Head from "next/head";
import { motion } from "framer-motion";
import Style from "@styles/index.module.css";
import Background from "@components/Background";
export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
    >
      <Background />

      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Frontend Developer"></meta>
      </Head>
      <main className={Style.home}>
        <h1>Hey, I'm Kshitij!👋</h1>
        <p className={Style.item2}>
          I'm a Masters of Computer Science student at Pace University, New York, learning fullstack, majorly focused on
          Frontend development with React.{" "}
        </p>
        <p className={Style.item2}>
          I'm currently looking for the role as <span> Software Development Engineer</span>
          .{" "}
        </p>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        h1 {
          align-self: center;
        }
      `}</style>
    </motion.div>
  );
}
