import { StaticImageData } from "next/image";
import img1 from './public/images/img-1.jpg';
import img2 from './public/images/img-2.jpg';
import img3 from './public/images/img-3.jpg';
import img4 from './public/images/img-4.jpg';
import img5 from './public/images/img-5.jpg';
import img6 from './public/images/img-6.jpg';
import img7 from './public/images/img-7.jpg';
import img8 from './public/images/img-8.jpg';
import img9 from './public/images/img-9.jpg';
import img10 from './public/images/img-10.jpg';
import img11 from './public/images/img-11.jpg';
import img12 from './public/images/img-12.jpg';

export type imageData = {
  id: string,
  name: string,
  src: StaticImageData,
  description: string,
  location: string
}

const imagesData: imageData[] = [
  {
    id: "1",
    name: "Image 1",
    src: img1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi dicta autem ducimus tenetur cumque dolorum illo nobis, provident esse ipsa cum nemo nostrum id quasi amet nihil earum? Nesciunt aliquid itaque est, voluptatem minus pariatur maxime. Blanditiis, rerum tempora!",
    location: 'Sikkim'
  },
  {
    id: "2",
    name: "Image 2",
    src: img2,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi et iusto, eaque alias cum eligendi. Cum, doloremque! Soluta totam eveniet neque iure beatae aliquam officiis, nam harum sunt consequuntur.",
    location: 'Agra'
  },
  {
    id: "3",
    name: "Image 3",
    src: img3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptatum amet necessitatibus! Iure doloribus optio repellendus recusandae quisquam similique pariatur iste sit soluta! Qui accusantium earum soluta nemo minus necessitatibus est rem iure quo sint.",
    location: 'Kerela'
  },
  {
    id: "4",
    name: "Image 4",
    src: img4,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa laudantium non odit mollitia voluptatem! Harum amet, tempore, sapiente repellendus provident veniam vero ipsam non, odit voluptatibus beatae officiis voluptates pariatur ratione?",
    location: 'Jaipur'
  },
  {
    id: "5",
    name: "Image 5",
    src: img5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus in voluptate necessitatibus minima? Atque, sunt unde. Possimus eos labore at explicabo, perspiciatis eaque eveniet soluta ab enim?",
    location: 'Ahmedabad'
  },
  {
    id: "6",
    name: "Image 6",
    src: img6,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi dicta autem ducimus tenetur cumque dolorum illo nobis, provident esse ipsa cum nemo nostrum id quasi amet nihil earum?",
    location: 'Mumbai'
  },
  {
    id: "7",
    name: "Image 7",
    src: img7,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Illum modi dicta autem. Ducimus tenetur, cumque dolorum illo nobis, provident esse ipsa cum nemo nostrum id quasi amet nihil earum? Nesciunt aliquid itaque est!",
    location: 'Delhi'
  },
  {
    id: "8",
    name: "Image 8",
    src: img8,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi dicta autem ducimus tenetur cumque dolorum illo nobis, provident esse ipsa cum nemo nostrum id quasi amet nihil earum? Nesciunt aliquid itaque est, voluptatem minus pariatur maxime.",
    location: 'Goa'
  },
  {
    id: "9",
    name: "Image 9",
    src: img9,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas ut neque veniam hic veritatis quibusdam perspiciatis, voluptate pariatur iste aperiam quam, ipsa recusandae corrupti exercitationem? Iusto odit expedita laboriosam aperiam inventore id. Perferendis, reiciendis.",
    location: 'Pune'
  },
  {
    id: "10",
    name: "Image 10",
    src: img10,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio minus nemo illum corrupti, voluptatum provident magni tempora ea voluptatem explicabo vero suscipit ipsum perferendis sequi. Id odit alias doloribus harum.",
    location: 'Assam'
  },
  {
    id: "11",
    name: "Image 11",
    src: img11,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque possimus sit fuga. Ex hic incidunt consequatur, dolor natus possimus dolorem! Architecto dolore consequuntur ab culpa dolorem sed earum laudantium esse sapiente mollitia? At praesentium eligendi eaque molestias assumenda, vero molestiae quas consectetur!",
    location: 'Puducherry'
  },
  {
    id: "12",
    name: "Image 12",
    src: img12,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quam nesciunt commodi, ad nobis sequi consequuntur. Dolores, itaque? Suscipit consequuntur facere hic quibusdam explicabo temporibus, eius quia nihil, pariatur dolorum incidunt neque error culpa ad.",
    location: 'Sri Lanka'
  },
]

export default imagesData;