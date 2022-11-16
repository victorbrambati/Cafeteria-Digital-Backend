/* User {
    id        Int           @id @default(autoincrement())
    email     String        @unique
    full_name String
    password  String
    orders    Order[]
    addresses UserAddress[]
  } */

export class User {
  id: number;
  email: string;
  password: string;
  orders: [];
  address: [];
}
