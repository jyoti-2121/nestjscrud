/* eslint-disable prettier/prettier */
import {IsString,IsNotEmpty,MaxLength,MinLength,IsBoolean,IsEmail, IsNumber} from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    first_name : string;    
    @IsString()
    @IsNotEmpty()
    last_name : string;
    @IsString() 
    phone_country_full_name : string;
    @MinLength(10)
    @MaxLength(10)
    @IsNotEmpty()    
    phone : string; 
    @IsString()   
    image : string;
    @IsBoolean()    
    is_user : boolean; 
    @IsBoolean()   
    is_donor : boolean; 
    @IsBoolean()   
    is_volunteer : boolean;
    location : object;
    @IsBoolean()   
    is_restaurant : boolean; 
    @IsString()   
    restaurant_name : string; 
    @IsString()      
    restaurant_location : string; 
    @IsBoolean()      
    is_veg : boolean;  
    @IsString()        
    my_request : string;
    my_causes : object;
    @IsString()            
    time_zone : string;  
    @IsString()          
    default_country : string; 
    @IsBoolean()         
    is_deleted : boolean;    
    @IsBoolean()      
    blocked : boolean;  
    @IsString()            
    display_name : string;
    @IsString()
    @IsEmail()              
    email : string;  
    phone_code : object; 
    phone_country_short_name : object;
    country_data : object;
}

export class testvalidation {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    id:number;

}
