import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div>
      <div id={styles.topbar} className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className={[styles.contact_info, "d-flex align-items-center"].join(' ')}>
            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">contato@brazilianhealthcare.com</a>
            <i className="bi bi-phone"></i> +55 (11) 91234-5678
          </div>
          <div className={[styles.social_links, "d-none d-lg-flex align-items-center"].join(' ')}>
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}