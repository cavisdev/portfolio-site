import { Column, GradientLine, Name, NameplateContainer, Position, Skill } from "../styles/Nameplate.styles";
export default function Nameplate() {

    return (
        <NameplateContainer>
            <Column style={{ alignItems: "flex-end"}}>
                <Name>
                    CAVIS
                </Name>
                <Position>
                    FRONTEND<br />DEVELOPER
                </Position>
            </Column>
            <GradientLine />
            <Column style={{ justifyContent: "flex-end" }} className={"fadeDown"}>
                <Skill>css</Skill>
                <Skill>html</Skill>
                <Skill>react</Skill>
                <Skill>javascript</Skill>
                <Skill>typescript</Skill>
            </Column>
        </NameplateContainer>
    )
}