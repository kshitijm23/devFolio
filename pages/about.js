import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, Twitter, Mail } from "@mui/icons-material";
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
          content="My name is Kshitij Mahajan and I'm a Learning Fullstack Developer"
        ></meta>
      </Head>
      <main>
        <h1>/about</h1>
        <h2>Hello !</h2>
        <p>
        My name is Kshitij Mahajan, and I’m a <a href="https://www.w3schools.com/whatis/whatis_fullstack.asp">Full-Stack Developer</a> with a strong focus on <a href="https://www.geeksforgeeks.org/what-is-frontend-development/">Frontend development</a>.{" "}
        </p>
        <p>
         I’m currently pursuing my Master’s in Computer Science at <a href="https://www.pace.edu/">Pace University (New York)</a>, continuously expanding my expertise in modern web technologies and scalable applications.

I’ve always been passionate about building intuitive and performance-driven web applications.{" "} </p>
<p>
My journey began with C and Java, eventually transitioning into HTML, CSS, JavaScript, and full-stack development. Over time, I honed my skills in React, Next.js, and TypeScript, crafting interactive and optimized user experiences.

Some of my most exciting projects include <a>Smart Recipe Hub</a>, an AI-powered recipe recommendation platform that personalizes meal suggestions, and <a>Hearts & Paws</a>, a pet care platform designed to seamlessly connect pet owners with service providers, improving efficiency by 40%.

Currently, I’m most interested in working with React, Next.js, and TypeScript, focusing on building scalable, responsive, and user-friendly applications.{" "}
        
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
          <a href="https://drive.google.com/file/d/1dG4R-eXR_y8JVVORjpSg5UHH1qqj1-uc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
