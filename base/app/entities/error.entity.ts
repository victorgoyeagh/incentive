
export interface IFeedbackSubmission {
    EmailAddress: string,
    Name: string,
    PhoneNo: string,
    FeedbackType: string,
    Message: string
}

export interface IErrorResponse {
    Id: number
}

export interface IResponseError {
    headers: any,
    ok: boolean,
    status: number
    statusText: string
    type: number
    url: string,
    _body: string
}
