

interface ArtworkItem {
  id: string
  title: string
  price: number
  currency: string
  image: string
  artist: {
    name: string
    avatar: string
  }
}

export default function ItemCard({ item }: { item: ArtworkItem }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <div className="relative aspect-square">
        <img src={item.image || "/placeholder.svg"} alt={item.title}  />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={item.artist.avatar || "/placeholder.svg"}
              alt={item.artist.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{item.title}</span>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {item.price} {item.currency}
          </span>
          <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">Place a bid</button>
        </div>
      </div>
    </div>
  )
}

