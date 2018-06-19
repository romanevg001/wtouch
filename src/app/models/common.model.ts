
export class SearchModel {
    callBack(req: string): void {};
    midCallBack(req: string): void {};
    placeHolder?: any = "";
    result?: string | string[] = "";
    resultsList?:  any[];
    validation;
    searching: boolean = false;
    isFocus: boolean = true;
}