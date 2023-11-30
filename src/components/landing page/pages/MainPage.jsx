import styles from './MainPage.module.css';

import especialidade1 from "../../../assets/img/especialidades/especialidade-1.jpg";
import especialidade2 from "../../../assets/img/especialidades/especialidade-2.jpg";
import especialidade3 from "../../../assets/img/especialidades/especialidade-3.jpg";
import especialidade4 from "../../../assets/img/especialidades/especialidade-4.jpg";
import especialidade5 from "../../../assets/img/especialidades/especialidade-5.jpg";

import app1 from "../../../assets/img/telas-app/1_Login.png";
import app2 from "../../../assets/img/telas-app/2_Cadastro_Paciente.png";
import app31 from "../../../assets/img/telas-app/3.1_Cadastro_Medico.png";
import app32 from "../../../assets/img/telas-app/3.2_Cadastro_Medico.png";
import app4 from "../../../assets/img/telas-app/4_Inicio.png";
import app51 from "../../../assets/img/telas-app/5.1_Agendar_Consulta.png";
import app52 from "../../../assets/img/telas-app/5.2_Agendar_Consulta.png";

export default function Home() {
  return (
    <main id="main">

      {/* <!-- ======= Why Us Section ======= --> */}
      <section id="why_us" className={styles.why_us}>
        <div className="container">

          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className={styles.content}>
                <h3>Por que nos escolher?</h3>
                <p>
                  A Brazilian Health Care fornece aos médicos e pacientes uma solução moderna de teleconsulta, em contrapartida ao modelo tradicional presencial.
                </p>
                <div className="text-center">
                  <a href="#about" className={styles.more_btn}>Saiba mais <i className="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className={[styles.icon_boxes, "d-flex flex-column justify-content-center"].join(' ')}>
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className={[styles.icon_box, "mt-4 mt-xl-0"].join(' ')}>
                      <i className="bx bx-receipt"></i>
                      <h4>Fácil de usar</h4>
                      <p>Interfaces intuitivas e pensadas na praticidade e agilidade ao cliente.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className={[styles.icon_box, "mt-4 mt-xl-0"].join(' ')}>
                      <i className="bx bx-cube-alt"></i>
                      <h4>Excelente base de dados</h4>
                      <p>Nossos serviços em nuvem garantem alta disponibilidade para os sistemas. {/* <!-- na internet e pelo aplicativo. --> */}</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className={[styles.icon_box, "mt-4 mt-xl-0"].join(' ')}>
                      <i className="bx bx-images"></i>
                      <h4>Exames</h4>
                      <p>Agende e visualize seus exames a qualquer hora pelo app na palma da sua mão.</p>
                    </div>
                  </div>
                </div>
              </div>{/* <!-- End .content--> */}
            </div>
          </div>

        </div>
      </section>{/* <!-- End Why Us Section --> */}

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className={styles.about}>
        <div className="container-fluid">

          <div className="row">
            <div className={[styles.video_box, "col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch position-relative"].join(' ')}>

            </div>

            <div
              className={[styles.icon_boxes, "col-xl-7 col-lg-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"].join(' ')}>
              <h3>Uma equipe preparada para te atender</h3>
              <p>
                Nossos médicos são especialistas capacitados para te atender presencialmente ou remotamente. Além disso, nossa equipe de desenvolvimento entrega qualidade e confiança para que você possa utilizar o aplicativo com comodidade.
              </p>

              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="bx bx-fingerprint"></i></div>
                <h4 className={styles.title}><a href="">Segurança e privacidade</a></h4>
                <p className={styles.description}>Nossos serviços em nuvem garantem alta segurança e privacidade dos dados.</p>
              </div>

              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="bx bx-gift"></i></div>
                <h4 className={styles.title}><a href="">Preços acessíveis</a></h4>
                <p className={styles.description}>Possuímos uma variedade de opções que, assim como o Cuidando de Você, cabem no seu bolso.</p>
              </div>

              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="bx bx-atom"></i></div>
                <h4 className={styles.title}><a href="">24/7</a></h4>
                <p className={styles.description}>Nossos sistemas possuem disponibilidade 24 horas por dia, 7 dias por semana.</p>
              </div>

            </div>
          </div>

        </div>
      </section>{/* <!-- End About Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className={styles.services}>
        <div className="container">

          <div className={styles.section_title}>
            <h2>Serviços</h2>
            <p>
              Oferemos diversos tipos de serviços para o cuidado de sua saúde.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="fas fa-heartbeat"></i></div>
                <h4><a href="">Exames</a></h4>
                <p>Veja o resultado de seus exames diretamente pelo aplicativo.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="fas fa-pills"></i></div>
                <h4><a href="">Receitas médicas</a></h4>
                <p>Receba prescrições médicas de forma conveniente através do aplicativo.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="fas fa-hospital-user"></i></div>
                <h4><a href="">Consultas</a></h4>
                <p>Agende consultas com praticidade e agilidade do conforto do seu lar.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="fas fa-headset"></i></div>
                <h4><a href="">Suporte</a></h4>
                <p>Nosso serviço de atendimento está preparado para tirar suas dúvidas e receber sugestões.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="fas fa-lightbulb"></i></div>
                <h4><a href="">Dicas de saúde</a></h4>
                <p>Receba valiosas dicas pelo aplicativo sobre cuidados com a sua saúde pessoal.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className={styles.icon_box}>
                <div className={styles.icon}><i className="fas fa-notes-medical"></i></div>
                <h4><a href="">Funcionalidades</a></h4>
                <p>Explore e aproveite outras funcionalidades existentes no aplicativo.</p>
              </div>
            </div>

          </div>

        </div>
      </section>{/* <!-- End Services Section --> */}

      {/* <!-- ======= Departments Section ======= --> */}
      <section id="departments" className={styles.departments}>
        <div className="container">

          <div className={styles.section_title}>
            <h2>Especialidades médicas</h2>
            <p>
              O Cuidando de Você oferece uma vasta quantidade de médicos com especialidades diversas para atender-lhe sobre o que for necessário. Listamos como exemplo algumas abaixo.
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className={[styles.nav_tabs, "nav flex-column"].join(' ')}>
                <li className="nav-item">
                  <a className={[styles.nav_link, "active show"].join(' ')} data-bs-toggle="tab" href="#tab-1">Cardiologia</a>
                </li>
                <li className="nav-item">
                  <a className={styles.nav_link} data-bs-toggle="tab" href="#tab-2">Neurologia</a>
                </li>
                <li className="nav-item">
                  <a className={styles.nav_link} data-bs-toggle="tab" href="#tab-3">Hepatologia</a>
                </li>
                <li className="nav-item">
                  <a className={styles.nav_link} data-bs-toggle="tab" href="#tab-4">Pediatria</a>
                </li>
                <li className="nav-item">
                  <a className={styles.nav_link} data-bs-toggle="tab" href="#tab-5">Oftalmologia</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                <div className={[styles.tab_pane, "tab-pane active show"].join(' ')} id="tab-1">
                  <div className="row gy-4">
                    <div className={[styles.details, "col-lg-8 order-2 order-lg-1"].join(' ')}>
                      <h3>Cardiologia</h3>
                      <p className="fst-italic">A cardiologia é a especialidade médica dedicada ao estudo e tratamento das doenças do coração.</p>
                      <p>
                        Os cardiologistas lidam com uma variedade de condições cardíacas, desde problemas simples até doenças mais complexas, como doença arterial coronariana, insuficiência cardíaca, arritmias e doenças das válvulas cardíacas. Eles utilizam exames como eletrocardiogramas, ecocardiogramas e testes de esforço para diagnosticar essas condições, podendo recomendar mudanças no estilo de vida, medicamentos ou procedimentos cirúrgicos, conforme necessário. A prevenção, por meio de hábitos saudáveis, também é uma parte crucial da abordagem em cardiologia.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={especialidade1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row gy-4">
                    <div className={[styles.details, "col-lg-8 order-2 order-lg-1"].join(' ')}>
                      <h3>Neurologia</h3>
                      <p className="fst-italic">A neurologia é a especialidade médica voltada para o estudo e tratamento das doenças do sistema nervoso.</p>
                      <p>
                        Os neurologistas lidam com uma ampla gama de condições, incluindo distúrbios neuromusculares, doenças neurodegenerativas, epilepsia, acidentes vasculares cerebrais (AVCs) e dores de cabeça. Utilizando métodos como exames de imagem cerebral, eletroencefalogramas e testes neurológicos, os neurologistas diagnosticam e desenvolvem planos de tratamento personalizados. O cuidado neurológico pode envolver medicamentos, terapias físicas, reabilitação ou cirurgias, dependendo da natureza da condição. Além do tratamento, a neurologia também enfatiza a importância da prevenção e da promoção da saúde cerebral ao longo da vida.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={especialidade2} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row gy-4">
                    <div className={[styles.details, "col-lg-8 order-2 order-lg-1"].join(' ')}>
                      <h3>Hepatologia</h3>
                      <p className="fst-italic">A hepatologia é a especialidade médica focada no estudo e tratamento das doenças relacionadas ao fígado.</p>
                      <p>
                        Os hepatologistas lidam com uma variedade de condições hepáticas, incluindo hepatites, cirrose, doença hepática gordurosa e câncer de fígado. Por meio de exames de imagem, como ultrassonografias e tomografias, juntamente com testes laboratoriais específicos, os hepatologistas diagnosticam e desenvolvem estratégias de tratamento adaptadas a cada paciente. O tratamento pode envolver mudanças no estilo de vida, medicamentos e, em casos mais avançados, transplante de fígado. A prevenção, especialmente no contexto de hepatites virais, é uma parte crucial da hepatologia, buscando evitar complicações sérias e promover a saúde hepática.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={especialidade3} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row gy-4">
                    <div className={[styles.details, "col-lg-8 order-2 order-lg-1"].join(' ')}>
                      <h3>Pediatria</h3>
                      <p className="fst-italic">A pediatria é a especialidade médica dedicada à saúde e ao bem-estar das crianças, abrangendo desde recém-nascidos até a adolescência.</p>
                      <p>
                        Os pediatras lidam com uma ampla gama de cuidados, desde doenças infecciosas comuns até condições crônicas. Utilizando métodos como exames físicos, análises laboratoriais e avaliações de crescimento, buscam oferecer cuidados personalizados para promover tanto a cura imediata quanto a saúde a longo prazo. A prevenção é central, com imunizações, aconselhamento nutricional e monitoramento do desenvolvimento, visando garantir um início de vida saudável e resiliente.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={especialidade4} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row gy-4">
                    <div className={[styles.details, "col-lg-8 order-2 order-lg-1"].join(' ')}>
                      <h3>Oftalmologia</h3>
                      <p className="fst-italic">A oftalmologia é a especialidade médica dedicada ao estudo e tratamento das doenças relacionadas aos olhos.</p>
                      <p>
                      Os oftalmologistas lidam com uma diversidade de questões relacionadas à saúde ocular. Desde problemas refrativos comuns, como miopia e astigmatismo, até condições mais complexas, como glaucoma e degeneração macular, esses profissionais empregam uma variedade de métodos diagnósticos, incluindo exames de visão, testes de pressão ocular e exames de fundo de olho. Para além do tratamento de doenças oculares, a oftalmologia também abrange a correção visual, prescrevendo óculos e lentes de contato quando necessário. A ênfase na prevenção é crucial, com exames regulares visando detectar problemas precocemente e promover a saúde ocular ao longo da vida.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={especialidade5} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>{/* <!-- End Departments Section --> */}

      {/* <!-- ======= Gallery Section ======= --> */}
      <section id="gallery" className={styles.gallery}>
        <div className="container">

          <div className={styles.section_title}>
            <h2>Galeria</h2>
            <p>Abaixo disponibilizamos uma galeria de fotos sobre o nosso aplicativo.</p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row g-0">

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app1} className="galelry-lightbox">
                  <img src={app1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app2} className="galelry-lightbox">
                  <img src={app2} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app31} className="galelry-lightbox">
                  <img src={app31} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app32} className="galelry-lightbox">
                  <img src={app32} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app4} className="galelry-lightbox">
                  <img src={app4} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app51} className="galelry-lightbox">
                  <img src={app51} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className={styles.gallery_item}>
                <a href={app52} className="galelry-lightbox">
                  <img src={app52} alt="" className="img-fluid" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>{/* <!-- End Gallery Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className={styles.contact}>
        <div className="container">

          <div className={styles.section_title}>
            <h2>Contato</h2>
            <p>Possui alguma dúvida ou sugestão de melhoria? Mande uma mensagem para nós!</p>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-4">
              <div className={styles.info}>

                <div className={styles.email}>
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>contato@brazilianhealthcare.com</p>
                </div>

                <div className={styles.phone}>
                  <i className="bi bi-phone"></i>
                  <h4>Número:</h4>
                  <p>+55 (11) 91234-5678</p>
                </div>

              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form action="forms/contact.php" method="post" role="form" className={styles.php_email_form}>
                <div className="row">
                  <div className={[styles.form_group, "col-md-6"].join(' ')}>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" required />
                  </div>
                  <div className={[styles.form_group, "col-md-6 mt-3 mt-md-0"].join(' ')}>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Seu Email" required />
                  </div>
                </div>
                <div className={[styles.form_group, "mt-3"].join(' ')}>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" required />
                </div>
                <div className={[styles.form_group, "mt-3"].join(' ')}>
                  <textarea className="form-control" name="message" rows="5" placeholder="Mensagem" required></textarea>
                </div>
                <div className="my-3">
                  <div className={styles.loading}>Carregando</div>
                  <div className={styles.error_message}>Erro.</div>
                  <div className={styles.sent_message}>Seua mensagem foi enviada. Obrigado!</div>
                </div>
                <div className="text-center"><button type="submit">Enviar mensagem</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>{/* <!-- End Contact Section --> */}

    </main>
  )
}