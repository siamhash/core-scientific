import { IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator"

export class CreateMinerDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    id: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    name: string


    @IsString()
    @IsNotEmpty()
    @MaxLength(16)
    health: string

    @IsNumber()
    @IsOptional()
    shelf: number

    @IsNumber()
    @IsOptional()
    rack: number

    @IsJSON()
    @IsNotEmpty()
    fans: JSON[]

    @IsNumber()
    hashrate: number
}
