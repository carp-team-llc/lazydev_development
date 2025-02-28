export default function Community() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto w-full px-4">
        {/* Nút được căn giữa */}
        <div className="flex justify-center mb-8">
          <button className="bg-[#ffc400] text-black px-6 py-2 rounded-full font-medium hover:bg-[#e6b000] transition-colors">
            Explore Open Source
          </button>
        </div>

        {/* Thẻ chứa nội dung với viền vàng sát hơn */}
        <div className="  text-center border-[3px] border-[#ffc400] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-12">
            A great place to connect and build a community for your project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Community",
                description:
                  "Build a vibrant community around your project with developers eager to contribute.",
                icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
              },
              {
                title: "Platform",
                description:
                  "Easily manage pull requests and bug fixes with our user-friendly interface.",
                icon: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",
              },
              {
                title: "Profit",
                description:
                  "Developers receive token rewards for approved contributions, while project owners benefit from faster growth.",
                icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#ffc400]">
                    <path fill="currentColor" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-[#ffc400] font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm px-4">{item.description}</p>
              </div>
            ))}
          </div>

          <button className="bg-[#ffc400] text-black px-8 py-3 rounded-full font-medium hover:bg-[#e6b000] transition-colors">
            Link your open source
          </button>
        </div>
      </div>
    </section>
  );
}
