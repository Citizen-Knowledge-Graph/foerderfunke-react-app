export class ProfileSectionsData {
    constructor(userId) {
        this.entityData = {
            id: userId,
            type: 'ff:Citizen',
        };
        this.personalisedData = [];
    }

    addPersonalisedData(newProfileSection) {
        this.personalisedData.push(newProfileSection);
    }
}
