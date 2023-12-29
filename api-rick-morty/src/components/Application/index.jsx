import { CardCharacter } from "../CardCharacter";
import { ContainerApp, ContentCharacters, HeaderApp } from "./styles";

export function Application() {
    return (
        <ContainerApp>
            <HeaderApp>
                <h1>Rick and Morty</h1>
                <span>N° de Personagens: 826</span>
            </HeaderApp>
            <ContentCharacters>
                <div>
                    <CardCharacter
                        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        name="Rick Sanchez"
                        gender="Male"
                        specie="Human"
                    />
                </div>
                <button>Carregar mais</button>
            </ContentCharacters>
        </ContainerApp>
    )
}