import React from "react"
import { Input, Header } from "./style"
import { Container } from "../Container/style"

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  // i have the data here that i need to filter

  // console.log(data)

  return (
    <Header>
      <Container>
        <Input
          placeholder="Enter keywords..."
          type="text"
          onChange={event => setSearchQuery(event.target.value)}
          value={searchQuery}
        />
      </Container>
    </Header>
  )
}

export default SearchInput
