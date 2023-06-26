/* eslint-disable prettier/prettier */
export class CreateUserDto {
    first_name : string;    
    last_name : string;    
    phone_country_full_name : string;    
    phone : string;    
    image : string;    
    is_user : boolean;    
    is_donor : boolean;    
    is_volunteer : boolean;    
    location : object;    
    is_restaurant : boolean;    
    restaurant_name : string;    
    restaurant_location : string;    
    is_veg : boolean;    
    my_request : string;    
    my_causes : object;    
    time_zone : string;    
    default_country : string;    
    is_deleted : boolean;    
    blocked : boolean;    
    display_name : string;    
    email : string;    
    phone_code : object;    
    phone_country_short_name : object;
    country_data : object;
}
