import { Win98Window } from '#/compoments/Win98Window'
import { createFileRoute } from '@tanstack/react-router'
import {
  Users,
  Mic,
  Headphones,
  Settings,
  Send,
  Volume2,
  Hash,
} from 'lucide-react'

export const Route = createFileRoute('/rooms')({
  component: RoomPage,
})

/* ── 语音波形 ── */
function VoiceWave() {
  return (
    <div className="flex items-end gap-0.5 h-4">
      {[0.3, 0.6, 1, 0.5, 0.8, 0.4, 0.7].map((h, i) => (
        <div key={i} className="w-0.75 bg-y2k-lime" style={{ height: `${h * 16}px` }} />
      ))}
    </div>
  )
}

function RoomPage() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const { name } = Route.useSearch() as { name?: string }
  const roomName = name || 'UNKNOWN'

  return (
    <div className="flex h-screen flex-col" style={{ backgroundColor: '#008080' }}>
      {/* 主区域 */}
      <div className="flex flex-1 items-start justify-center gap-4 p-6 overflow-auto">
        {/* 左侧：在线玩家 */}
        <div className="hidden md:block w-52 shrink-0">
          <Win98Window title="USERS.EXE" icon={<Users className="h-4 w-4" />}>
            <div className="flex flex-col py-1">
              <div className="flex items-center gap-2 px-2 py-1 cursor-pointer" style={{ background: '#000080', color: '#FFFFFF' }}>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-white font-mono text-[10px] font-bold" style={{ background: '#CCFF00', color: '#000000' }}>U</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate">YOU</p>
                  <p className="font-mono text-[9px]">SPEAKING</p>
                </div>
                <Mic className="h-3 w-3" />
              </div>
              <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-win-title hover:text-white" style={{ color: '#000000' }}>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-[10px] font-bold" style={{ borderColor: '#404040', background: '#C0C0C0', color: '#808080' }}>?</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs truncate" style={{ color: '#808080' }}>Waiting...</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-win-title hover:text-white" style={{ color: '#000000' }}>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-[10px] font-bold" style={{ borderColor: '#404040', background: '#C0C0C0', color: '#808080' }}>?</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs truncate" style={{ color: '#808080' }}>Waiting...</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 mx-1 mb-1" style={{
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              borderRight: '2px solid #808080',
              borderBottom: '2px solid #808080',
              background: '#C0C0C0',
              padding: '2px 6px',
            }}>
              <span className="font-mono text-[9px]" style={{ color: '#404040' }}>1/5 online</span>
            </div>
          </Win98Window>
        </div>

        {/* 中央：聊天室 */}
        <div className="flex flex-1 max-w-2xl min-w-0">
          <Win98Window
            title={`CHAT.EXE — #${roomName}`}
            icon={<Hash className="h-4 w-4" />}
            className="flex flex-col w-full"
            style={{ minHeight: 480 }}
          >
            <div className="flex flex-col h-full p-1">
              {/* 房间信息条 */}
              <div className="flex items-center gap-3 px-2 py-2 mb-2" style={{ borderBottom: '2px solid #808080' }}>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 bg-y2k-lime" />
                  <span className="font-mono text-[10px] font-bold" style={{ color: '#404040' }}>CONNECTED</span>
                </div>
                <div className="h-3 w-px bg-[#808080]" />
                <span className="font-mono text-[10px]" style={{ color: '#808080' }}>24ms</span>
                <div className="h-3 w-px bg-[#808080]" />
                <span className="font-mono text-[10px]" style={{ color: '#808080' }}>P2P</span>
                <div className="flex-1" />
                <div className="flex items-center gap-1.5 md:hidden">
                  <Users className="h-3 w-3" style={{ color: '#808080' }} />
                  <span className="font-mono text-[10px]" style={{ color: '#404040' }}>1/5</span>
                </div>
              </div>

              {/* 聊天内容区 */}
              <div className="flex-1 overflow-auto px-2 py-2 space-y-3 min-h-50">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px flex-1 bg-[#808080]" />
                  <span className="font-mono text-[9px]" style={{ color: '#808080' }}>你进入了 #{roomName}</span>
                  <div className="h-px flex-1 bg-[#808080]" />
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center border font-mono text-[10px] font-bold" style={{ borderColor: '#404040', background: '#CCFF00', color: '#000000' }}>U</div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold" style={{ color: '#000000' }}>YOU</span>
                      <span className="font-mono text-[9px]" style={{ color: '#808080' }}>18:42</span>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: '#404040' }}>
                      有人吗？我已经连上语音了 🎮
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded px-3 py-2" style={{ background: '#DFDFDF' }}>
                  <Volume2 className="h-3 w-3" style={{ color: '#CCFF00' }} />
                  <VoiceWave />
                  <span className="font-mono text-[9px]" style={{ color: '#808080' }}>YOU 正在说话</span>
                </div>
              </div>

              {/* 输入区 */}
              <div className="flex items-center gap-2 px-2 pt-2 mt-2" style={{ borderTop: '2px solid #FFFFFF' }}>
                <input
                  type="text"
                  placeholder="按 Enter 发送..."
                  className="flex-1 py-2 px-3 font-mono text-sm outline-none"
                  style={{
                    background: '#FFFFFF',
                    borderTop: '2px solid #404040',
                    borderLeft: '2px solid #404040',
                    borderRight: '2px solid #FFFFFF',
                    borderBottom: '2px solid #FFFFFF',
                    color: '#000000',
                  }}
                />
                <button className="flex items-center justify-center px-3 py-2" style={{
                  background: '#FF0099',
                  color: '#FFFFFF',
                  borderTop: '2px solid #FFFFFF',
                  borderLeft: '2px solid #FFFFFF',
                  borderRight: '2px solid #404040',
                  borderBottom: '2px solid #404040',
                  cursor: 'pointer',
                }}>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </Win98Window>
        </div>
      </div>

      {/* 底部语音控制栏 */}
      <div className="flex items-center justify-center p-4">
        <Win98Window title="VOICE_PANEL.EXE" icon={<Mic className="h-4 w-4" />} style={{ width: '100%', maxWidth: 600 }}>
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center border" style={{ borderColor: '#404040', background: '#CCFF00' }}>
                  <Mic className="h-4 w-4" style={{ color: '#000000' }} />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#000000' }}>VOICE ON</p>
                  <p className="font-mono text-[9px]" style={{ color: '#808080' }}>Waiting...</p>
                </div>
              </div>
              <div className="h-6 w-px bg-[#808080]" />
              <VoiceWave />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center" style={{
                background: '#C0C0C0',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                cursor: 'pointer',
              }}>
                <Mic className="h-3.5 w-3.5" style={{ color: '#404040' }} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center" style={{
                background: '#C0C0C0',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                cursor: 'pointer',
              }}>
                <Headphones className="h-3.5 w-3.5" style={{ color: '#404040' }} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center" style={{
                background: '#C0C0C0',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                cursor: 'pointer',
              }}>
                <Settings className="h-3.5 w-3.5" style={{ color: '#404040' }} />
              </button>
              <button className="ml-1 flex h-8 items-center px-4 font-mono text-xs font-bold" style={{
                background: '#FF0099',
                color: '#FFFFFF',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                cursor: 'pointer',
              }}>
                END
              </button>
            </div>
          </div>
        </Win98Window>
      </div>
    </div>
  )
}
