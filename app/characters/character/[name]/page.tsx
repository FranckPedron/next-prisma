import {prisma} from "@/lib/prisma";

export default async function CharacterPage({params}: { params: Promise<{ name: string }> }) {

    const {name} = await params;
    const character = await prisma.character.findUnique({where: {name}});

    if (!character) {
        return (
            <div>Not found</div>
        )
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <ul>
                <li>Attack: {character.attack}</li>
                <li>Defense: {character.defense}</li>
                <li>Experience: {character.experience}</li>
                <li>Points de vie: {character.healthPoints}</li>
            </ul>
        </div>
    )

}
