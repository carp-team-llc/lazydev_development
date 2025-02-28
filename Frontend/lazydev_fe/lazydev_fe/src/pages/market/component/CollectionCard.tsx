interface Collection {
    id: string;
    name: string;
    image: string;
    itemCount: number;
    curator: {
      avatar: string;
    };
  }
  
  export default function CollectionCard({ collection }: { collection: Collection }) {
    return (
      <div className="overflow-hidden rounded-xl bg-white shadow">
        <div className="relative aspect-[4/3]">
          <img
            src={collection.image || "/placeholder.svg"}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={collection.curator.avatar || "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"}
                alt="Curator"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-medium">{collection.name}</span>
            </div>
            <span className="text-sm text-gray-500">{collection.itemCount} items</span>
          </div>
        </div>
      </div>
    );
  }
  