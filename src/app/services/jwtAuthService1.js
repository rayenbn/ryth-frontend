import axios from "axios";
import localStorageService from "./localStorageService";

class JwtAuthService {
  
  // user = {
  //   userId: "1",
  //   role: 'ADMIN',
  //   displayName: "Watson Joyce",
  //   email: "watsonjoyce@gmail.com",
  //   photoURL: "/assets/images/face-7.jpg",
  //   age: 25,
  //   token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh"
  // }
  user = null;
loginWithEmailAndPassword = async (email, password) => {
    
    var bodyFormData = new FormData();
        bodyFormData.append('grant_type', 'password');
        bodyFormData.append('client_id', 5); 
        bodyFormData.append('client_secret', "3O3tRyJ7rbE3mqKJJuXSu6f5EpJCnPSDIkwEwVjx"); 
        bodyFormData.append('scope', ""); 
        bodyFormData.append('email', email); 
        bodyFormData.append('password', password); 

      return await axios({
        method: 'post',
            url: 'http://hub.rythminno.com/api/v1/frontend/login',
            data: bodyFormData,
            headers: {
                'Content-Type': `multipart/form-data`,
            },
        }).then(data => {
          console.log('data in success', data);
          this.setSession(data.data.token);
          this.setUser(data.data);
          return data.data;
        })
        .catch((err) => {
          console.log("login err ", err);
        });

  };

  // loginWithEmailAndPassword = (email, password) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.user);
  //     }, 1000);
  //   }).then(data => {
  //     this.setSession(data.token);
  //     this.setUser(data);
  //     return data;
  //   });
  // };

  loginWithToken = async () => {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   resolve(this.user);
      // }, 100);
      this.user = localStorageService.getItem("auth_user");
      // console.log(this.user);
      if (this.user.token){
        resolve(this.user);
      }else{
        reject('not authenticated');
      }
    }).then(data => {
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  // loginWithToken = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.user);
  //     }, 100);
  //   }).then(data => {
  //     this.setSession(data.token);
  //     this.setUser(data);
  //     return data;
  //   });
  // };

  

  logout = () => {
    this.setSession(null);
    this.removeUser();
  }

  setSession = token => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.baseURL = 'http://hub.rythminno.com/api/v1/frontend/';
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  setUser = (user) => {    
    localStorageService.setItem("auth_user", user);
  }
  removeUser = () => {
    localStorage.removeItem("auth_user");
  }
}

export default new JwtAuthService();
