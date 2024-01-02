import Image from "next/image"
import Link from "next/link"
import imagesData from "../../../dummy-data"

export default function photos() {
  return <div>
    <ul className="grid-style">
      {imagesData.map(image =>
        <li key={image.id}>
          <Link href={`/photos-feed/img${image.id}`}><Image src={image.src} alt={image.name} className="img" /></Link>
        </li>
      )}
    </ul>
  </div>
}