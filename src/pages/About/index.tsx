import style from "./styles.module.css";
import Info from "./info";

const AboutPage = () => {
  return (
    <>
      <h1>About ...</h1>
      <div className={style.container}>
        <h2 className={style.h2}>What to find in this great shop?</h2>
        <div className={style.inform}>
          <Info />
        </div>
        <h3 className={style.h3}>
          Visit the official
          <a href="https://www.jellybellyinternational.com/">
            Jelly Belly Website
          </a>
        </h3>
      </div>
    </>
  );
};

export default AboutPage;
