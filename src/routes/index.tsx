import { createFileRoute } from '@tanstack/react-router'
import {
  Mic,
  MicOff,
  Headphones,
  Settings,
  Send,
  Users,
  Radio,
  Zap,
  MessageSquare,
  Volume2,
  Hash,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: DesignSystemShowcase })

/* ------------------------------------------------------------------ */
/*  Color swatch helper                                                */
/* ------------------------------------------------------------------ */
function Swatch({
  name,
  hex,
  bg,
  text,
  glow,
}: {
  name: string
  hex: string
  bg: string
  text?: string
  glow?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-20 w-full rounded-lg border border-border-default ${glow ? 'shadow-[0_0_20px_rgba(0,245,212,0.15)]' : ''}`}
        style={{ backgroundColor: bg }}
      />
      <div>
        <p className="font-mono text-sm font-medium text-fg-primary">
          {name}
        </p>
        <p
          className="font-mono text-xs"
          style={{ color: text ?? '#8A8AA3' }}
        >
          {hex}
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Button component                                                   */
/* ------------------------------------------------------------------ */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  className = '',
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'magenta'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 font-body disabled:cursor-not-allowed disabled:opacity-40'

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const variants = {
    primary:
      'bg-accent-cyan text-fg-inverse hover:bg-accent-cyan-40 hover:shadow-[0_0_20px_rgba(0,245,212,0.25)] active:scale-[0.98]',
    secondary:
      'bg-bg-elevated text-fg-primary border border-border-default hover:border-accent-cyan hover:text-accent-cyan active:scale-[0.98]',
    ghost:
      'bg-transparent text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated active:scale-[0.98]',
    danger:
      'bg-transparent text-accent-red border border-accent-red hover:bg-accent-red/10 active:scale-[0.98]',
    magenta:
      'bg-accent-magenta text-fg-inverse hover:bg-accent-magenta-40 hover:shadow-[0_0_20px_rgba(255,0,110,0.25)] active:scale-[0.98]',
  }

  return (
    <button
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Input component                                                    */
/* ------------------------------------------------------------------ */
function Input({
  placeholder,
  error,
  className = '',
}: {
  placeholder: string
  error?: boolean
  className?: string
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full rounded-lg border bg-bg-inset px-4 py-3 font-mono text-sm text-fg-primary outline-none transition-all duration-150 placeholder:text-fg-muted
        ${error ? 'border-border-error focus:shadow-[0_0_0_3px_rgba(255,46,46,0.15)]' : 'border-border-default focus:border-border-active focus:shadow-[0_0_0_3px_rgba(0,245,212,0.15)]'}
        ${className}`}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Voice wave bar                                                     */
/* ------------------------------------------------------------------ */
function VoiceWave({ active }: { active: boolean }) {
  return (
    <div className="flex items-end gap-[3px] h-5">
      {[0.4, 0.7, 1, 0.6, 0.8, 0.5, 0.9].map((h, i) => (
        <div
          key={i}
          className={`w-[3px] rounded-full transition-all duration-150 ${active ? 'bg-accent-lime' : 'bg-fg-muted'}`}
          style={{
            height: active ? `${h * 20}px` : '4px',
            animationDelay: `${i * 80}ms`,
          }}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Status dot                                                         */
/* ------------------------------------------------------------------ */
function StatusDot({ color }: { color: 'lime' | 'amber' | 'red' | 'magenta' }) {
  const colors = {
    lime: 'bg-accent-lime shadow-[0_0_8px_rgba(57,255,20,0.5)]',
    amber: 'bg-accent-amber shadow-[0_0_8px_rgba(255,183,3,0.5)]',
    red: 'bg-accent-red shadow-[0_0_8px_rgba(255,46,46,0.5)]',
    magenta: 'bg-accent-magenta shadow-[0_0_8px_rgba(255,0,110,0.5)]',
  }
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${colors[color]}`}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */
function Badge({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'cyan' | 'magenta' | 'lime' | 'amber' | 'red'
}) {
  const styles = {
    cyan: 'bg-accent-cyan-10 text-accent-cyan border-accent-cyan-20',
    magenta: 'bg-accent-magenta-10 text-accent-magenta border-accent-magenta-20',
    lime: 'bg-accent-lime-10 text-accent-lime border-accent-lime-20',
    amber: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
    red: 'bg-accent-red/10 text-accent-red border-accent-red/20',
  }
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Section title                                                      */
/* ------------------------------------------------------------------ */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-border-default" />
      <h2 className="font-display text-lg font-semibold tracking-wide text-fg-primary uppercase">
        {children}
      </h2>
      <div className="h-px flex-1 bg-border-default" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
function DesignSystemShowcase() {
  const [roomName, setRoomName] = useState('')
  const [focusedInput, setFocusedInput] = useState(false)

  return (
    <div className="min-h-screen bg-bg-base pb-20">
      {/* Header */}
      <header className="border-b border-border-default bg-bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan text-fg-inverse">
              <Radio className="h-5 w-5" />
            </div> */}
            <div>
              <h1 className="font-display text-xl font-bold tracking-wider text-fg-primary">
                秃秃会客室
              </h1>
              <p className="font-mono text-[10px] tracking-widest text-fg-muted">
                DESIGN SYSTEM v1.0
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot color="lime" />
            <span className="font-mono text-xs text-fg-secondary">
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* ── Background Colors ── */}
        <SectionTitle>Backgrounds</SectionTitle>
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Swatch name="bg-base" hex="#08080C" bg="#08080C" />
          <Swatch name="bg-surface" hex="#111118" bg="#111118" />
          <Swatch name="bg-elevated" hex="#1A1A24" bg="#1A1A24" />
          <Swatch name="bg-inset" hex="#030305" bg="#030305" />
        </div>

        {/* ── Accent Colors ── */}
        <SectionTitle>Accents</SectionTitle>
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          <Swatch
            name="accent-cyan"
            hex="#00F5D4"
            bg="#00F5D4"
            text="#00F5D4"
            glow
          />
          <Swatch
            name="accent-magenta"
            hex="#FF006E"
            bg="#FF006E"
            text="#FF006E"
          />
          <Swatch
            name="accent-lime"
            hex="#39FF14"
            bg="#39FF14"
            text="#39FF14"
          />
          <Swatch
            name="accent-amber"
            hex="#FFB703"
            bg="#FFB703"
            text="#FFB703"
          />
          <Swatch
            name="accent-red"
            hex="#FF2E2E"
            bg="#FF2E2E"
            text="#FF2E2E"
          />
        </div>

        {/* ── Accent Scale: Cyan ── */}
        <div className="mb-8">
          <p className="mb-3 font-mono text-xs text-fg-muted">
            accent-cyan scale
          </p>
          <div className="grid grid-cols-5 gap-2">
            {[
              { hex: '#00F5D4', label: '50' },
              { hex: '#00C4AA', label: '40' },
              { hex: '#00937F', label: '30' },
              { hex: '#004D42', label: '20' },
              { hex: '#001A16', label: '10' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div
                  className="h-10 w-full rounded border border-border-default"
                  style={{ backgroundColor: s.hex }}
                />
                <span className="font-mono text-[10px] text-fg-muted">
                  {s.label} · {s.hex}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Accent Scale: Magenta ── */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs text-fg-muted">
            accent-magenta scale
          </p>
          <div className="grid grid-cols-5 gap-2">
            {[
              { hex: '#FF006E', label: '50' },
              { hex: '#CC0058', label: '40' },
              { hex: '#990042', label: '30' },
              { hex: '#4D0021', label: '20' },
              { hex: '#1A000B', label: '10' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div
                  className="h-10 w-full rounded border border-border-default"
                  style={{ backgroundColor: s.hex }}
                />
                <span className="font-mono text-[10px] text-fg-muted">
                  {s.label} · {s.hex}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Buttons ── */}
        <SectionTitle>Buttons</SectionTitle>
        <div className="mb-12 grid gap-6">
          {/* Variants */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="md">
              加入房间
            </Button>
            <Button variant="secondary" size="md">
              创建房间
            </Button>
            <Button variant="ghost" size="md">
              取消
            </Button>
            <Button variant="danger" size="md">
              退出
            </Button>
            <Button variant="magenta" size="md">
              邀请好友
            </Button>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>

          {/* With icons */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" icon={<Zap className="h-4 w-4" />}>
              快速加入
            </Button>
            <Button
              variant="secondary"
              icon={<Mic className="h-4 w-4" />}
            >
              开启语音
            </Button>
            <Button variant="ghost" icon={<Settings className="h-4 w-4" />}>
              设置
            </Button>
          </div>

          {/* Disabled */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" disabled>
              处理中...
            </Button>
            <Button variant="secondary" disabled>
              不可点击
            </Button>
          </div>
        </div>

        {/* ── Inputs ── */}
        <SectionTitle>Inputs</SectionTitle>
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="font-mono text-xs text-fg-secondary">
              默认状态
            </label>
            <Input placeholder="输入房间名称..." />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-fg-secondary">
              错误状态
            </label>
            <Input placeholder="房间名不能为空" error />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="font-mono text-xs text-fg-secondary">
              大号输入框（首页用）
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="输入房间名，秒速开黑"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                onFocus={() => setFocusedInput(true)}
                onBlur={() => setFocusedInput(false)}
                className={`flex-1 rounded-xl border bg-bg-inset px-6 py-4 font-mono text-lg text-fg-primary outline-none transition-all duration-150 placeholder:text-fg-muted
                  ${focusedInput ? 'border-border-active shadow-[0_0_0_4px_rgba(0,245,212,0.12)]' : 'border-border-default'}`}
              />
              <button
                className={`flex items-center gap-2 rounded-xl px-8 py-4 font-display text-lg font-semibold tracking-wide transition-all duration-150
                  ${roomName ? 'bg-accent-cyan text-fg-inverse hover:bg-accent-cyan-40 hover:shadow-[0_0_24px_rgba(0,245,212,0.3)] active:scale-[0.98]' : 'bg-bg-elevated text-fg-muted cursor-not-allowed'}`}
              >
                <Zap className="h-5 w-5" />
                加入
              </button>
            </div>
          </div>
        </div>

        {/* ── Badges & Status ── */}
        <SectionTitle>Badges & Status</SectionTitle>
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <Badge variant="cyan">LIVE</Badge>
          <Badge variant="magenta">3 未读</Badge>
          <Badge variant="lime">在线</Badge>
          <Badge variant="amber">弱网</Badge>
          <Badge variant="red">断线</Badge>
          <div className="flex items-center gap-2">
            <StatusDot color="lime" />
            <span className="text-sm text-fg-secondary">语音中</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot color="amber" />
            <span className="text-sm text-fg-secondary">信号弱</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot color="red" />
            <span className="text-sm text-fg-secondary">已断开</span>
          </div>
          <div className="relative">
            <MessageSquare className="h-5 w-5 text-fg-secondary" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-magenta font-mono text-[9px] font-bold text-fg-inverse">
              9
            </span>
          </div>
        </div>

        {/* ── Voice Wave ── */}
        <SectionTitle>Voice Wave</SectionTitle>
        <div className="mb-12 flex items-center gap-8 rounded-xl border border-border-default bg-bg-surface p-6">
          <div className="space-y-1">
            <p className="font-mono text-xs text-fg-muted">idle</p>
            <VoiceWave active={false} />
          </div>
          <div className="h-8 w-px bg-border-default" />
          <div className="space-y-1">
            <p className="font-mono text-xs text-accent-lime">speaking</p>
            <VoiceWave active={true} />
          </div>
          <div className="h-8 w-px bg-border-default" />
          <div className="flex items-center gap-2">
            <Mic className="h-4 w-4 text-accent-lime" />
            <span className="text-sm text-fg-primary">玩家1 正在说话</span>
          </div>
        </div>

        {/* ── UI Mockups ── */}
        <SectionTitle>UI Components</SectionTitle>

        {/* Chat room list item */}
        <div className="mb-8 rounded-xl border border-border-default bg-bg-surface p-1">
          <div className="rounded-lg bg-accent-cyan-10 px-4 py-3 border-l-[3px] border-l-accent-cyan flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Hash className="h-4 w-4 text-accent-cyan" />
              <div>
                <p className="text-sm font-medium text-fg-primary">
                  艾欧尼亚五排
                </p>
                <p className="font-mono text-[10px] text-fg-muted">
                  最后消息: 3分钟前
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-fg-muted" />
                <span className="font-mono text-xs text-fg-secondary">
                  4/5
                </span>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-magenta font-mono text-[9px] font-bold text-fg-inverse">
                2
              </span>
            </div>
          </div>
          <div className="px-4 py-3 flex items-center justify-between hover:bg-bg-elevated transition-colors rounded-lg">
            <div className="flex items-center gap-3">
              <Hash className="h-4 w-4 text-fg-muted" />
              <div>
                <p className="text-sm font-medium text-fg-primary">
                  深夜大乱斗
                </p>
                <p className="font-mono text-[10px] text-fg-muted">
                  最后消息: 1小时前
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-fg-muted" />
                <span className="font-mono text-xs text-fg-secondary">
                  2/5
                </span>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 flex items-center justify-between hover:bg-bg-elevated transition-colors rounded-lg">
            <div className="flex items-center gap-3">
              <Hash className="h-4 w-4 text-fg-muted" />
              <div>
                <p className="text-sm font-medium text-fg-primary">
                  瓦罗兰特开黑
                </p>
                <p className="font-mono text-[10px] text-fg-muted">
                  最后消息: 昨天
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-fg-muted" />
                <span className="font-mono text-xs text-fg-secondary">
                  3/5
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Voice call bar */}
        <div className="mb-8 rounded-xl border border-border-default bg-bg-elevated p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-lime-10">
                  <Mic className="h-4 w-4 text-accent-lime" />
                </div>
                <div>
                  <p className="text-sm font-medium text-fg-primary">
                    语音已连接
                  </p>
                  <p className="font-mono text-[10px] text-fg-muted">
                    4 位玩家 · 延迟 24ms
                  </p>
                </div>
              </div>
              <div className="h-6 w-px bg-border-default" />
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <StatusDot color="lime" />
                  <VoiceWave active={true} />
                </div>
                <div className="flex items-center gap-2">
                  <StatusDot color="lime" />
                  <span className="font-mono text-xs text-fg-secondary">
                    玩家2
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <StatusDot color="lime" />
                  <span className="font-mono text-xs text-fg-secondary">
                    玩家3
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-default bg-bg-surface text-fg-secondary hover:text-accent-amber transition-colors">
                <MicOff className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-default bg-bg-surface text-fg-secondary hover:text-accent-cyan transition-colors">
                <Headphones className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-default bg-bg-surface text-fg-secondary hover:text-fg-primary transition-colors">
                <Settings className="h-4 w-4" />
              </button>
              <button className="ml-2 flex h-9 items-center gap-1.5 rounded-lg bg-accent-red px-3 text-sm font-medium text-fg-inverse hover:bg-accent-red/90 transition-colors">
                <span className="font-mono text-xs">挂断</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chat message mock */}
        <div className="mb-12 rounded-xl border border-border-default bg-bg-surface p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-cyan-10 font-mono text-xs font-bold text-accent-cyan">
              A
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-accent-cyan">
                  Alex
                </span>
                <span className="font-mono text-[10px] text-fg-muted">
                  18:42
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-secondary">
                兄弟们我上线啦，等我两分钟
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-magenta-10 font-mono text-xs font-bold text-accent-magenta">
              M
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-accent-magenta">
                  Mike
                </span>
                <span className="font-mono text-[10px] text-fg-muted">
                  18:43
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-secondary">
                快点，就等你了
                <span className="ml-1 inline-flex items-center rounded border border-accent-magenta-20 bg-accent-magenta-10 px-1 py-0 font-mono text-[10px] text-accent-magenta">
                  @Alex
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-lime-10 font-mono text-xs font-bold text-accent-lime">
              S
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-accent-lime">
                  Sam
                </span>
                <span className="font-mono text-[10px] text-fg-muted">
                  18:44
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg-secondary">
                我开麦了，能听到吗？
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <Volume2 className="h-3 w-3 text-accent-lime" />
                <VoiceWave active={true} />
              </div>
            </div>
          </div>
          {/* Input area */}
          <div className="mt-3 flex items-center gap-2 border-t border-border-default pt-3">
            <input
              type="text"
              placeholder="按 Enter 发送..."
              className="flex-1 rounded-lg border border-border-default bg-bg-inset px-3 py-2 font-mono text-sm text-fg-primary outline-none placeholder:text-fg-muted focus:border-border-active focus:shadow-[0_0_0_3px_rgba(0,245,212,0.15)] transition-all"
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-cyan text-fg-inverse hover:bg-accent-cyan-40 transition-colors">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Typography ── */}
        <SectionTitle>Typography</SectionTitle>
        <div className="mb-12 space-y-4 rounded-xl border border-border-default bg-bg-surface p-6">
          <div>
            <p className="font-mono text-[10px] text-fg-muted mb-1">
              font-display · Chakra Petch · 700
            </p>
            <h1 className="font-display text-4xl font-bold text-fg-primary">
              秃秃会客室
            </h1>
          </div>
          <div>
            <p className="font-mono text-[10px] text-fg-muted mb-1">
              font-display · Chakra Petch · 600
            </p>
            <h2 className="font-display text-2xl font-semibold text-fg-primary">
              创建你的开黑房间
            </h2>
          </div>
          <div>
            <p className="font-mono text-[10px] text-fg-muted mb-1">
              font-body · Noto Sans SC · 400
            </p>
            <p className="font-body text-base text-fg-secondary leading-relaxed">
              输入房间名称，邀请好友，一键连麦。无需注册，秒速组队。
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-fg-muted mb-1">
              font-mono · JetBrains Mono · 500
            </p>
            <p className="font-mono text-sm text-fg-secondary">
              Room: abyss-42 · Players: 4/5 · Ping: 24ms
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 pt-8">
          <div className="h-px w-16 bg-border-default" />
          <span className="font-mono text-[10px] tracking-widest text-fg-muted">
            SQUADLINK DESIGN SYSTEM v1.0
          </span>
          <div className="h-px w-16 bg-border-default" />
        </div>
      </main>
    </div>
  )
}
