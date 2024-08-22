import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function POST(request: NextRequest, response: NextResponse) {
    try {
      //Bước 1 : Lấy dữ liệu từ phía client
      const productRequest = await request.json();
  
      //Bước 2 : lấy ra đường dẫn của file cần ghi
      const filePath = path.join(process.cwd(), "database", "products.json");
  
      //Bước 3: Đọc file cần ghi vào
      const products = JSON.parse(fs.readFileSync(filePath, "utf8"));
      console.log(products);
  
      //Bước 4 : push dữ liệu vào trong mảng
      products.push(productRequest);
  
      // Bước 5 : ghi file
      fs.writeFileSync(filePath, JSON.stringify(products), "utf-8");
  
      return NextResponse.json({ message: "Thêm mới sản phẩm thành công" });
    } catch (error) {
      return NextResponse.json({ message: "ghi file thất bại" });
    }
  }
  export async function GET() {
    try {
      // Bước 1:Lấy ra đường dẫn của file cần đọc
      const filePath = path.join(process.cwd(), "database", "products.json");
      // Bước 2 : Sử dụng fs để đọc file
      const data = fs.readFileSync(filePath, "utf-8");
  
      //Bước 3 : Ép kiểu từ dạng json sang TS
      const products = JSON.parse(data);
  
      // Trả về dữ liệu cho phía client
      return NextResponse.json(products);
    } catch (error) {
      return NextResponse.json(error);
    }
  }