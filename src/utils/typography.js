import Typography from "typography"
//proBook-Regular
//proMedium-Regular
//proBold-Regular
//proSemiBold-Regular

const primaryFontFamily = [`Montserrat`, `Arial`, `sans-serif`]
// const headerFontFamily= [`FreightSansLF Pro`, `Arial`, `sans-serif`]

const _options = {
  headerFontFamily: primaryFontFamily,
  bodyFontFamily: primaryFontFamily,
  bodyWeight: "normal",
  headerWeight: "bold",
  baseLineHeight: 1.5,
  baseFontSize: `16px`,
  headerLineHeight: 1,
  headerColor: "#000000",
  bodyColor: "#4C4D58",
  blockMarginBottom: 0,
  scaleRatio: 5,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      "h1,h2,h3,h4,h5,h6": {
        fontWeight: "600",
      },
    }
  },
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography
export default typography
