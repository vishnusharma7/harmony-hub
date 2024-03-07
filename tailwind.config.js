/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#857f7f",
          "200": "#101820",
          "300": "#0b0a0a",
          "400": "rgba(255, 255, 255, 0.6)",
        },
        white: "#fff",
        gold: {
          "100": "#fee715",
          "200": "#e6cf00",
        },
        lavenderblush: "#f5ebeb",
        black: "#000",
        steelblue: "#0077b6",
        dodgerblue: "#0c83f1",
        pink: "#dfb1b1",
        red: "#d50909",
        deepskyblue: "#269edb",
        gainsboro: "#d9d9d9",
        silver: "rgba(189, 195, 199, 0.19)",
      },
      spacing: {},
      fontFamily: {
        "hachi-maru-pop": "'Hachi Maru Pop'",
        inherit: "inherit",
        newsreader: "Newsreader",
        "jolly-lodger": "'Jolly Lodger'",
      },
      borderRadius: {
        "13xl": "32px",
        "9xl": "28px",
        "21xl": "40px",
        "46xl": "65px",
        mini: "15px",
        "26xl": "45px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "5xl": "24px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
