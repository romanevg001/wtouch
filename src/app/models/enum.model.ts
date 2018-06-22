export enum WaytosaveType {
    API = 1, 
    LocalStorage = 2
}

export enum QuestionType {
    Select = 1, 
    Text = 2,
    Radio = 3
}

export enum EstimateType {
    OneTry = 1,
    SeveralTries = 2
}

export function enumToArray(en) {
  let map: {id: number; name: string}[] = [];
  for(var n in en) {
      if (typeof en[n] === 'number') {
          map.push({id: <any>en[n], name: n});
      }
  }
    return map;
}