import Icons from '@/components/icons/Icon'
import React from 'react'
import { toast } from 'react-toastify'
import styles from './drop-zone.module.scss'

interface DropZoneProps {
  handleChange?: (file: File) => void
  multiple?: boolean
  maxFiles?: number
}

const DropZone = ({
  handleChange,
  multiple = false,
  maxFiles = 1
}: DropZoneProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [, setFile] = React.useState<File | null>(null)

  const changeFile = (files: File[]) => {
    if (files.length === 0) return
    const temp = files[0]
    if (temp.size > 25000000) {
      toast.error('File size should be less than 25 MB')
      return
    }
    setFile(temp)
    if (handleChange) {
      handleChange(temp)
    }
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    changeFile(Array.from(files))
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={styles.wrap}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}>
      <input
        className={styles.input}
        type="file"
        multiple={multiple}
        // `maxFiles` does not apply directly to `<input>`; removing it
        // accept=".pdf"
        ref={inputRef}
        onChange={(e) => changeFile(Array.from(e.target.files || []))}
      />
      <div className={styles.upload}>
        <Icons src="UploadBlue" />
      </div>
      <div className={styles.text}>
        <span
          onClick={() => inputRef?.current?.click()}
          className={styles.first_child}>
          Click to Upload
        </span>
        <span className={styles.last_child}> or drag and drop</span>
      </div>
      <div className={styles.description}> (Max. File size: 25 MB)</div>
    </div>
  )
}

export default DropZone
