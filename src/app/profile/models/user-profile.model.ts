export interface Profile {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    alternateEmail: string,
    phoneNumber: string,
    alternatePhoneNumber: string,
    organizationName: string,
}

export interface Password {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
}