import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'FrantendX Digital Solutions'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: '#F8FAFC',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#0F172A', // Slate-900 for contrast
                }}
            >
                <div style={{ fontWeight: 'bold' }}>FrantendX</div>
                <div style={{ fontSize: 48, marginTop: 24, opacity: 0.8 }}>Digital Solutions</div>
            </div>
        ),
        {
            ...size,
        }
    )
}
