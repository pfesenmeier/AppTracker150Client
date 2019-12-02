    export interface Application
    {
        
         Id?: number;  
         StudentId?: number;
         DateCreatedUtc: Date; 
         DateModifiedUtc?: Date;
         ApplicationStatus: number; 
         CompanyName: string; 
         PositionName: string; 
         JobLink?: string;
         JobLocation: string; 
         Research?: string; 
         Contacts?: string; 
         SourceOfPosting?: string; 
    }