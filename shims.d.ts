declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    div: {
      class: string
    }
    h1: {
      class: string
    }
    span: {
      class: string
      ':style': string
    }
  }
}
