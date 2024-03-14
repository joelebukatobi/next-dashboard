'use client';
// Next
import { useRouter } from 'next/navigation';

// Utils
import { images } from '@/_utils/images';

// Components
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { PhotoCard } from '@/_components/admin/molecules/PhotoCard';

export default function Photos() {
  //
  const router = useRouter();
  //
  return (
    <>
      <header>
        <BreadCrumb name="photos" menu="gallery" />
        <Button onClick={() => router.push(`/admin/gallery/photos/new`)} icon={<CloudArrowUpIcon />}>
          Upload
        </Button>
      </header>

      <div aria-label="body-main">
        <div aria-label="body-row">
          {images.map(({ id, src, caption, description, slug }) => (
            <PhotoCard
              key={id}
              desc={`${description.substring(0, 50)}...`}
              src={src}
              caption={caption}
              onClick={() => router.push(`/admin/gallery/photos/${slug}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
