// Next
import Image from 'next/image';
// Components
import { ArrowTopRightOnSquareIcon, PlayCircleIcon } from '@heroicons/react/24/solid';

export const VideoCard = ({ src, caption, desc, onClick }) => {
  //
  return (
    <div aria-label="video-card" onClick={onClick}>
      <figure>
        <div>
          <PlayCircleIcon />
          <video width={600} height={400}>
            <source src={`${src}#t=0.1`} />
          </video>
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
