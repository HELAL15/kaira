import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;

  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  try {
    await fs.unlink(filePath);
    return NextResponse.json({ message: 'File deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'File not found or cannot delete' }, { status: 404 });
  }
}


export async function PUT(
  req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;
  const formData = await req.formData();
  const newFile = formData.get('file') as unknown as File;

  if (!newFile) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const bytes = await newFile.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  try {
    // حذف الملف القديم أولاً
    await fs.unlink(filePath);

    // ثم حفظ الملف الجديد بنفس الاسم
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      message: 'File updated successfully (old removed)',
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating file or file not found' }, { status: 500 });
  }
}