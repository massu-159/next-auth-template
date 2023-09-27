'use client'

import { ReactElement, useCallback } from "react"
import { IoMdClose } from 'react-icons/io'
import Button from "@/app/components/button/Button"
import { type } from "os"

type ModalProps = {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title: string
  body?: React.ReactElement
  footer?: React.ReactElement
  primaryLabel: string
  secondaryLabel?: string
  secondaryAction?: () => void
  disabled?: boolean
  del?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  primaryLabel,
  secondaryLabel,
  secondaryAction,
  disabled,
  del = false,
}) => { 
  const handleClose = useCallback(() => {
    // 閉じる
    if (disabled) return

    onClose()
  }, [onClose, disabled])
  
  const handleSubmit = useCallback(() => {
    // メイン送信
    if (disabled) return

    onSubmit()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    // サブ送信
    if (disabled || !secondaryAction) return

    secondaryAction()
  } , [secondaryAction, disabled])
  
  // オープンしていない時は表示しない
  if (!isOpen) return null
  
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/50">
        <div className="relative mx-auto h-full w-full md:h-auto md:max-w-screen-sm">
          <div className="translate h-full duration-75">
            <div className="h-full bg-white shadow-lg md:rounded-lg">
              {/* ヘッダー */}
              <div className="relative flex items-center justify-center border-b p-6">
                {/* 閉じる */}
                <div
                  className="absolute right-5 cursor-pointer rounded-full p-2 transition hover:bg-neutral-100"
                  onClick={handleClose}
                >
                  <IoMdClose size={20} />
                </div>
                {/* タイトル */}
                <div className="text-lg font-bold">{title}</div>
              </div>

              {/* 内容 */}
              <div className="relative flex-auto p-6">{body}</div>

              <div className="flex flex-col gap-2 px-6 pb-6">
                {/* ボタン */}
                <div className="flex w-full flex-row items-center gap-4">
                  {/* サブボタン */}
                  {secondaryAction && secondaryLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  {/* メインボタン */}
                  <Button
                    disabled={disabled}
                    label={primaryLabel}
                    onClick={handleSubmit}
                    del={del}
                  />
                </div>

                {/* フッター */}
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal