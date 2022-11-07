import {plainToInstance} from "class-transformer";
import {validate} from "class-validator";

export async function getError(DtoClass: any, DtoBody: any, property: string): Promise<string[]> {
    const importMailDto = plainToInstance(DtoClass, DtoBody);
    const parseErrors =  await validate(importMailDto);
    try {
        return Object.keys(parseErrors.find(err => err.property === property).constraints);
    }
    catch (e) {
        return [];
    }
}

export function IsNotEmpty(DtoClass: any, DtoBody: any, property: string) {
    it("is empty", async () => {
        console.log(DtoBody);
        expect(await getError(DtoClass, DtoBody, property)).toContain("isNotEmpty");
    });
    it("is not empty", async () => {
        console.log(DtoBody);
        DtoBody[property] = "test";
        expect(await getError(DtoClass, DtoBody, property)).not.toContain("isNotEmpty");
    });
}

export function IsEmail(DtoClass: any, DtoBody: any, property: string){
    it("is not an email", async () => {
        console.log(DtoBody);
        DtoBody[property] = "not an email";
        const error = await getError(DtoClass, DtoBody, property);
        expect(error).toContain("isEmail");
    });
    it("is an email", async () => {
        DtoBody[property] = "test@mail.ru";
        const error = await getError(DtoClass, DtoBody, property);
        expect(error.length).toEqual(0);
    });
}