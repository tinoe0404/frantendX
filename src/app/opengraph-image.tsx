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
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#ffffff',
                    gap: 12,
                }}
            >
                <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.02em' }}>
                    FrantendX
                </div>
                <div style={{ fontSize: 28, opacity: 0.6, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Digital Solutions
                </div>
                <div style={{ fontSize: 36, opacity: 0.5, fontWeight: 400, marginTop: 24 }}>
                    Build. Ship. Scale.
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
