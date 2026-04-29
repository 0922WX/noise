import { Win98Window } from '#/compoments/Win98Window'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Star, Hexagon, Radio } from 'lucide-react'
import { useState, useRef } from 'react'

export const Route = createFileRoute('/home')({
  component: HomePage,
})

function Y2KDeco() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <Star className="absolute text-y2k-pink/20" style={{ top: '8%', left: '8%', width: 32, height: 32 }} fill="currentColor" />
      <Star className="absolute text-y2k-orange/15" style={{ top: '18%', right: '10%', width: 24, height: 24 }} fill="currentColor" />
      <Star className="absolute text-y2k-lime/12" style={{ bottom: '20%', left: '12%', width: 20, height: 20 }} fill="currentColor" />
      <Star className="absolute text-y2k-cyan/12" style={{ bottom: '12%', right: '8%', width: 28, height: 28 }} fill="currentColor" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="absolute" style={{
          width: `${6 + (i % 3) * 4}px`,
          height: `${6 + (i % 3) * 4}px`,
          backgroundColor: i % 4 === 0 ? '#FF0099' : i % 4 === 1 ? '#FF6600' : i % 4 === 2 ? '#CCFF00' : '#00FFFF',
          left: `${8 + (i * 13) % 78}%`,
          top: `${4 + (i * 17) % 82}%`,
          opacity: 0.15,
          transform: i % 2 === 0 ? 'rotate(45deg)' : 'none',
          animation: `y2kFloat ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
        }} />
      ))}
    </div>
  )
}

/* ── 首页 ── */
function HomePage() {
  const [roomName, setRoomName] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleStart = () => {
    if (!roomName.trim()) {
      setError(true)
      inputRef.current?.focus()
      setTimeout(() => setError(false), 1200)
      return
    }
    navigate({ to: '/rooms', search: { name: roomName.trim() } })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleStart()
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12" style={{ backgroundColor: '#008080' }}>
      <Y2KDeco />

      {/* 主窗口 */}
      <div className="relative z-10 w-full max-w-md">
        <Win98Window title="秃秃会客室.EXE" icon={<Radio className="h-4 w-4" />}>
          <div className="flex flex-col gap-5 p-1">
            {/* Logo */}
            <div className="flex flex-col items-center gap-3 py-3">
              <div className="flex items-center gap-3">
                <Hexagon className="h-7 w-7 text-y2k-pink" fill="currentColor" stroke="none" />
                <h1 className="font-display text-3xl font-bold tracking-widest" style={{ color: '#000000', textShadow: '2px 2px 0 #FF0099' }}>
                  秃秃会客室
                </h1>
                <Hexagon className="h-7 w-7 text-y2k-cyan" fill="currentColor" stroke="none" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-y2k-orange" />
                <p className="font-mono text-[10px] font-bold tracking-[0.3em]" style={{ color: '#808080' }}>
                  专用
                </p>
                <div className="h-0.5 w-8 bg-y2k-orange" />
              </div>
            </div>

            <div style={{ height: '2px', border: 'none', borderTop: '1px solid #808080', borderBottom: '1px solid #FFFFFF' }} />

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="font-mono text-xs font-bold whitespace-nowrap" style={{ color: '#404040' }}>
                  频道名称:
                </label>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm" style={{ color: '#808080' }}>#</span>
                  <input
                    ref={inputRef}
                    type="text"
                    maxLength={50}
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="CHANNEL_ID"
                    className="w-full pl-7 pr-3 py-2.5 font-mono text-sm tracking-wide outline-none"
                    style={{
                      background: error ? '#FFE0E0' : '#FFFFFF',
                      borderTop: '2px solid #404040',
                      borderLeft: '2px solid #404040',
                      borderRight: '2px solid #FFFFFF',
                      borderBottom: '2px solid #FFFFFF',
                      color: '#000000',
                    }}
                  />
                </div>
              </div>
              {error && (
                <p className="font-mono text-[10px] font-bold" style={{ color: '#FF0000' }}>
                  [!] 请输入频道名称
                </p>
              )}

              <button
                onClick={handleStart}
                disabled={!roomName.trim()}
                className="w-full flex items-center justify-center gap-3 py-3 font-mono text-base font-bold tracking-[0.15em] select-none"
                style={{
                  background: roomName.trim() ? '#FF0099' : '#C0C0C0',
                  color: roomName.trim() ? '#FFFFFF' : '#808080',
                  borderTop: '2px solid #FFFFFF',
                  borderLeft: '2px solid #FFFFFF',
                  borderRight: '2px solid #404040',
                  borderBottom: '2px solid #404040',
                  cursor: roomName.trim() ? 'pointer' : 'not-allowed',
                }}
                onMouseDown={(e) => {
                  if (!roomName.trim()) return
                  const el = e.currentTarget
                  el.style.borderTop = '2px solid #404040'
                  el.style.borderLeft = '2px solid #404040'
                  el.style.borderRight = '2px solid #FFFFFF'
                  el.style.borderBottom = '2px solid #FFFFFF'
                  el.style.padding = '4px 15px 2px 17px'
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget
                  el.style.borderTop = '2px solid #FFFFFF'
                  el.style.borderLeft = '2px solid #FFFFFF'
                  el.style.borderRight = '2px solid #404040'
                  el.style.borderBottom = '2px solid #404040'
                  el.style.padding = '12px 0'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderTop = '2px solid #FFFFFF'
                  el.style.borderLeft = '2px solid #FFFFFF'
                  el.style.borderRight = '2px solid #404040'
                  el.style.borderBottom = '2px solid #404040'
                  el.style.padding = '12px 0'
                }}
              >

                开始
              </button>
            </div>

            {/* HOW TO USE 分组框 */}
            <div className="relative mt-1" style={{
              borderTop: '2px solid #808080',
              borderLeft: '2px solid #808080',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
              padding: '16px 12px 12px',
            }}>
              <span className="absolute font-mono text-[11px] font-bold px-1.5" style={{
                top: '-9px',
                left: '12px',
                background: '#C0C0C0',
                color: '#000000',
              }}>HOW TO USE</span>

            </div>




            {/* 状态栏 */}
            <div className="flex items-center gap-1" style={{
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              borderRight: '2px solid #808080',
              borderBottom: '2px solid #808080',
              background: '#C0C0C0',
              padding: '2px 6px',
            }}>
              <span className="flex-1 font-mono text-[10px]" style={{ color: '#404040' }}>Ready</span>
              <div className="h-3 w-px bg-[#808080]" />
              <span className="font-mono text-[10px]" style={{ color: '#404040' }}>v2.0.0</span>
            </div>
          </div>
        </Win98Window>
      </div>

      {/* 浮动动画 */}
      <style>{`
        @keyframes y2kFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
      `}</style>
    </div>
  )
}
