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
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://frantendx.com/images/logo.png"
                    alt=""
                    width={280}
                    height={80}
                    style={{ marginBottom: 32 }}
                />
                <div style={{ fontSize: 48, opacity: 0.7, fontWeight: 500 }}>Build. Ship. Scale.</div>
            </div>
        ),
        {
            ...size,
        }
    )
}
