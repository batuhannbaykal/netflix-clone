import React from "react";
import Movies from "../components/Movies";

//veri çekilecek sayfa (server side rendering/fetch)
//searchParams'a ulaşma nedenimiz, urlye ulaşmak
// api key = e71fd3619c654557b4899d557b1784eb

const Page = async ({ searchParams }) => {
  //fetch ile, tmdb key'ini kullanarak verileri cekiyoruz (koşul ile, ilgili genre boşsa, trending kısmını,
  // sayfanın boş gözükmemesi için gösteriyoruz)
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=e71fd3619c654557b4899d557b1784eb&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
