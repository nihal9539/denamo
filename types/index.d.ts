declare type ProductType={
    id: number,
    title: string,
    img:string[],
    description?:string,
    keyFeatures?:string[]
    Category?:string,
    price:number,
    offerPrice?:number,
    offerPercentage?:number,
    categoryUrl?:string,
    sizes?:string[],
    sizeUnit?:string
}
declare interface CategoryItem {
    id: number;
    name: string;
    img: string;
    category: string;
  }

  declare module 'circletype' {
  class CircleType {
    constructor(element: HTMLElement | null, splitter?: (text: string) => string[]);
    // You can add more methods and properties if needed
  }
  export default CircleType;
}