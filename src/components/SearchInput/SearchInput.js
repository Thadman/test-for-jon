import React from "react"
import { Input, Header } from "./style"
import { Container } from "../Container/style"

const SearchInput = ({ data, searchQuery, setSearchQuery }) => {
  console.log(data)
  return (
    <Header>
      <Container>
        <Input
          placeholder="Enter keywords..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          name="s"
        />
      </Container>
    </Header>
  )
}

export default SearchInput
