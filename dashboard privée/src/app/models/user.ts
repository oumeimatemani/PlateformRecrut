export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    roles: { name: string }[];  
  }
  