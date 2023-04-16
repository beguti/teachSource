import "../Style/profileInformation.css";


export const Reklam = () => {

    const images = ["https://source.unsplash.com/random", "https://picsum.photos/seed/picsum/200/300","https://picsum.photos/200/300?grayscale"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

  return (
    <div>
      <br />
      <h5 style={{ color: "#FFBE0B" }}>Reklam </h5>
      <hr style={{ border: "dashed #FFBE0B" }} />
      <div class="card" aria-hidden="true">
        <img src={selectedImage} class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
      
    </div>
  );
};
