import { useGetCat } from "./useGetCat";
import { useState } from "react";

export const Cat = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/4io.gif"
  );
  const { data, isLoading, refetch } = useGetCat();
  if (isLoading) return <h1>Loading...</h1>;

  const handleRefetch = () => {
    refetch();
    setImageUrl(image);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Cat Facts</h5>
          <p className="card-text">{data?.fact}</p>
          <a href="#" className="btn btn-primary" onClick={handleRefetch}>
            Generate a new fact
          </a>
        </div>
      </div>
    </>
  );
};