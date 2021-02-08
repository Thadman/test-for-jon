import React from "react"
import Img from "gatsby-image/withIEPolyfill"

const AvenueImg = props => {
  let queryImg, wpImg
  // console.log(props)
  if (props.fluid) {
    // Static Query Image
    queryImg = props.fluid.childImageSharp
      ? props.fluid.childImageSharp.fluid
      : props.fluid.node
      ? props.fluid.node.childImageSharp.fluid
      : props.fluid

    // Wordpress Image
    const wpMedia = props.fluid.mediaDetails || null
    const wpAspectRatio = wpMedia ? wpMedia.width / wpMedia.height : null
    wpImg = props.fluid.sourceUrl &&
      props.fluid.srcSet && {
        aspectRatio: wpAspectRatio || 1.71,
        sizes: props.fluid.sizes || "100vw",
        src: props.fluid.sourceUrl,
        srcSet: props.fluid.srcSet,
      }
  } else {
    // Placeholder Image
    // queryImg = GetPlaceholderImage()

    return <></>
  }

  // GIF Image
  if (props.src && props.src.includes(".gif") && !props.noAnimate) {
    return (
      <img
        className={props.className}
        src={props.src}
        alt={props.alt}
        loading="lazy"
        style={props.style}
      />
    )
  }

  return (
    <Img
      ref={props.setRef}
      className={`${props.className} avenueImg`}
      loading={props.loading || "lazy"}
      fadeIn={props.noFade ? false : true}
      fluid={wpImg || queryImg}
      alt={props.alt}
      style={props.style}
      objectFit="cover"
      objectPosition="50% 50%"
    />
  )
}

export default AvenueImg
