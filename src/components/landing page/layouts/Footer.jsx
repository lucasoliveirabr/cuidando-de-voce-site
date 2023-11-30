import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id={styles.footer} className={styles.footer}>
      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>Cuidando de Você</span></strong>. Todos os direitos reservados.
          </div>
          <div className={styles.credits}>
            {/*<!-- All the links in the footer should remain intact. -->*/}
            {/*<!-- You can delete the links only if you purchased the pro version. -->*/}
            {/*<!-- Licensing information: https://bootstrapmade.com/license/ -->*/}
            {/*<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Cuidando de Você-free-medical-bootstrap-theme/ -->*/}
            Design por <a href="https://bootstrapmade.com/" className="text-decoration-none">BootstrapMade</a>
          </div>
        </div>
        <div className={[styles.social_links, "text-center text-md-right pt-3 pt-md-0"].join(' ')}>
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}