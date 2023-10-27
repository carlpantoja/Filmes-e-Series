import styled from "styled-components"
import { Item } from "./Item"

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0 2rem;
    column-gap: 3rem;
    row-gap: 1rem;
    ${Item}{
        flex-direction: column;
    } 
    &.home{
        display: flex;
        overflow-x: auto;
        margin-bottom: 10px;
        ${Item}{
            span{
                display: none;
            }
        }
    }`