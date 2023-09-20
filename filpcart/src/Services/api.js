import axios from 'axios'

const url ="http://localhost:4500"

const AuthSignUp =async (data) => {
 try {
     return await axios.post(`${url}/signup`,data)
 } catch (error) {
    
 }
}

export default AuthSignUp