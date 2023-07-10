import styles from '../styles/Home.module.css';
import Head from 'next/head';
import ContactMe from '../pages/ContactMe';
import ProjectsSection from '../pages/ProjectsSection';
import Navbar from '../pages/Navbar';


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
      
      <section id='about' className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>About Me</h2>
            <p>
              I am a passionate web and app developer with expertise in frontend and backend technologies. I love creating innovative and user-friendly solutions.
            </p>
          </div>
          
        </div>
      </section>
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
      </div>
    </div>
  );
}

