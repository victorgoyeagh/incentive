
export interface IErrorSubmission {
    Type: number,
    Url: string,
    FileName: string,
    Message: string,
    Description: string,
    Stack: string,
    PlanId: number,
    ProjectId: number,
    LineNumber?: string
}
