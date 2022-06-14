import styled from 'styled-components'

export const AuthWrapper = styled('form')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#e66465, #9198e5);

  .auth-form {
    padding: 24px;
    background: #fff;
    width: 30%;
    border-radius: 4px;
  }
  
  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`