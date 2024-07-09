import { Metadata } from 'next';

import '@/styles/index.css';

export const metadata: Metadata = {
    title: 'nextapp',
    description: '3r教室Next.js全栈开发课程',
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
