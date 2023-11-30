import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id={styles.hero} className="d-flex align-items-center">
    <div className="container">
      <h1>Cuidando de Você</h1>
      <h2>O cuidado da saúde na palma da sua mão</h2>
      <a href="#about" className={[styles.btn_get_started, "scrollto"].join(' ')}>Conheça mais</a>
    </div>
  </section>
  )
}