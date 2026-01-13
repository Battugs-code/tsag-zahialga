export const loginTypesDefs = `
input loginInput {
email: String, password: String
} 

type auth{
message: String
token: String
}`;

export const signupTypesDefs = `
type User {
_id: ID
username: String
email: String
password: String
firstname: String
lastname: String
}
    input signupInput {
    username: String
    email:String
    password: String
    firstname: String
    lastname: String}
`;
export const userMutationTypeDefs = `
loginUser(input:loginInput) : auth
signupUser(input:signupInput) : String
`;

// export const userQueryTypeDefs = `

// `
