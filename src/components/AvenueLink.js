import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { checkSite } from "../utils/helpers"

const AvenueLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  sameWindow,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to)

  const email = to && to.includes("mailto:")

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      target={(sameWindow || email) ? null : `_blank`}
      rel="noopener noreferrer"
      href={(to || email) && checkSite(to, email)}
      {...other}
    >
      {children}
    </a>
  )
}

export default AvenueLink
