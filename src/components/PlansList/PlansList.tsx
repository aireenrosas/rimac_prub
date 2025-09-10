import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import type { PlanValue } from "../../types/user";
import type SplideInstance from "@splidejs/splide";

interface PlansListProps {
  planes: PlanValue[];
  handleButton: (plan: PlanValue) => void;
}

export default function PlansList({ planes, handleButton }: PlansListProps) {
  const [page, setPage] = useState(1);
  const splideRef = useRef<SplideInstance | null>(null);

  return (
    <div className="w-full max-w-md mx-auto pt-3 m-3">
      <Splide
        options={{
          type: "slide",
          perPage: 1,
          arrows: false,
          pagination: false,
        }}
        onMounted={(splide: SplideInstance) => {
          splideRef.current = splide;
          setPage(splide.index + 1);
        }}
        onMoved={(splide: SplideInstance) => setPage(splide.index + 1)}
        aria-label="Planes médicos"
      >
        {planes.map((plan) => (
          <SplideSlide key={plan.id}>
            <div className="plans-slider">
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
            </div>            
          </SplideSlide>
        ))}
      </Splide>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => splideRef.current?.go("<")}
          className="step-circle slider-button"
          disabled={!splideRef.current}
        >
          ‹
        </button>

        <span className="text-sm text-gray-700">
          {page} / {planes.length}
        </span>

        <button
          onClick={() => splideRef.current?.go(">")}
          className="step-circle slider-button"
          disabled={!splideRef.current}
        >
          ›
        </button>
      </div>
    </div>
  );
}
