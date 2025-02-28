import { ChevronDown } from "lucide-react"

const categories = [
  {
    title: "Categories",
    items: [
      "API Management",
      "Content Management System",
      "Databases",
      "Databases & Storage",
      "Languages & Frameworks",
      "Integration & Delivery",
      "Internet of Things",
      "Machine Learning & AI",
      "Message Queue",
      "Monitoring",
      "Networking",
      "Operating Systems",
      "Security",
      "Web Servers",
      "Developer Tools",
      "Web Analytics",
    ],
  },
]

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen border-r border-gray-800 p-4 text-gray-400">
      {categories.map((category) => (
        <div key={category.title} className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium text-gray-300">{category.title}</h2>
            <ChevronDown className="w-4 h-4" />
          </div>
          <ul className="space-y-4">
            {category.items.map((item) => (
              <li key={item} className="text-sm hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

