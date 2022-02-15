export interface Profile {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    altEmail: string,
    phoneNumber1: string,
    phoneNumber2: string,
    organizationName: string,
}

export interface Password {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
}