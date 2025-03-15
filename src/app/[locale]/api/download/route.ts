import { NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";

export async function GET() {
    try {
        const filePath = join(process.cwd(), "public", "Quantum_Brouer.pdf");
        const file = await fs.readFile(filePath);
        return new NextResponse(file, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="Quantum_Brouer.pdf"',
            },
        });
    } catch (error: unknown) {
        console.log(error);

        return new NextResponse("Dosya bulunamadı!", { status: 404 });
    }
}
