import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');

// تأكد من وجود مجلد التخزين
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ⬆️ POST: رفع ملف
export async function POST(req: NextRequest) {
  const form = new IncomingForm({ uploadDir, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) {
        reject(NextResponse.json({ error: 'Upload failed' }, { status: 500 }));
        return;
      }

      const file = files.file?.[0];
      if (!file) {
        resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
        return;
      }

      const filename = path.basename(file.filepath);
      resolve(NextResponse.json({ filename, url: `/uploads/${filename}` }));
    });
  });
}

// 🆕 PUT: تحديث الملف
export async function PUT(req: NextRequest, { params }: { params: { filename: string } }) {
  const { filename } = params;
  const oldPath = path.join(uploadDir, filename);

  // حذف الملف القديم
  if (fs.existsSync(oldPath)) {
    fs.unlinkSync(oldPath);
  }

  // رفع الجديد
  const form = new IncomingForm({ uploadDir, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) {
        reject(NextResponse.json({ error: 'Update failed' }, { status: 500 }));
        return;
      }

      const file = files.file?.[0];
      if (!file) {
        resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
        return;
      }

      const newFilename = path.basename(file.filepath);
      resolve(NextResponse.json({ filename: newFilename, url: `/uploads/${newFilename}` }));
    });
  });
}

// ❌ DELETE: حذف الملف
export async function DELETE(_: NextRequest, { params }: { params: { filename: string } }) {
  const { filename } = params;
  const filePath = path.join(uploadDir, filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  fs.unlinkSync(filePath);
  return NextResponse.json({ message: 'File deleted successfully' });
}
