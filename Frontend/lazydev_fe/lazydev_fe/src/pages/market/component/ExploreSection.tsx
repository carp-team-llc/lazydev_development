import ItemCard from "../component/ItemCard"

const MOCK_ITEMS = [
  {
    id: "1",
    title: "Defective Authentication",
    price: 0.25,
    currency: "ETH",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    artist: {
      name: "Artist 1",
      avatar: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg  ",
    },
  },
  {
    id: "2",
    title: "Cig Swag",
    price: 0.3,
    currency: "ETH",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    artist: {
      name: "Artist 2",
      avatar: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg  ",
    },
  },
  {
    id: "3",
    title: "Rainbow Style",
    price: 0.15,
    currency: "ETH",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    artist: {
      name: "Artist 3",
      avatar: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg  ",
    },
  },
  {
    id: "4",
    title: "Superswagger Explosions",
    price: 0.5,
    currency: "ETH",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    artist: {
      name: "Artist 4",
      avatar: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg  ",
    },
  },
  {
    id: "5",
    title: "The Truth",
    price: 0.4,
    currency: "ETH",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    artist: {
      name: "Artist 5",
      avatar: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg  ",
    },
  },
]

export default function ExploreSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold">Explore Items</h2>
          <div className="flex gap-4">
            <select className="rounded border bg-white px-3 py-2">
              <option>All categories</option>
              <option>Art</option>
              <option>Music</option>
              <option>Photography</option>
            </select>
            <select className="rounded border bg-white px-3 py-2">
              <option>Buy Now</option>
              <option>On Auction</option>
              <option>New</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {MOCK_ITEMS.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

