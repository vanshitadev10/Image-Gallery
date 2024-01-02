import Image from "next/image";
import imagesData, { imageData } from "../../../../dummy-data";

import classes from '@/styles/photo-feed.module.css'

export default function({params}: {
  params: {id: string}
}) {
  const imageId: string = params.id;
  const photo: imageData = imagesData.find(p => 'img'+p.id===imageId)!;

  return <div className={classes.container}>
    <Image src={photo?.src} alt={photo?.name} className={classes['detail-img']} />
    <h1>{photo.name}</h1>
    <h3>({photo.location})</h3>
    <p>{photo.description}</p>
  </div>
}