import { IconName } from "./icon.enum";


export interface IconProps {
    name : IconName;
    isActive? : boolean;
    onClick? :(e: React.MouseEvent) => void; 
    alt : string;
    width : number;
    height : number;
    className?: string
}