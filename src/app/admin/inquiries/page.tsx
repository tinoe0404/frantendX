import { prisma } from "@/lib/prisma";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MarkAsReadButton } from "./components/MarkAsReadButton"; // Client component

export default async function InquiriesPage() {
    const inquiries = await prisma.contactInquiry.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Contact Inquiries</h2>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inquiries.map((inquiry: any) => (
                                <TableRow key={inquiry.id}>
                                    <TableCell>
                                        {new Date(inquiry.createdAt).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="font-medium">{inquiry.name}</TableCell>
                                    <TableCell>{inquiry.email}</TableCell>
                                    <TableCell>{inquiry.service}</TableCell>
                                    <TableCell>
                                        <Badge variant={inquiry.status === "UNREAD" ? "destructive" : "secondary"}>
                                            {inquiry.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {inquiry.status === "UNREAD" && (
                                            <MarkAsReadButton id={inquiry.id} />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
