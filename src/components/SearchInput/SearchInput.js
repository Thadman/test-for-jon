import React from "react"
import { Input, Header } from "./style"
import { Container } from "../Container/style"

const SearchInput = ({ data }) => {
  return (
    <Header>
      <Container>
        <Input placeholder="Enter keywords..." />
      </Container>
    </Header>
  )
}

export default SearchInput
