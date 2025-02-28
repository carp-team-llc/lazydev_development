import Section from "./Section"
import SpotlightCard from "./SpotlightCard"
import Card from "./Card"

const spotlightData = [
  {
    category: "CLOUD DEVELOPMENT",
    title: "Build up to 39x faster with Docker Build Cloud",
    description:
      "Introducing Docker Build Cloud: A new solution to speed up build times and improve developer productivity",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    category: "AI/ML DEVELOPMENT",
    title: "LLM everywhere: Docker and Hugging Face",
    description: "Set up a local development environment for Hugging Face with Docker",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    category: "SOFTWARE SUPPLY CHAIN",
    title: "Take action on prioritized insights",
    description: "Bridge the gap between development workflows and security needs",
    image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
]

const trendingthismonth = [
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "tensorflow/tensorflow",
    description: "Official Docker images for the machine learning framework TensorFlow (http://tensorflow.org)",
    verified: true,
    stats: { stars: "2.7K", downloads: "50M+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "pytorch/pytorch",
    description: "PyTorch is a deep learning framework that puts Python first.",
    verified: true,
    stats: { stars: "1.3K", downloads: "10M+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "langchain/langchain",
    description: "⚡ Building applications with LLMs through composability ⚡",
    verified: true,
    stats: { stars: "246", downloads: "50K+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "ollama/ollama",
    description: "The easiest way to get up and running with large language models.",
    verified: true,
    stats: { stars: "1.1K", downloads: "10M+" },
  },
]

const trendingData = [
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "homeassistant/amd64-addon-mosquitto",
    description: "",
    stats: { stars: "169", downloads: "5M+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "paketobuildpacks/build",
    description: "",
    verified: true,
    stats: { stars: "45", downloads: "50M+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "vitess/lite",
    description: "A slimmed down version of Vitess containers, with just the Vitess components installed",
    verified: true,
    stats: { stars: "50", downloads: "10M+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "friendica",
    description: "Welcome to the free social web.",
    official: true,
    stats: { stars: "113", downloads: "5M+" },
  },
]

const mostPulledData = [
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "memcached",
    description: "Free & open source, high-performance, distributed memory object caching system.",
    official: true,
    stats: { stars: "2.3K", downloads: "1B+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "nginx",
    description: "Official build of Nginx.",
    official: true,
    stats: { stars: "10K+", downloads: "1B+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "busybox",
    description: "Busybox base image.",
    official: true,
    stats: { stars: "3.4K", downloads: "1B+" },
  },
  {
    icon: "/placeholder.svg?height=32&width=32",
    title: "alpine",
    description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
    official: true,
    stats: { stars: "10K+", downloads: "1B+" },
  },
]
const MachineLearning = [
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "memcached",
      description: "Free & open source, high-performance, distributed memory object caching system.",
      official: true,
      stats: { stars: "2.3K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "nginx",
      description: "Official build of Nginx.",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "busybox",
      description: "Busybox base image.",
      official: true,
      stats: { stars: "3.4K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "alpine",
      description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
  ]
  const Databases_storage = [
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "memcached",
      description: "Free & open source, high-performance, distributed memory object caching system.",
      official: true,
      stats: { stars: "2.3K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "nginx",
      description: "Official build of Nginx.",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "busybox",
      description: "Busybox base image.",
      official: true,
      stats: { stars: "3.4K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "alpine",
      description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
  ]
  const Monitoring_observability = [
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "memcached",
      description: "Free & open source, high-performance, distributed memory object caching system.",
      official: true,
      stats: { stars: "2.3K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "nginx",
      description: "Official build of Nginx.",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "busybox",
      description: "Busybox base image.",
      official: true,
      stats: { stars: "3.4K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "alpine",
      description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
  ]
  const Developer_tools = [
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "memcached",
      description: "Free & open source, high-performance, distributed memory object caching system.",
      official: true,
      stats: { stars: "2.3K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "nginx",
      description: "Official build of Nginx.",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "busybox",
      description: "Busybox base image.",
      official: true,
      stats: { stars: "3.4K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "alpine",
      description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
  ]
  const New_extensions = [
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "memcached",
      description: "Free & open source, high-performance, distributed memory object caching system.",
      official: true,
      stats: { stars: "2.3K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "nginx",
      description: "Official build of Nginx.",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "busybox",
      description: "Busybox base image.",
      official: true,
      stats: { stars: "3.4K", downloads: "1B+" },
    },
    {
      icon: "/placeholder.svg?height=32&width=32",
      title: "alpine",
      description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
      official: true,
      stats: { stars: "10K+", downloads: "1B+" },
    },
  ]
export default function MainContent() {
  return (
    <div className="flex-1 p-6 space-y-8">
      {/* Spotlight */}
      <Section title="Spotlight">
        <div className="grid grid-cols-3 gap-4">
          {spotlightData.map((item, i) => (
            <SpotlightCard key={i} {...item} />
          ))}
        </div>
      </Section>

      <Section title="Trending this Month" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {trendingthismonth.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>

      {/* Trending this week */}
      <Section title="Trending this week" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {trendingData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>

      {/* Most pulled images */}
      <Section title="Most pulled images" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {mostPulledData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>

      <Section title="MachineLearning" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {MachineLearning.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>

      <Section title="Databases_storage" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {Databases_storage.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>
      <Section title="Monitoring_observability" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {Monitoring_observability.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>
      <Section title="Developer_tools" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {Developer_tools.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>
      <Section title="New_extensions" viewAll>
        <div className="grid grid-cols-4 gap-4">
          {New_extensions.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>
    </div>
  )
}

