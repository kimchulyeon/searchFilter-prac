import React from 'react'
import styled from 'styled-components'

// STYLE
const Table = styled.table`
  width: 100%;
  margin: 50px 0;
  border-spacing: 15px;
  color: #444;
`
const Tr = styled.tr`
  margin-bottom: 20px;
`
const Th = styled.th`
  width: 250px;
  text-align: left;
  font-size: 20px;
`
const Td = styled.td`
  width: 250px;
  font-size: 20px;
`

const UserTable = ({ userDatas }) => {
  return (
    <Table>
      <tbody>
        <Tr>
          <Th>Name</Th>
          <Th>Surname</Th>
          <Th>email</Th>
        </Tr>
        {userDatas.map((user) => {
          return (
            <Tr key={user.id}>
              <Td>{user.first_name}</Td>
              <Td>{user.last_name}</Td>
              <Td>{user.email}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default UserTable
