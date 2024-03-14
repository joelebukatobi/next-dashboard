'use client';
// Next
import { useRouter } from 'next/navigation';

// Utils
import { videos } from '@/_utils/videos';

// Components
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { VideoCard } from '@/_components/admin/molecules/VideoCard';

export default function Videos() {
  //
  const router = useRouter();
  //
  return (
    <>
      <header>
        <BreadCrumb name="videos" menu="gallery" />
        <Button onClick={() => router.push(`/admin/gallery/videos/new`)} icon={<CloudArrowUpIcon />}>
          Upload
        </Button>
      </header>

      <div aria-label="body-main">
        <div aria-label="body-row">
          {videos.map(({ id, src, caption, description, slug }) => (
            <VideoCard
              key={id}
              desc={`${description.substring(0, 50)}...`}
              src={src}
              caption={caption}
              onClick={() => router.push(`/admin/gallery/videos/${slug}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
