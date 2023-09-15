import { PencilSquareIcon } from '@heroicons/react/24/solid';

export const PhotoCard = ({ src, caption, alt, slug }) => {
  return (
    <div class="bg-white p-[.8rem] rounded-[.8rem] shadow-sm border-[.16rem] border-gray-100">
      <div className="w-full h-[16rem] overflow-y-hidden">
        <img src={src} class="w-full h-auto rounded-t-[.4rem]" />
      </div>
      <div class="">
        <h2 class="text-xl font-semibold">{caption}</h2>
        <p class="text-gray-600 flex items-end">
          {alt}
          <a href={`/admin/gallery/photos/${slug}`}>
            <PencilSquareIcon className="h-[1.6rem] w-[1.6rem] hover:fill-blue-600 " />
          </a>
        </p>
      </div>
    </div>
  );
};
