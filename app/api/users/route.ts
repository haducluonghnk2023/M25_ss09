import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function GET() {
  try {
    // Bước 1:Lấy ra đường dẫn của file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");
    // Bước 2 : Sử dụng fs để đọc file
    const data = fs.readFileSync(filePath, "utf-8");

    //Bước 3 : Ép kiểu từ dạng json sang TS
    const users = JSON.parse(data);

    // Trả về dữ liệu cho phía client
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
}
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    //Bước 1 : Lấy dữ liệu từ phía client
    const userRequest = await request.json();

    //Bước 2 : lấy ra đường dẫn của file cần ghi
    const filePath = path.join(process.cwd(), "database", "users.json");

    //Bước 3: Đọc file cần ghi vào
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    console.log(users);

    //Bước 4 : push dữ liệu vào trong mảng
    users.push(userRequest);

    // Bước 5 : ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf-8");

    return NextResponse.json({ message: "ghi file thành công" });
  } catch (error) {
    return NextResponse.json({ message: "ghi file thất bại" });
  }
}
