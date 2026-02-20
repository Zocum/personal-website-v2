/// <reference types="vite/client" />

declare module "vanilla-tilt" {
  interface TiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
    reverse?: boolean;
    perspective?: number;
    scale?: number;
  }

  export default class VanillaTilt {
    static init(element: HTMLElement, options?: TiltOptions): void;
  }
}
