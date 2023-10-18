import { useState } from "react"

export const useHandleUpload = () => {
  const [fileList, setFileList] = useState<FileList | null>(null)

  const handleUpload = () => {
    if (!fileList) {
      return
    }

    const files = fileList ? [...fileList] : []

    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(`file-${i}`, file, file.name)
    })
  }

  return [setFileList, handleUpload] as const
}
