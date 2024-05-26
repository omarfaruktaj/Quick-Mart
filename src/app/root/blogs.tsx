interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
}
export default function Blogs() {
  const blogPosts: Blog[] = [
    {
      id: 1,
      title: "The Latest Fashion Trends for Summer 2024",
      image:
        "https://img.freepik.com/free-vector/classic-shoes-realistic-composition_1284-65193.jpg?t=st=1716746450~exp=1716750050~hmac=e3b4a2262edfa4e710ac5bebe9548b34ca3d9673856461ed902cda6505e7dc85&w=1380",
      content:
        "Discover the hottest fashion trends for summer 2024. From bold colors to unique patterns, find out what's in style this season.",
    },
    {
      id: 2,
      title: "10 Must-Have Gadgets for Tech Enthusiasts",
      image:
        "https://img.freepik.com/free-vector/wearable-technology-isometric-flowchart_1284-19018.jpg?t=st=1716746409~exp=1716750009~hmac=13041f76f922deb74a1e9996c91627e3066ceb60972d7433c5d90b29ae512797&w=996",
      content:
        "Are you a tech enthusiast? Check out our list of the top 10 must-have gadgets that every tech lover should own.",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Home Decor",
      image:
        "https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?t=st=1716746513~exp=1716750113~hmac=4f9a4b6de14acb1b8d3c5d68647383d0202460ce75b872cf630b6c1dfc0212f3&w=1380",
      content:
        "Transform your home with our ultimate guide to home decor. Learn how to create a stylish and inviting space on any budget.",
    },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-400 mb-8 text-center">
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((blogPost) => (
            <div
              key={blogPost.id}
              className="bg-base-200 p-6 rounded-lg shadow-lg"
            >
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                {blogPost.title}
              </h3>
              <p className="text-gray-500">{blogPost.content}</p>
              <button className="btn btn-link">Read more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
