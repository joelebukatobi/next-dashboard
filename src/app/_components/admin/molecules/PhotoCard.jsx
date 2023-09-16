// Next
import Image from 'next/image';
// Components
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export const PhotoCard = ({ src, caption, desc, onClick }) => {
  //
  return (
    <div aria-label="photo-card" onClick={onClick}>
      <figure>
        <div>
          <Image src={src} width={600} height={400} alt={desc} />
          <ArrowTopRightOnSquareIcon />
        </div>
        <figcaption>
          <p>{caption}</p>
          <p>{desc}</p>
        </figcaption>
      </figure>
    </div>
  );
};
