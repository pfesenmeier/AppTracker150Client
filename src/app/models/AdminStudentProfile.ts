import { Cohort } from './Cohort';
import { AdminApplicationView } from './AdminApplicationView';

export interface AdminStudentProfile {
    StudentId?: number;
    FirstName: string;
    LastName: string;
    Cohort: Cohort;
    ResumeLink?: string;
    LinkedInLink?: string;
    PortfolioLink?: string;
    GitHub?: string;
    UserName?: string;
    FullTimeOrPartTime: string;
    Applications?: AdminApplicationView[];
}