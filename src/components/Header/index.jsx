import { PiSignOut } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'



import { Container, Logout, Menu } from "./styles"
import logo from "../../assets/logo.svg"

export function Header(){
    return(
        <Container>
                
                <Menu className='hamburguer-menu'>
                    <GiHamburgerMenu/>
                </Menu>
                
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