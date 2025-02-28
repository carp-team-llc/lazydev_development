

interface QRCodeProps {
  value: string
}

export function QRCode({ value }: QRCodeProps) {
  return (
    <div className=" ml-28 rounded-lg bg-white p-4 h-72 w-72 ">
      <img
        src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
        alt="QR Code"
        width={200}
        height={200}
        className="h-full w-full"
      />
    </div>
  )
}

