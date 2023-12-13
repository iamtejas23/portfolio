import styles from '../styles/Home.module.css';
import Head from 'next/head';
import ContactMe from '../pages/ContactMe';
import ProjectsSection from '../pages/ProjectsSection';
import Navbar from '../pages/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Tejas Mane | Web Developer</title>
        <meta name="title" content="Tejas Mane | Web Developer" />
<meta name="description" content="Hi! I'm Tejas Mane Computer Applications Student And Work As FrontEnd Developer ." />
<meta name="keywords" content="TEJAS MANE, Tejas Mane , Web Developer , iamtejas23 , graphics developer , Tejas " />
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta name="google-site-verification" content="mhsTrlCTe9wO88DwNqzmzGcd0XpK5pi0jgbfO6qJjLk" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdi-font@4.9.95/css/materialdesignicons.min.css" />

      </Head>
      <Navbar />
      <section className={styles.hero}>
      <div className={styles.productImage}>
        <img src="/images/me.jpg" alt="Tejas" />
      </div>
      <div className={styles.content}>
        <h1>Elevating Web Experiences Innovatively</h1>
        <div className={styles.buttons}>
          <a href="/assets/Tejas.pdf" target='blank'>Resume</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
{/* About section */}
<section class="about" id='about'>
        <div class="container">
            <h2>About Me</h2>
            <p>I am a passionate frontend developer with a keen interest in creating beautiful and user-friendly web applications. I have experience in...</p>
        </div>
    </section>

    <section class="projects-git">
    <div class="container">
        <h2>GitHub Projects</h2>

        <div class="projectGrid">
            <div class="projectItem">
                <img src="/images/github.png" alt="Project 1" />
                <h3>Thunder Security</h3>
                <p>React Native app</p>
                <a href="https://github.com/iamtejas23/thunder" target="_blank">GitHub Repo</a>
            </div>

            <div class="projectItem">
                <img src="/images/github.png" alt="Project 2" />
                <h3>Git Generator</h3>
                <p>Git Profile Generator</p>
                <a href="https://github.com/iamtejas23/git-portfolio-generator" target="_blank">GitHub Repo</a>
            </div>

            <div class="projectItem">
                <img src="/images/github.png" alt="Project 3" />
                <h3>Thunder Wallet</h3>
                <p>React Native app</p>
                <a href="https://github.com/iamtejas23/thunder-wallet" target="_blank">GitHub Repo</a>
            </div>
        </div>
    </div>
</section>

{/* End About */}

<div className="nextjs-section">
      <div className="nextjs-card"  >
        <img src="/images/html-5.png" alt="Next.js Icon" />
        <p>HTML</p>
      </div>

      <div className="nextjs-card"  >
        <img src="/images/css-3.png" alt="Next.js Icon" />
        <p>CSS</p>
      </div>

      <div className="nextjs-card"  >
        <img src="/images/js.png" alt="Next.js Icon" />
        <p>JavaScript</p>
      </div>

      <div className="nextjs-card"  >
        <img src="/images/react.png" alt="Next.js Icon" />
        <p>React.js</p>
      </div>

      <div className="nextjs-card"  >
        <img src="/images/next.png" alt="Next.js Icon" />
        <p>Next.js</p>
      </div>

      <style jsx>{`
        .nextjs-section {
          display: flex;
          justify-content: center;
          margin: 20px;
          flex-wrap: wrap;
        }

        .nextjs-card {
          text-align: center;
          margin: 10px;
          padding: 15px;
          border-radius: 8px;
          color: black;
          transition: background-color 0.3s ease;
        }

        .nextjs-card img {
          width: 50px; /* Adjust the size as needed */
          height: 50px; /* Adjust the size as needed */
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .nextjs-section {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>

      <ProjectsSection />
      <div>
      <ContactMe />
      </div>
      
      <footer className={styles.footer}>
        <p>&copy; 2023 Tejas Mane</p>
      </footer>
      <div className={styles.social}>
      <a href="https://www.instagram.com/iamtejas23/" class="social-icon">Instagram</a>
  <a href="https://www.linkedin.com/in/tejas-mane-9621221b4/" class="social-icon">Linkedin</a>
  <a href="https://github.com/iamtejas23" class="social-icon">GitHub</a>
      </div>
    </div>
  );
}

