import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import type { PlanValue } from "../../types/user"

interface PlansListProps {
  planes: PlanValue[];
  handleButton: (plan: PlanValue) => void;
}

export default function PlansList({ planes, handleButton }: PlansListProps) {
  return (
    <div className="mt-4 d-flex justify-content-center">
      <div className="plans-slider">
        <Splide
          options={{
            type: "slide",
            gap: "1rem",
            pagination: true,
            arrows: true,
            perPage: 3,
            focus: "center",
            trimSpace: false,
            width: "100%",
            breakpoints: {
              1200: { perPage: 2, gap: "1rem" },
              768: { perPage: 1, gap: "0.5rem" },
            },
          }}
        >
          {planes.map((plan) => (
            <SplideSlide key={plan.id}>
              <div className="card mb-2 rounded-3 shadow-sm">
                <div className="card-header py-3 text-center">
                  <h1 className="card-title my-0 fw-bold">{plan.name}</h1>
                  <span>COSTO DEL PLAN</span> <br />
                  <span>${plan.price} al mes</span>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4 text-start">
                    {plan.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleButton(plan)}
                    type="button"
                    className="btn btn-primary w-100"
                  >
                    Seleccionar Plan
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
