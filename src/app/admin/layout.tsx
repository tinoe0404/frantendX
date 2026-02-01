import Link from "next/link";
import { LayoutDashboard, ReceiptText, Home } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-tight">Admin</h1>
                    <p className="text-slate-400 text-sm">frantendX CMS</p>
                </div>
                <nav className="space-y-2">
                    <Link
                        href="/admin/inquiries"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        Inquiries
                    </Link>
                    <Link
                        href="/admin/pricing"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
                    >
                        <ReceiptText className="h-5 w-5" />
                        Pricing
                    </Link>
                    <div className="pt-8 mt-8 border-t border-slate-800">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
                        >
                            <Home className="h-5 w-5" />
                            Back to Site
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-slate-50 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
