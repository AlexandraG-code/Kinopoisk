
export enum DictionaryTypes {
    Genres = 'genres.name',
    Country = 'countries.name',
    Type = 'type',
    TypeNumber = 'typeNumber',
    Status = 'status'

}

export interface ResponseDictionary {
    name: string,
    slag: string
}