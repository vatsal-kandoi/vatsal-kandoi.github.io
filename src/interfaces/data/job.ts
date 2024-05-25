export interface IJob {
    role_shorthand: string;
    role: string;
    company: string;
    start_date: Date;
    end_date: Date | "present";
    bullets: string[];
}