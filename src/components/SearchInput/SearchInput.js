import React from "react"
import { Input, Header } from "./style"
import { Container } from "../Container/style"

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <Header>
      <Container>
        <Input
          placeholder="Enter keywords..."
          type="text"
          onChange={event => setSearchQuery(event.target.value.toLowerCase())}
          value={searchQuery}
        />
      </Container>
    </Header>
  )
}

export default SearchInput
