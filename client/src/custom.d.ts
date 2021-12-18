declare module "metalsmith-plantuml" {
  declare const SVGoutput: string;
  export default (plantuml: string) => SVGoutput;
}
