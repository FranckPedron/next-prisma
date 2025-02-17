'use server'
import {prisma} from "@/lib/prisma";
import {revalidatePath} from "next/cache";

export async function createCharacter(formData: FormData) {

    await prisma.character.create({
        data: {
            name: formData.get('name') as string
        }
    })
    revalidatePath("/characters");
}
