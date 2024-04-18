// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from './globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yasmine Subbagh's Portfolio Webpage</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/pvh6npz.css" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
      </Head>

      {/* Navigation bar */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3 mb-5">
        <div className="container-fluid">
          <a className="navbar-brand ps-2" href="#">Yasmine Subbagh</a>
        </div>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <a className="nav-link" href="code.html">Code</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link pe-2" style={{ color: "#c26767" }} href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Personal image */}
      <div className="d-flex justify-content-center pt-5 mt-5">
        <Image
          src="/image/me.jpg"
          alt="Yasmine Subbagh"
          width={180}
          height={180}
          className="rounded-circle img-fluid"
        />
      </div>

      {/* Introduction */}
      <div className="d-flex justify-content-center mb-2">
        <h4 className="justify pt-4">Hi! I'm Yasmine, who loves:</h4>
      </div>

      {/* Things I Like */}
      <div className="d-flex justify-content-around mt-3 pb-5">
        {/* Snowboard */}
        <div className="d-flex">
          <Image
            src="/image/snowboard.JPG"
            alt="Snowboarding"
            width={250}
            height={250}
            className="shadow-2-strong img-fluid"
          />
        </div>
        {/* Food */}
        <div className="d-flex">
          <Image
            src="/image/food.jpg"
            alt="Yummy Food"
            width={250}
            height={250}
            className="shadow-2-strong img-fluid"
          />
        </div>
        {/* Cars */}
        <div class="d-flex">
          <Image
            src="/image/car.jpg"
            alt="93 Red Miata"
            width={250}
            height={250}
            className="shadow-2-strong img-fluid"
          />
        </div>
        {/* Backpacking */}
        <div class="d-flex">
          <Image
            src="/image/adventure.JPG"
            alt="Adventuring"
            width={250}
            height={250}
            className="shadow-2-strong img-fluid"
          />
        </div>
      </div>

      {/* Down arrow */}
      <div className={styles.arrowContainer}>
        <a href="#toscroll">
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
        </a>
      </div>

      {/* Scroll to this part of the screen */}
      <div className="scroll-reveal box bottom">
        {/* Divider */}
        <hr className="mt-4" style={{ height: '7px', width: '80%', borderWidth: '0', color: 'black', backgroundColor: 'black', margin: 'auto' }} />
        {/* Skill Header */}
        <div className="pt-4">
          <h2><span style={{ color: 'darkblue' }}>Skills</span></h2>
        </div>

        {/* Code Images */}
        <div className="d-flex justify-content-around pb-5 pt-4">
          {/* Java */}
          <div>
            <Image
              src="https://zappysys.com/blog/wp-content/uploads/2018/07/Java.png"
              alt="Java"
              width={100}
              height={100}
              className="img-fluid"
            />
          </div>
          {/* JavaScript */}
          <div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt="JavaScript"
              width={100}
              height={100}
              className="img-fluid"
            />
          </div>
          {/* Python */}
          <div>
            <Image
              src="/image/python.png"
              alt="Python"
              width={100}
              height={100}
              className="img-fluid"
            />
          </div>
          {/* HTML */}
          <div>
            <Image
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              alt="HTML"
              width={100}
              height={100}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Second Divider */}
        <hr className="mt-4" style={{ height: '7px', width: '80%', borderWidth: '0', color: 'black', backgroundColor: 'black', margin: 'auto' }} />
        
        {/* Find Me Header */}
        <div className="pt-4 pb-5">
          <h2><span style={{ color: 'darkred' }}>Find Me</span></h2>
        </div>

        {/* Contact Image Links */}
        <div className="d-flex justify-content-around pb-5">
          {/* LinkedIn */}
          <div className="bg-image hover-overlay ripple">
            <a href="https://www.linkedin.com/in/yasmine-subbagh/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                alt="LinkedIn"
                width={125}
                height={125}
                className="rounded-circle img-fluid"
              />
            </a>
          </div>
          {/* GitHub */}
          <div className="bg-image hover-overlay ripple">
            <a href="https://github.com/ysubbagh">
              <Image
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                width={125}
                height={125}
                className="rounded-circle img-fluid"
              />
            </a>
          </div>
          {/* Email */}
          <div className="bg-image hover-overlay ripple">
            <a href="mailto:yasmine@yasminesubbagh.com">
              <Image
                src="https://as1.ftcdn.net/v2/jpg/02/72/83/62/1000_F_272836246_cmncQFPMNn2RqpG8NZF3zG49taIBJdLl.jpg"
                alt="Email"
                width={125}
                height={125}
                className="rounded-circle img-fluid"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <div className="container">
          <small>© 2022 Yasmine Subbagh</small>
        </div>
      </footer>
    </div>
  );
}
