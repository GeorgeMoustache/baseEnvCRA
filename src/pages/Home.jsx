import React from 'react'
import styled from 'styled-components'

const StyleHome = styled.div`
  color: ${({theme}) => theme.color.black};
`
const Home = () => {
  return <StyleHome>HomePage</StyleHome>
}

export default Home