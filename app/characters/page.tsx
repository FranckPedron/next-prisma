import {prisma} from "@/lib/prisma";
import Link from "next/link";
import {createCharacter} from "@/actions/actions";

export default async function CharactersPage() {

    const characters = await prisma.character.findMany();
    return (
        <div>Liste des personnages
            <ul>
            {characters.map(c => (
                <li key={c.id}>{c.name} <Link href={`characters/character/${c.name}`}>voir les stats</Link></li>
            ))
            }
            </ul>
            <form action={createCharacter} className="bg-gray-100 p-5" >
                <input type="text" name="name" placeholder="name" className="px-2 py-1 rounded-sm"/>
                <button type="submit" className="px-2 py-1 rounded-sm bg-sky-500">Créer personnage</button>
            </form>
        </div>
    )
}

