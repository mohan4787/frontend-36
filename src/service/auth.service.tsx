import type {IRegisterUser } from "../components/auth/contract";
import type { SuccessResponse } from "../config/axios.config";
import type { ICredentials } from "../pages/Home";
import BaseService from "./base.service";



class AuthService extends BaseService {
   
   async registerUser(data: IRegisterUser) {
    return await this.postRequest("/auth/register", data, {
      
        header: {
          "Content-Type": "multipart/form-data",
        }
      }) as unknown as SuccessResponse;
   }

   async activateUserProfile(token: string) {
    return await this.getRequest(`/auth/activate/${token}`) 
   }

   async loginUser(credentials:ICredentials)
   {
     const response = await this.postRequest("/auth/login",credentials) as unknown as SuccessResponse;
     localStorage.setItem("_at_42",response.data.token)
   }

   async getLoggedInProfile(){
    return await this.getRequest("/auth/me")
   }
}
const authSvc = new AuthService();
export default authSvc;