import { useState } from "react";
import { useUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";
import PlansList from "../../components/PlansList/PlansList";


export default function Plans() {
  const { setUser } = useUser();  
  const [activeStep, setActiveStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<"self" | "other" | null>(null);
  const { user } = useUser();
  const [errorApi, setErrorApi] = useState("");
  const [planes, setPlanes] = useState<any[]>([]);
  const handleOptionSelect = (option: "self" | "other") => {
    setSelectedOption(option);
    fetchData();
  };
  const navigate = useNavigate();

  function calcularEdad(birthDay: string): number {
    const hoy = new Date();
    const cumple = new Date(birthDay);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
      edad--;
    }
    return edad;
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rimac-front-end-challenge.netlify.app/api/plans.json`
      );
      const jsonResponse = await response.json();
      const edadUsuario = calcularEdad(user.birthDay);
      const planesConRecomendado = jsonResponse.list.map((plan: any) => ({
        ...plan,
        recomendado: edadUsuario <= plan.age
      }));
      setPlanes(planesConRecomendado);
    } catch (err: any) {
      setErrorApi(err.message || "Ocurrió un error con la API");
    }
  };

  const handleButton = (plan:any) => {
    setUser({
     ...user,
      plan,
    });
    setActiveStep(2);
  }

  return (
    <section>
      <div className="d-flex d-md-none align-items-center gap-2 pt-2 px-3 mb-3">
        <button 
          onClick={() => {
            navigate("/");
          }}
          className="step-circle slider-button">
          ‹
        </button>
        <span className="fw-bold small">
          PASO {activeStep} DE 2
        </span>        
        <div className="progress flex-grow-1 step-mobile">
          <div
            onClick={() => setActiveStep(1)}
            className={`step-part ${activeStep >= 1 ? "active" : ""}`}
          ></div>          
          <div
            onClick={() => setActiveStep(2)}
            className={`step-part ${activeStep >= 2 ? "active" : ""}`}
          ></div>
        </div>
      </div>
      <hr className="d-md-none my-0" />
      <ul className="nav nav-tab justify-content-center align-items-center gap-4 py-3 mb-4 d-none d-md-flex">
        <li className="nav-item d-flex align-items-center gap-2">
          <span className={`step-circle ${activeStep === 1 ? "active" : ""}`}>1</span>
          <span
            className={`fw-bold ${activeStep === 1 ? "text-dark" : "text-muted"}`}
            onClick={() => setActiveStep(1)}
            style={{ cursor: "pointer" }}
          >
            Planes y coberturas
          </span>
        </li>
        <li className="text-muted">···</li>
        <li className="nav-item d-flex align-items-center gap-2">
          <span className={`step-circle ${activeStep === 2 ? "active" : ""}`}>2</span>
          <span
            className={`fw-bold ${activeStep === 2 ? "text-dark" : "text-muted"}`}
            onClick={() => setActiveStep(2)}
            style={{ cursor: "pointer" }}
          >
            Resumen
          </span>
        </li>
      </ul>
      <div className="container">      
        <button 
          onClick={() => {
            navigate("/");
          }}
          className="btn-back d-none d-md-flex align-items-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" transform="rotate(90 10 10)" stroke="#4F4FFF" strokeWidth="2"/>
          <path d="M7.55317 10L10.8094 6.74689L11.6907 7.62814L9.32192 10L11.6907 12.3719L10.8094 13.2531L7.55317 10Z" fill="#4F4FFF"/>
          </svg>
          Volver
        </button>
        <div
          className={`tab-content py-5 ${
            activeStep === 1 ? "d-flex flex-column justify-content-center align-items-center" : ""
          }`}
        >
          {activeStep === 1 && (
            <div className="tab-pane active text-center" style={{ maxWidth: "900px", width: "100%" }}>
              <h2>{user?.name}, ¿Para quién deseas cotizar?</h2>
              <span>Selecciona la opción que se ajuste más a tus necesidades.</span>

              <div className="row row-cols-1 row-cols-md-2 mb-3 mt-4 justify-content-center">
                <div className="col d-flex justify-content-md-end justify-content-center align-items-md-end align-items-center">
                  <div
                    className={`card plan-card rounded-3 shadow-sm option-card ${
                      selectedOption === "self" ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect("self")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body position-relative">
                      <span
                        className={`status-icon ${
                          selectedOption === "self" ? "checked" : "unchecked"
                        }`}
                      ></span>
                      <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M44.9381 14.3212C45.0742 13.6316 44.9807 12.9163 44.6719 12.2849C44.3631 11.6534 43.856 11.1404 43.2281 10.8244L25.4344 1.92747C24.9885 1.7064 24.4976 1.59137 24 1.59137C23.5023 1.59137 23.0114 1.7064 22.5656 1.92747L4.77186 10.8244C4.14397 11.1404 3.63687 11.6534 3.32807 12.2849C3.01927 12.9163 2.92576 13.6316 3.06186 14.3212L5.55373 26.7768C6.57803 31.903 9.47851 36.4623 13.6875 39.5625L14.4581 40.125C14.5044 38.9928 14.687 37.8703 15.0019 36.7819C11.6439 34.1325 9.33989 30.3733 8.5031 26.1787L5.99998 13.7325C5.99177 13.6881 5.9981 13.6422 6.01803 13.6017C6.03796 13.5611 6.07043 13.5281 6.11061 13.5075L23.9044 4.6106C23.9336 4.59648 23.9656 4.58915 23.9981 4.58915C24.0306 4.58915 24.0626 4.59648 24.0919 4.6106L41.8856 13.5C41.9258 13.5206 41.9583 13.5536 41.9782 13.5942C41.9981 13.6347 42.0044 13.6806 41.9962 13.725L39.5044 26.1825C39.2104 27.6475 38.7355 29.0703 38.0906 30.4181C38.8844 31.1578 39.5897 31.9871 40.1925 32.8894C41.2565 30.9789 42.0157 28.9141 42.4425 26.7694L44.9381 14.3212Z" fill="url(#paint0_linear_12_156287)"/> <path d="M34.2994 30.2025L31.3687 28.5844C32.3166 28.0684 33.1078 27.3063 33.6588 26.3784C34.2099 25.4504 34.5005 24.3911 34.5 23.3119V20.9381C34.5 19.3468 33.8679 17.8207 32.7426 16.6955C31.6174 15.5703 30.0913 14.9381 28.5 14.9381C26.9087 14.9381 25.3826 15.5703 24.2574 16.6955C23.1321 17.8207 22.5 19.3468 22.5 20.9381V23.3119C22.4995 24.3911 22.7901 25.4504 23.3412 26.3784C23.8922 27.3063 24.6834 28.0684 25.6313 28.5844L22.7006 30.2025C20.8231 31.2389 19.2577 32.7596 18.1672 34.6062C17.0767 36.4528 16.501 38.5579 16.5 40.7025V43.5C16.5 43.8978 16.658 44.2793 16.9393 44.5606C17.2206 44.842 17.6022 45 18 45H39C39.3978 45 39.7794 44.842 40.0607 44.5606C40.342 44.2793 40.5 43.8978 40.5 43.5V40.7081C40.5 38.5626 39.9248 36.4563 38.8342 34.6086C37.7437 32.7609 36.1777 31.2394 34.2994 30.2025Z" fill="url(#paint1_linear_12_156287)"/> <defs> <linearGradient id="paint0_linear_12_156287" x1="3.00098" y1="1.59137" x2="22.4619" y2="49.3152" gradientUnits="userSpaceOnUse"> <stop offset="0.272135" stopColor="#34263B"/> <stop offset="0.658079" stopColor="#13172C"/> </linearGradient> <linearGradient id="paint1_linear_12_156287" x1="17.1279" y1="17.2974" x2="41.2816" y2="36.5807" gradientUnits="userSpaceOnUse"> <stop offset="0.35" stopColor="#F7052D"/> <stop offset="0.85" stopColor="#CA5AFA"/> </linearGradient> </defs> </svg>
                        <h5 className="fw-bold">Para mí</h5>
                        <span className="text-muted">
                          Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col d-flex justify-content-md-start justify-content-center align-items-md-start align-items-center">
                  <div
                    className={`card plan-card rounded-3 shadow-sm option-card ${
                      selectedOption === "other" ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect("other")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body position-relative">
                      <span
                        className={`status-icon ${
                          selectedOption === "other" ? "checked" : "unchecked"
                        }`}
                      ></span>

                      <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M43.2281 10.8244L25.4344 1.92754C24.9885 1.70646 24.4976 1.59143 24 1.59143C23.5023 1.59143 23.0114 1.70646 22.5656 1.92754L4.77186 10.8244C4.14397 11.1405 3.63687 11.6534 3.32807 12.2849C3.01927 12.9164 2.92576 13.6316 3.06186 14.3213L5.55373 26.7769C6.57803 31.903 9.47851 36.4624 13.6875 39.5625L22.1025 45.7782C22.6529 46.1884 23.321 46.41 24.0075 46.41C24.694 46.41 25.3621 46.1884 25.9125 45.7782L26.9756 44.9925C26.2684 44.283 25.6472 43.4925 25.125 42.6375L24.1312 43.3707C24.0961 43.3971 24.0533 43.4114 24.0094 43.4114C23.9654 43.4114 23.9226 43.3971 23.8875 43.3707L15.4725 37.155C14.7979 36.6563 14.1583 36.1119 13.5581 35.5257C13.8205 33.9483 14.4363 32.4508 15.3595 31.1451C16.2826 29.8395 17.4891 28.7596 18.8887 27.9863L21 26.8125C22.1415 27.3107 23.3891 27.5168 24.6301 27.4122C25.8712 27.3075 27.0667 26.8954 28.1086 26.2131C29.1506 25.5308 30.0062 24.5998 30.5983 23.5041C31.1904 22.4083 31.5003 21.1824 31.5 19.9369V17.5632C31.5 15.574 30.7098 13.6664 29.3033 12.2599C27.8968 10.8533 25.9891 10.0632 24 10.0632C22.0109 10.0632 20.1032 10.8533 18.6967 12.2599C17.2902 13.6664 16.5 15.574 16.5 17.5632V19.9369C16.4991 21.7456 17.1547 23.4932 18.345 24.855L17.4375 25.3594C14.5371 26.962 12.3216 29.5682 11.2069 32.6888C9.88671 30.7216 8.9679 28.5131 8.50311 26.19L5.99998 13.7325C5.99177 13.6881 5.9981 13.6422 6.01803 13.6017C6.03796 13.5612 6.07042 13.5282 6.11061 13.5075L23.9044 4.61066C23.9336 4.59654 23.9656 4.58921 23.9981 4.58921C24.0306 4.58921 24.0626 4.59654 24.0919 4.61066L41.8856 13.5C41.9258 13.5207 41.9583 13.5537 41.9782 13.5942C41.9981 13.6347 42.0044 13.6806 41.9962 13.725L39.9656 23.8725C40.9484 24.1936 41.888 24.6344 42.7631 25.185L44.9381 14.31C45.0715 13.6221 44.9767 12.9094 44.6681 12.2802C44.3594 11.6511 43.8538 11.1399 43.2281 10.8244ZM19.5 17.5632C19.5 16.3697 19.9741 15.2251 20.818 14.3812C21.6619 13.5373 22.8065 13.0632 24 13.0632C25.1935 13.0632 26.3381 13.5373 27.182 14.3812C28.0259 15.2251 28.5 16.3697 28.5 17.5632V19.9369C28.5 21.1304 28.0259 22.275 27.182 23.1189C26.3381 23.9628 25.1935 24.4369 24 24.4369C22.8065 24.4369 21.6619 23.9628 20.818 23.1189C19.9741 22.275 19.5 21.1304 19.5 19.9369V17.5632Z" fill="url(#paint0_linear_12_156295)"/> <path d="M43.425 28.575C41.9565 27.1067 40.0856 26.1067 38.0488 25.7017C36.012 25.2966 33.9009 25.5046 31.9823 26.2994C30.0637 27.0941 28.4239 28.4399 27.2702 30.1666C26.1165 31.8933 25.5007 33.9233 25.5007 36C25.5007 38.0767 26.1165 40.1067 27.2702 41.8334C28.4239 43.5601 30.0637 44.9059 31.9823 45.7006C33.9009 46.4954 36.012 46.7034 38.0488 46.2983C40.0856 45.8933 41.9565 44.8933 43.425 43.425C44.4001 42.45 45.1736 41.2924 45.7014 40.0184C46.2291 38.7444 46.5007 37.379 46.5007 36C46.5007 34.621 46.2291 33.2556 45.7014 31.9816C45.1736 30.7076 44.4001 29.55 43.425 28.575ZM42 37.5H37.5V42H34.5V37.5H30V34.5H34.5V30H37.5V34.5H42V37.5Z" fill="url(#paint1_linear_12_156295)"/> <defs> <linearGradient id="paint0_linear_12_156295" x1="3.00098" y1="1.59143" x2="28.0678" y2="54.4398" gradientUnits="userSpaceOnUse"> <stop offset="0.272135" stopColor="#34263B"/> <stop offset="0.658079" stopColor="#13172C"/> </linearGradient> <linearGradient id="paint1_linear_12_156295" x1="26.0501" y1="27.1481" x2="43.3526" y2="44.4506" gradientUnits="userSpaceOnUse"> <stop offset="0.35" stopColor="#F7052D"/> <stop offset="0.85" stopColor="#CA5AFA"/> </linearGradient> </defs> </svg>
                        <h5 className="fw-bold">Para alguien más</h5>
                        <span className="text-muted">
                          Realiza una cotización para uno de tus familiares o cualquier otra persona.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedOption && (
                <>
                  <div className="d-none d-md-block">
                    <div className="row row-cols-1 row-cols-md-3 g-2 mt-4 justify-content-center">
                        {planes.map((plan:any) => 
                          <div className="col d-flex mb-4" key={plan.id}>
                            <div className="card list-plans mb-2 rounded-3 shadow-sm h-100 w-100 d-flex flex-column">
                              <div className="card-header py-3 d-flex align-items-center">
                                <div>
                                  {plan.recomendado && (
                                    <div className="py-3">
                                      <span className="tag-promo fw-bold">Plan Recomendado</span>
                                    </div>                                    
                                  )}
                                  <h5 className="card-title pricing-card-title my-0 fw-bold">
                                    {plan.name}
                                  </h5>
                                  <span className="text-muted">COSTO DEL PLAN</span>
                                  <br />
                                  <span>${plan.price} al mes</span>
                                </div>
                                <div className="ms-auto">
                                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z" fill="url(#paint0_linear_12_156416)"/>
                                  <path d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z" fill="url(#paint1_linear_12_156416)"/>
                                  <defs>
                                  <linearGradient id="paint0_linear_12_156416" x1="40.6163" y1="29.9261" x2="58.0062" y2="39.8646" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.35" stopColor="#F7052D"/>
                                  <stop offset="0.85" stopColor="#CA5AFA"/>
                                  </linearGradient>
                                  <linearGradient id="paint1_linear_12_156416" x1="1.75" y1="4.36304" x2="26.0494" y2="63.992" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.272135" stopColor="#34263B"/>
                                  <stop offset="0.658079" stopColor="#13172C"/>
                                  </linearGradient>
                                  </defs>
                                  </svg>
                                </div>                                
                              </div>
                              <div className="card-body d-flex flex-column">
                                <ul className="list-unstyled mt-3 mb-4 text-start flex-grow-1">
                                  {plan.description.map((desc: string, i: number) => (
                                    <li key={i}><span className="text-muted">{desc}</span></li>
                                  ))}
                                </ul>
                                <button 
                                  onClick={() => handleButton(plan)}  
                                  type="button" 
                                  className="w-100 btn btn-lg btn-primary"
                                >
                                  Seleccionar Plan
                                </button>
                              </div>
                            </div>
                          </div>
                        )}                
                      </div>
                    </div>
                  <div className="d-md-none">
                    <PlansList planes={planes} handleButton={handleButton} />
                  </div> 
                </>                
              )}
            </div>
          )}

          {activeStep === 2 && (
            <div className="tab-pane active">
              <h2>Resumen del seguro</h2>
              <div className="row row-cols-1 mb-3 mt-4">
                <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header fw-bold py-3">
                      <p>PRECIOS CALCULADOS PARA:</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                      </svg>
                      &nbsp;{user?.name} {user?.lastName}
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>
                          <span className="fw-bold">Responsable de pago</span>
                          <br />
                          <span>{user?.documentType}: {user?.document}</span>
                          <br />
                          <span>Celular: {user?.phone}</span>
                        </li>
                        <li>
                          <span className="fw-bold">Plan elegido</span>
                          <br />
                          <span>{user.plan?.name}</span>
                          <br />
                          <span>Costo del plan: {user.plan?.price} al mes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {errorApi && (
        <div className="alert alert-danger small">{errorApi}</div>
      )}
    </section>    
  );
}
