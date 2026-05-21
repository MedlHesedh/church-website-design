'use client'

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, params: Record<string, unknown>) => string
      reset: (id: string) => void
      remove: (id: string) => void
    }
    onloadTurnstileCallback?: () => void
  }
}

export interface TurnstileHandle {
  reset: () => void
}

interface TurnstileWidgetProps {
  siteKey: string
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
}

export const TurnstileWidget = forwardRef<TurnstileHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ siteKey, onVerify, onExpire, onError }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<string | null>(null)

    const renderWidget = useCallback(() => {
      if (!containerRef.current || widgetIdRef.current || !window.turnstile) return
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': onExpire ?? (() => {}),
        'error-callback': onError ?? (() => {}),
        theme: 'light',
      })
    }, [siteKey, onVerify, onExpire, onError])

    useImperativeHandle(ref, () => ({
      reset() {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
        }
      },
    }))

    useEffect(() => {
      if (window.turnstile) {
        renderWidget()
        return
      }

      window.onloadTurnstileCallback = renderWidget

      if (!document.querySelector('script[data-cf-turnstile]')) {
        const script = document.createElement('script')
        script.src =
          'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
        script.async = true
        script.defer = true
        script.dataset.cfTurnstile = '1'
        document.head.appendChild(script)
      }

      return () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }
      }
    }, [renderWidget])

    return <div ref={containerRef} />
  }
)
