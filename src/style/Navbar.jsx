import styled from "styled-components"
import { Item } from "./Item"

export const Navbar = styled.ul`
    padding: 1rem 2rem;
    ${Item}{
        a{
            padding: 5px;
            color: #fff;
            text-decoration: none;
            font-size: 20px;
        }
        h1 {
            padding: 5px;
            font-size: 15px;
            font-weight: normal;
        }
        &.right-side{
            width: 100%;
            justify-content: right;
            input{
                padding: 5px;
            }
            button{
                padding: 5px;
                cursor: pointer;
            }
            i{
                padding: 2px;
            }
        }
    }`