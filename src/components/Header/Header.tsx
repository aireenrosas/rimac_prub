import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <header className="header">
      <nav className="container py-2 py-md-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="header__logo">
            <img 
             src={logo} 
             alt="RIMAC" 
             className="img-fluid" />
          </div>
          
          <div className="header__text d-flex flex-column flex-md-row align-items-end align-items-md-center text-end">
            <span className="header__text__description d-none d-md-inline me-md-2">
              ¡Compra por este medio!
            </span>
            <span className="header__text__number">
              <i className="bi bi-telephone-fill me-1"></i>
              (01) 411 6001
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
