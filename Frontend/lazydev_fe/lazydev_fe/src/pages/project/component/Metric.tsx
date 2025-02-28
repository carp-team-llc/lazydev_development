export default function MetricsDashboard() {
    const metrics = [
      {
        title: "Active Cases",
        value: "31",
        description: "Measure How Fast...",
      },
      {
        title: "Pending Tasks",
        value: "245",
        description: "Measure How Fast...",
      },
      {
        title: "Upcoming Events",
        value: "17",
        description: "Measure How Fast...",
      },
      {
        title: "New Message",
        value: "12",
        description: "Measure How Fast...",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-[#3e3e3f] p-6 flex flex-col rounded-xl shadow-lg"
          >
            <h3 className="text-gray-300 font-medium mb-4">{metric.title}</h3>
            <div className="text-5xl font-light text-gray-400 mb-2">
              {metric.value}
            </div>
            <div className="text-gray-500 text-sm mb-4">{metric.description}</div>
            <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mt-auto">
              More
            </button>
          </div>
        ))}
      </div>
    );
  }
  