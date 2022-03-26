import React from 'react'
import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import UserTable from './components/UserTable'
import { Users } from './utils/users'

//  STYLE
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const Cont = styled.div`
  margin: 50px;
`
const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  margin-bottom: 30px;
`

const List = styled.ul`
  padding: 0;
  list-style: none;
  text-align: center;
`

const ListItem = styled.li`
  margin-bottom: 20px;
  font-size: 25px;
  color: #444;
  font-weight: 300;
`

const App = () => {
  const [query, setQuery] = useState('')

  const KEYS = ['first_name', 'last_name', 'email']

  const inputOnChange = (e) => {
    setQuery(e.target.value)
  }
  const searchFunc = (data) => {
    return data.filter((item) => {
      return KEYS.some((key) => item[key].toLowerCase().includes(query))
    })
  }

  return (
    <>
      <GlobalStyle />
      <Cont>
        <Input type="text" placeholder="Search..." value={query} onChange={inputOnChange} />
        <UserTable userDatas={searchFunc(Users)} query={query} />
        {/* <List>
          {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) => {
            return <ListItem key={user.id}>{user.first_name}</ListItem>
          })}
        </List> */}
      </Cont>
    </>
  )
}

export default App
