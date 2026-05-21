import FeatureItem from "./FeatureItem";

function FeatureList() {

  const data = [
    {
      icon: "bi-collection",
      title: "Fresh new layout",
      desc: "With Bootstrap 5, we've created a fresh new layout.",
    },

    {
      icon: "bi-cloud-download",
      title: "Free to download",
      desc: "Start Bootstrap has a collection of free templates.",
    },

    {
      icon: "bi-card-text",
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the hero header.",
    },

    {
      icon: "bi-bootstrap",
      title: "Feature boxes",
      desc: "We created feature boxes using Bootstrap icons.",
    },

    {
      icon: "bi-code",
      title: "Simple clean code",
      desc: "We keep our dependencies updated.",
    },

    {
      icon: "bi-patch-check",
      title: "A name you trust",
      desc: "Start Bootstrap has been the leader since 2013.",
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