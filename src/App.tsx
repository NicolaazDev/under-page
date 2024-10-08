import { useTranslation } from "react-i18next";
import Scene from "./scene";

import { motion } from "framer-motion";
import LanguageSelector from "./selectLanguage";
import { Suspense, useEffect, useState } from "react";

const Loading = ({ delay }: any) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showLoading ? <div>.</div> : null;
};

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <main className="font-poppins center-col relative h-screen text-center p-4 bg-background main">
      <LanguageSelector onChange={changeLanguage} />
      {/* <img
        className="h-[65px] absolute top-5 left-10 logo"
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1728177168/LOGO_BILLITEE_COM_B_WORLD_E-MAIL-removebg-preview_toztbo.png"
      /> */}

      {/* <img
        className="h-[30vh] w-screen opacity-30 grayscale-[0%] absolute bottom-0 z-20"
        src="https://purepng.com/public/uploads/thumbnail/purepng.com-seasealegwaternightoceanblueh2obeach-4815222778679arpg.png"
      /> */}

      {/* <img
        className="w-[100vw] h-[100vh] object-cover opacity-70 grayscale-[50%] absolute top-0 right-[0%]"
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v172703754/Image_20241008112327.jpg_gdovwp.jpg"
      /> */}

      <img
        className="w-[100vw] h-[100vh] object-cover opacity-70 grayscale-[50%] absolute top-0 left-[0%]"
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1728403772/Image_20241008112230.jpg_bu54zz.jpg"
      />

      <div className="center-col translate-y-[20%]">
        <Suspense fallback={<Loading delay={5000} />}>
          <Scene />
        </Suspense>

        <motion.h1
          className="text-7xl font-bold relative z-20"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          transition={{ duration: 0.4 }}
        >
          <span className="z-20 relative">{t("title")}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute right-0 top-2/3 h-[0.58em] w-[50%] fill-primary z-[0]"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
        </motion.h1>
        <motion.p
          className="text-lg mt-10 max-w-[70%]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {t("description")}
        </motion.p>
      </div>
    </main>
  );
};

export default App;
