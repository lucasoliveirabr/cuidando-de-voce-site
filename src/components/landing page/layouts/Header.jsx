import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header id={styles.header} className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className={[styles.logo, "me-auto"].join(' ')}><a href="/">Brazilian Health Care</a></h1>
          {/*<!-- Uncomment below if you prefer to use an image logo -->*/}
          {/*<!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>-->*/}

          <nav id={styles.navbar} className={[styles.navbar, "order-last order-lg-0"].join(' ')}>
            <ul>
              <li><a className="nav-link scrollto active" href="#">Início</a></li>
              <li><a className="nav-link scrollto" href="#about">Sobre</a></li>
              <li><a className="nav-link scrollto" href="#services">Serviços</a></li>
              <li><a className="nav-link scrollto" href="#departments">Especialidades médicas</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Galeria</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contato</a></li>
            </ul>
            {/*<!-- <i className="bi bi-list mobile-nav-toggle"></i> -->*/}
          </nav>{/*<!-- .navbar -->*/}

          <a href="http://localhost:5174/admin/" className={[styles.appointment_btn, "scrollto"].join(' ')}>Entrar</a>

        </div>
      </header>
    </div>
  )
}