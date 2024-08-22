import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function PUT(
  req: NextRequest,
  paramrs: { params: { id: string } }
) {
  try {
    // Bước 1 : Lấy vị trí file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");

    // Đọc file
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Bước 2 : Tìm kiếm vị trí phần tử cần cập nhật
    const findIndex = users.findIndex(
      (user: any) => user.id === +paramrs.params.id
    );

    // Bước 3 : Gán lại giá trị cho phần tử cần cập nhật
    if (findIndex !== -1) {
      users[findIndex].name = "hoa";
    }

    // Bước 4 : Ghi đè lại file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");

    // Bước 5 : Trả về message cho client
    return NextResponse.json("PUT");
    
  } catch (error) {
    return NextResponse.json("loi");
  }
}
