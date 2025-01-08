import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, Twitter, Mail } from "@material-ui/icons/";
export default function Contact() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
    >
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My name is Tejas Bhavsar and I'm a Learning Fullstack Developer"
        ></meta>
      </Head>
      <main>
        <h1>/about</h1>
        <h2>Hello !</h2>
        <p>
          My name is Kshitij Mahajan and I'm a Learning Fullstack Developer (more focused
          towards Frontend development).{" "}
        </p>
        <p>
          I'm a self-taught developer with Degree in Computer Engineering. I've
          always been fascinated by computers and how they work since early age.
          I started my journey with C, later on started working with HTML5, CSS
          & Javascript and got into FullStack Development. Currently I'm most
          interested working with React, Next.js and Typescript.
        </p>

        <p>You can find me on the following platforms:</p>
        <div>
          <a href="https://www.linkedin.com/in/kshitij-mahajan-17814221a/">
            <LinkedIn cursor="pointer" />
          </a>
          <a href="https://github.com/kshitijm23">
            <GitHub cursor="pointer" />
          </a>
          <a href="https://twitter.com/kceee_23">
            <Twitter cursor="pointer" />
          </a>
          <a href="mailto: kshitijmahajan.ngp@gmail.com">
            <Mail cursor="pointer" />
          </a>
        </div>
        <p>
          and if you are interested , you can take a look at my{" "}
          <a href="https://drive.google.com/file/d/1RKaK1kO_2FKfOhFz4Zr6xwFFRjlfXhyG/view?usp=drive_link">
            resume.
          </a>
        </p>
        <p>
          If you would like to know what technologies i have worked with, here's
          the <Link href="/stack">/stack</Link>.
        </p>
        {/* <p>
          Things I use : <Link href="/uses">/uses</Link>.
        </p> */}
      </main>

      <style jsx>{`
        h1 {
          color: var(--color-secondary);
          font-size: 90px;
          padding: 20px 0;
          margin: 0px;
          align-self: center;
        }
        div {
          display: flex;
          justify-content: center;
        }
        div a {
          margin: 0 4px;
        }

        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </motion.div>
  );
}
