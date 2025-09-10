declare module "@splidejs/react-splide" {
  import * as React from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    hasTrack?: boolean;
    [key: string]: any;
  }

  export class Splide extends React.Component<SplideProps> {}
  export class SplideSlide extends React.Component<{ [key: string]: any }> {}
}
