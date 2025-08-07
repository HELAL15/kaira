import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// منع Next.js من محاولة معالجة الـ body
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// التأكد من وجود مجلد الرفع
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: NextRequest) {
  const form = formidable({ uploadDir, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) {
        reject(NextResponse.json({ error: 'Error parsing form' }, { status: 500 }));
        return;
      }

      const file = files.file?.[0] ?? files.file;
      if (!file) {
        resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
        return;
      }

      const filename = path.basename(Array.isArray(file) ? file[0].filepath : file.filepath);
      resolve(NextResponse.json({ filename, url: `/uploads/${filename}` }, { status: 201 }));
    });
  });
}
