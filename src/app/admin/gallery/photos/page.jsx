'use client';
// React
import { useState } from 'react';

// Next
import { useRouter } from 'next/navigation';

// React Grid Gallery
// import { Gallery } from 'react-grid-gallery';

// Yet Another React Lightbox
// import Lightbox from 'yet-another-react-lightbox';
// import Captions from 'yet-another-react-lightbox/plugins/captions';
// import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
// import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';
// import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/captions.css';
// import 'yet-another-react-lightbox/plugins/thumbnails.css';

// Utils
import { images } from '@/_utils/images';

// Components
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { PhotoCard } from '@/_components/admin/molecules/PhotoCard';

// const slides = images.map(({ original, width, height }) => ({
//   src: original,
//   width,
//   height,
// }));

export default function Photos() {
  //
  const router = useRouter();
  //
  // const [index, setIndex] = useState(-1);
  //
  // const handleClick = (index) => setIndex(index);
  return (
    <>
      <header>
        <BreadCrumb name="photos" menu="gallery" />
        <Button onClick={() => router.push(`/admin/gallery/photos/new`)} icon={<CloudArrowUpIcon />}>
          Upload
        </Button>
      </header>

      <div aria-label="body-main">
        <div className="grid grid-cols-4 w-full gap-x-[1.6rem] gap-y-[1.6rem] ">
          {images.map(({ id, src, caption, description, slug }) => (
            <PhotoCard key={id} alt={`${description.substring(0, 50)}...`} src={src} caption={caption} slug={slug} />
          ))}
        </div>
      </div>
    </>
  );
}
