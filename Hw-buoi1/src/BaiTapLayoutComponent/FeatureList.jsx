import FeatureItem from "./FeatureItem";

function FeatureList() {

  const data = [
    {
      icon: "bi-book",
      title: "Latest Manga Releases",
      desc: "Explore newly released manga volumes from top anime series worldwide.",
    },
  
    {
      icon: "bi-bag",
      title: "Anime Merchandise",
      desc: "Shop official anime products, accessories, posters, and collectibles.",
    },
  
    {
      icon: "bi-joystick",
      title: "Gaming & Anime",
      desc: "Find exciting anime games and exclusive limited edition content.",
    },  

    {
      icon: "bi-stars",
      title: "Premium Figures",
      desc: "Collect beautifully designed anime figures from popular franchises.",
    },
  
    {
      icon: "bi-camera-reels",
      title: "Streaming Updates",
      desc: "Stay updated with the latest anime episodes and movie releases.",
    },
  
    {
      icon: "bi-heart",
      title: "Community Favorites",
      desc: "See what anime fans around the world are loving the most this season.",
    },
  ];

  return (
    <div className="container mb-5">
      <div className="row g-5">

        {data.map((item, index) => {
          return (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          );
        })}

      </div>
    </div>
  );
}

export default FeatureList;