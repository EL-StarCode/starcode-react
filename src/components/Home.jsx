import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Home() {
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "realisations"]{
        enterprise,
        image{
            asset->{
                _id,
                url
            }
        },
        description,
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div><header>
      <h1>StarCode - EL</h1>
    </header>
    <main>
      <h2>Réalisations :</h2>
      
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
              <span key={index}>
                <span>
                  <h2>{post.enterprise}</h2>
                  <img src={post.image.asset.url} alt="résultat client" />
                </span>
                <span>
                    <p>{post.description}</p>
                </span>
              </span>
          ))}
      </div>
    </main></div>
  )
}

