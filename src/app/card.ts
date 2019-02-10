export class Card {
    firstName: string;
    lastName: string;
    votes: number;
    constructor(firstname: string,
        lastname: string,
        votes: number
    ) {

        this.firstName = firstname;
        this.lastName = lastname;
        this.votes = votes;

    }

    get name(): string{
        return this.firstName + ' ' + this.lastName

    }
}

// public string map(){

// }
