import React from "react";
import styles from "./Home.module.css";
import PostersWrapper from "../../Wrapper/PosterWrapper/PostersWrapper";
import VPoster from "./VPoster/VPoster";
import Carousel from "../../Components/Carousel/Carousel";

function Home() {
  const data = [
    {
      title: "Laughter Chefs",
      language: "Hindi",
      movieType: "Reality",
      contentRating: null,
      image:
        "https://v3img.voot.com/resizeMedium,w_768,h_432/v3Storage/assets/16x9-new-ep-1723825323912.jpg",
      isLive: true,
      isPremium: false,
    },
    {
      title: "Indian Hearthbreaks ft. Sen, Vinesh And More",
      language: null,
      movieType: "Olympics - 2024",
      contentRating: "Paris",
      image:
        "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/olympics_indian_heartbreaks_clean_ctv-1723153177265.jpg",
      isLive: true,
      isPremium: false,
    },
    {
      title: "Motel Melati",
      language: "Hindi,English",
      movieType: "Horror",
      contentRating: "U/A 13+",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpHDPTSWO3-8mu-rxTKqIDys_nBgH4gmhw2dityu1e_Fi6N9W",
      isLive: true,
      isPremium: false,
    },
  ];

  const hotData = [
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1723644662242.jpg",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1717266004222.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723814348669.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4sf-1722538566862.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4777-1708425155175.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hp7_2_3x4-1687867874272.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/rohit_sharma_15_aug_tri_colour_vertical_3x4-1723535763136.jpg",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/akelli-3x4-1716096918587.jpg"
  ];

  const freshEpisodes = [

    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723741087005.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1722422931790.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1722838729744.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4dsh-1723201612969.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723814734605.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723823631370.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1722372826799.jpg",
     ];

    
  const blockBuster=[
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/barbie-3x4-clean-1715411011431.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hp7_2_3x4-1687867874272.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/the-fate-of-the-furious-3x4-1701600205700.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/the-dark-knight-pre-3x4-1684028721346.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/oppenheimer-3x4-1712046716651.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hp1_3x4-1687867593695.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hp7_3x4-1687867846129.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/the-lord-of-the-rings---the-fellowship-of-the-ring-3x4-1686744944442.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hp5_3x4-1687867726792.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/minions3_4-1714393012393.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hp6_3x4-1687867758365.jpg",  
  ];


const sportsData = [
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/j_bumrah_15_aug_tri_colour_vertical_3x4-1723535779939.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_aug_tri_colour_vertical_3x4-1723535628478.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/rohit_sharma_15_aug_tri_colour_vertical_3x4-1723535763136.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/r_ashwin_15_aug_tri_colour_vertical_3x4-1723535844846.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/indian_hockey_team_15_aug_tri_colour_vertical_3x4-1723629413865.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/womens_cricket_team_15_aug_tri_colour_vertical_3x4-1723535731807.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/aman_15_aug_tri_colour_vertical_3x4-1723535607898.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/mandhana_15_aug_tri_colour_vertical_3x4-1723533839754.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/womens_cricket_team_529_runs_15_aug_tri_colour_vertical_3x4-1723619740734.jpg",
    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/sen_15_aug_tri_colour_vertical_3x4-1723535670722.jpg",
]





  return (
    <div className={styles.homepage_wrapper}>
      <Carousel data={data} />


      <PostersWrapper title="Hot Right Now 🔥">
        <div className={styles.scroll_container}>
          {hotData.map((image, i) => (
            <div className={styles.poster_item} key={i}>
              <VPoster image={image} />
            </div>
          ))}
        </div>
      </PostersWrapper>
      <PostersWrapper title="Fresh Episodes 📺">
        <div className={styles.scroll_container}>
          {freshEpisodes.map((image, i) => (
            <div className={styles.poster_item} key={i}>
              <VPoster image={image} />
            </div>
          ))}
        </div>
      </PostersWrapper>

      <PostersWrapper title="All Time Blockbusters💥">
        <div className={styles.scroll_container}>
          {blockBuster.map((image, i) => (
            <div className={styles.poster_item} key={i}>
              <VPoster image={image} />
            </div>
          ))}
        </div>
      </PostersWrapper>

      <PostersWrapper title="India's Iconic Sporting Moments Of The Year">
        <div className={styles.scroll_container}>
          {sportsData.map((image, i) => (
            <div className={styles.poster_item} key={i}>
              <VPoster image={image} />
            </div>
          ))}
        </div>
      </PostersWrapper>
    </div>
  );
}

export default Home;
