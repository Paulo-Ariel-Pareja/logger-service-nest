import { IsNotEmpty } from "class-validator";


export class LoggerDto {
    
    id: number;

    @IsNotEmpty()
    rawData: string;

    @IsNotEmpty()
    action: string

    @IsNotEmpty()
    user: string;

    createdAt: Date;

    updatedAt: Date;
}