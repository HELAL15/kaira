import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// حذف ملف
export async function DELETE(
  req: NextRequest,
  context: { params: { filename: string } }
) {
  const { filename } = context.params;

  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  try {
    await fs.unlink(filePath);
    return NextResponse.json({ message: 'File deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'File not found or cannot delete' },
      { status: 404 }
    );
  }
}

// تحديث ملف (إزالة القديم ثم حفظ الجديد)
export async function PUT(
  req: NextRequest,
  context: { params: { filename: string } }
) {
  const { filename } = context.params;
  const formData = await req.formData();
  const newFile = formData.get('file') as File | null;

  if (!newFile) {
    return NextResponse.json(
      { error: 'No file provided' },
      { status: 400 }
    );
  }

  const bytes = await newFile.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  try {
    // حذف الملف القديم إن وُجد
    await fs.unlink(filePath).catch(() => {}); // تجاهل الخطأ إذا لم يكن موجودًا

    // كتابة الملف الجديد
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      message: 'File updated successfully',
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating file or file not found' },
      { status: 500 }
    );
  }
}
