export const users = [
    {
        id:"1",
        email:"nivuyt789@gmail.com",
        password:"123456"
    },
    {
        id:"2",
        email:"nived123@gmail.com",
        password:"123456"
    },
    {
        id:"3",
        email:"nivuyt789@gmail.com",
        password:"123456"
    }
]

export const getUserDetails = async(email:string) =>{
    const found = users.find((item)=>item.email==email)
    return found
}