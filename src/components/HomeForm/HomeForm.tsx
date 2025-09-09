import { useHomeForm } from "../../hooks/useHomeForm"; 
import familyImg from "../../assets/images/family.jpg";

export default function HomeForm() {
  const { register, handleSubmit, errors, onSubmit } = useHomeForm()

  return (
    <div className="home__right">
      <div className="home__mobile">
        <div className="home__mobile__block">
          <div className="home__mobile__left">
            <span className="tag-promo fw-bold">Seguro Salud Flexible</span>
            <h1 className="info__title fw-bold text-dark">
              Creado para ti <br /> y tu familia
            </h1>
          </div>
          <div className="home__mobile__right">
            <img
              src={familyImg}
              alt="Familia feliz"
              className="img-fluid"
            />
          </div>
        </div>
        <h2 className="info__description mt-4">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </h2>
      </div>
      <div className="home__desktop">
        <span className="tag-promo fw-bold">Seguro Salud Flexible</span>
        <div className="info">
          <h1 className="info__title fw-bold text-dark">
            Creado para ti y tu <br /> familia
          </h1>
          <h2 className="info__description">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <div className="mb-3">
          <div className="input-group input-group-lg rounded">
            <select
              {...register("documentType")}
              className="document-type form-select border-end-0 rounded-start bg-white border border-dark"
            >
              <option value="DNI">DNI</option>
              <option value="RUC">RUC</option>
            </select>
            <input
              type="text"
              {...register("document", {
                required: "El documento es obligatorio",
                minLength: { value: 8, message: "Debe tener al menos 8 dígitos" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
              })}
              className={` form-control border-start-0 rounded-end border border-dark ${errors.document ? "is-invalid" : ""}`}
              placeholder="Nro. de documento"
            />
          </div>
          {errors.document && <div className="invalid-feedback d-block mt-1 small">{errors.document.message}</div>}
        </div>
        <div className="mb-4">
          <input
            type="tel"
            {...register("phone", {
              required: "El celular es obligatorio",
              minLength: { value: 9, message: "Debe tener 9 dígitos" },
              maxLength: { value: 9, message: "No debe exceder 9 dígitos" },
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            })}
            className={` form-control form-control-lg rounded border border-dark  ${
              errors.phone ? "is-invalid" : ""
            }`}
            placeholder="Celular"
          />
          {errors.phone && <div className="invalid-feedback mt-1 small">{errors.phone.message}</div>}
        </div>

        <div className="mb-4">
          <div className="form-check mb-2">
            <input
              type="checkbox"
              {...register("privacy", { required: "Debes aceptar la política de privacidad" })}
              className={`form-check-input ${errors.privacy ? "is-invalid" : ""}`}
              id="privacy"
            />
            <label className="form-check-label small text-dark ms-1" htmlFor="privacy">
              Acepto la <strong>Política de Privacidad</strong>
            </label>
            {errors.privacy && <div className="invalid-feedback d-block small mt-1">{errors.privacy.message}</div>}
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              {...register("commercial")}
              className="form-check-input"
              id="commercial"
            />
            <label className="form-check-label small text-dark ms-1" htmlFor="commercial">
              Acepto la <strong>Política de Comunicaciones Comerciales</strong>
            </label>
          </div>

          <div className="mb-3">
            <a href="#" className="text-decoration-underline small fw-medium">
              Aplican Términos y Condiciones
            </a>
          </div>
        </div>

        {/* Botón de envío */}
        <div className="d-grid">
          <button type="submit" className="btn btn-cotizar py-4 py-md-3 rounded-pill border border-5 border-dark">
            Cotiza aquí
          </button>
        </div>
      </form>
    </div>
  )
}
