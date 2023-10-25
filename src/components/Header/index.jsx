import { PiSignOut } from 'react-icons/pi'


import { Container, Logout } from "./styles"
import logo from "../../assets/logo.svg"

export function Header(){
    return(
        <Container>
                
                <div>
                    <img src={logo} alt="Logo" />
                    <span>food explorer</span>
                </div>

    

                <Logout>
                    <PiSignOut />
                </Logout>
        </Container>
    )
}