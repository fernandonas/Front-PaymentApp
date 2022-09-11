import { HttpErrorResponse } from "@angular/common/http";

export function createCustomError(customErrorMessage: string): HttpErrorResponse {
    return new HttpErrorResponse({ error: customErrorMessage });
}
