import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

export async function PUT(req: NextRequest, context: { params: { filename: string } }) {
  const oldFile = context.params.filename;
  const oldPath = path.join(uploadDir, oldFile);

  // حذف الملف القديم إن وُجد
  if (fs.existsSync(oldPath)) {
    fs.unlinkSync(oldPath);
  }

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
      resolve(NextResponse.json({ filename, url: `/uploads/${filename}` }, { status: 200 }));
    });
  });
}

export async function DELETE(_: NextRequest, context: { params: { filename: string } }) {
  const fileToDelete = context.params.filename;
  const filePath = path.join(uploadDir, fileToDelete);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  fs.unlinkSync(filePath);
  return NextResponse.json({ message: 'File deleted successfully' }, { status: 200 });
}
