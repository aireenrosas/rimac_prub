import logo from '../../assets/images/logo-white.svg'

export function Footer() {
  return (
    <footer className="footer py-3 py-md-4">
      <div className="container px-3 px-md-4 px-lg-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center text-sm-start">
            <div className="footer__logo">
              <img
                src={logo}
                alt="RIMAC"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-8 col-lg-9">
            <div className="text-center text-sm-end">
              <small>© 2025 RIMAC Seguros y Reseguros.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
