const tailwindConfig = {
  theme: {
    fontFamily: {
      body: [poppins.style.fontFamily, "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1000px",
      xl: "1440px",
    },
    colors: {
      white: {
        100: "#ffffff",
      },
      orange: {
        100: "#fdbfa3",
      },
      grey: {
        100: "#585779",
      },
      black: {
        100: "#434364",
      },
      violet: {
        100: "#6d31d0",
      },
      yellow: {
        100: "#ffdb80",
      },
      violetGradient: {
        100: "linear-gradient(90.49deg, #53269D 0%, #6D31D0 100.2%)",
      },
    },
  },
};
// Класс	Паддинг (px)
// py-2	0.5rem = 8px
// py-4	1rem = 16px
//py-5	1.25rem = 20px
// py-8	2rem = 32px
// py-12	3rem = 48px
// py-20	5rem = 80px
//w-[40px] - в пс
export default tailwindConfig;
